router.get('/getFunctionReturn', function(req, res) {
	
	function sayHello(){
		return "hola mundo";
	}

	res.status(200).send(sayHello());
});

router.get('/getUsersAndGroups', function(req, res) {
	
	data.collection('grupos').find().toArray(function(err, result) {
		if(err) console.log(err);
		 else {

		 	var getUsers = function(arr) {
		 		
		 		var objUser = {};
		 		var user = [];	

			 	arr.forEach(function(currVal) {
			 		objUser.grupo = currVal.grupo;
			 		objUser.usuarios = currVal.usuarios; 
			 		objUser.aplicaciones = currVal.appDisp;
			 		user.push(objUser);
			 		objUser = {};
			 	});
			 	return user;
		 	};

		 	res.status(200).send(getUsers(result));
		 }
	});
});

/* --------------------------- */
	//res.status(200).send("Tabla de usuarios ha sido actualizada");
	/*
	data.collection('grupos').find().toArray(function(err, result) {
		if(err) console.log(err);
		 else {

		 	var getUsers = function(arr) {
		 		
		 		var objUser = {};
		 		var user = [];	

			 	arr.forEach(function(currVal) {
			 		objUser.grupo = currVal.grupo;
			 		objUser.usuarios = currVal.usuarios; 
			 		objUser.aplicaciones = currVal.appDisp;
			 		user.push(objUser);
			 		objUser = {};
			 	});
			 	return user;
		 	};

		 	res.status(200).send(getUsers(result));
		 }
	});*/

	router.get('/getGroups', function(req, res) {
	//console.log(req.query.grupo);
	var query = "CN=*" + req.query.grupo + "*";
	//var query = "CN=*Admin*";

	console.log("el servicio se ha ejectuado");

	ad.findGroups(query, function(err, groups) {
		if(err){
			console.log("ERROR ERROR ERROR");			
			console.log('Error: ' + JSON.stringify(err));
			return;
		}

		if( (!groups) || (groups.length == 0) ) {
				//console.log('No groups found');
				res.status(501).send('No groups found');
		} else {
				//console.log(groups);
				//console.log('find Groups: ' + JSON.stringify(groups));
				res.status(200).send(groups);
			}
	});

});

router.get('/getUsersforGroup', function(req, res) {
	
	var grupo = req.query.grupo;

	ad.getUsersForGroup(grupo, function(err, users) {
  		if (err) {
    		console.log('ERROR: ' +JSON.stringify(err));
    		return;
  		}

  		if (!users) {
  			//console.log('Group: ' + grupo + ' not found.');
  			res.status(404).send('Group: ' + grupo + ' not found.')
  		} else {
    		//console.log(JSON.stringify(users));
    		res.status(200).send(users);
  		}
	});
});

router.get('/getUsersGroups', function(req, res) {

	var arrUsers = [];
	var grupos = ["Teamleaders", "Operadores", "Supervisores"];
	var objGrupo = {};
	
	/*
	data.eval('getGrupos()', function(err, doc){

		if(err) { 
			console.log(err); 
			return; 
		}
			else {
				console.log(doc);
				res.status(200).send(doc);
		}
	});*/
	var grupo = "Supervisores";

	ad.getUsersForGroup(grupo, function(err, users) {
		if(err) console.error(err);
			if(!users) console.log("El grupo " + grupo + "no existe en AD");
				else {
					res.status(200).send(users);
				}
	});
});

/*
	function getUsersInAd(grupo){

		var arrUsers = [];

		ad.getUsersForGroup(grupo, function(err, users) {
			//console.log(grupo);

			if(err) console.log(err);
				if(!users) console.log("Grupo " + grupo + "inexistente");
			else {
				console.log(users);
				users.forEach(function(currentValue) {
					console.log(currentValue.displayName);
				});
				arrUsers.push(users);
				//return arrUsers;
			}
		});
		return arrUsers;
	};*/
	


router.get('/getGroupsForUsers', function(req, res) {

	var grupos = ["Teamleaders", "Operadores", "Supervisores"];	
	res.status(200).send(grupos);
});

router.get('/getUsersAndApps', function(req, res) {
	
	/*
	[	mongo         active Dir          mongo
	 {grupo:"xxx", users:["x","x","x"], apps: ["x"]},
	 {grupo:"yyy", users:["y","y","y"], apps: ["y"]},
	 {grupo:"zzz", users:["z","z","z"], apps: ["z"]}
	]
	*/

	var arrUsers = [];

	ad.getUsersForGroup(req.query.grupo, function(err, users) {
		
		if(err) console.log(err);
				if(!users) console.log("Grupo " + grupo + "inexistente");
			else {
				//console.log(users);
				//arrUsers.push({grupo:req.query.grupo,usuarios: users});

				data.collection('profiles').find({name: req.query.grupo}).toArray(function(err, result) {
					//console.log(result);
					/*
					result.forEach(function(currentValue) {
						console.log(currentValue);
					});*/	
					res.status(200).send({ grupo:req.query.grupo, usuarios: users, aplicaciones: result});
				});

			}
	});		
});	

router.get('/getGroupsAndUsers', function(req, res) {
	
	var arrGruposApps = [];
	var objGrupo = {};

	data.collection('grupos').find().toArray(function(err, result) {
		//res.status(200).send({ group: result[0].grupos });
		result[0].grupos.forEach(function(currGroup) {
			
			objGrupo.grupo = currGroup; 
			
			ad.getUsersForGroup(currGroup, function(err, users) {
					if(err) console.log(err);
						if(!users) console.log("Grupo " + currGroup + " no existe");
					else {
						//console.log(users);
						objGrupo.app = users;
						//console.log(objGrupo);
					}	
			});

			data.collection('profiles').find({name: currGroup}).toArray(function(err, result) {
					//console.log(result);
					objGrupo.app = result.appDisp;
					console.log(objGrupo);
			});
			arrGruposApps.push(objGrupo);
			//console.log(arrGruposApps);	
		});
	});

});