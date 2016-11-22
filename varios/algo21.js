/*
								else {
									
									result[0].usuarios.forEach(function(currUserDb) {
									if(currUserDb.name == currUser.cn) {
										
										console.log("Usuario ya existente en db");
										//return;
									
									} else {
										
										data.collection('grupos').update({
											grupo: currGroup
										},{
											$push:{
												usuarios: {
													name: currUser.cn,
													grupo: currGroup 
												}
											}
										});
									}
									});
								}
								*/
/*
	data.collection('grupos').update({
		grupo: currGroup
	},{
										$push:{
											usuarios: {
												name: currUser.cn,
												grupo: currGroup 
											}
										}
									});*/

/*
	ad.getUsersForGroup(query, function(err, users) {
		if(err) console.log(err);
			if(!users) console.log("Grupo " + currGroup + " no existe");
				else {
					//console.log(users);
					res.status(200).send(users);
					
					users.forEach(function(currUser) {
						console.log("Mostrando Usuarios");
						console.log(currUser.cn);
						
						data.collection('grupos').find({grupo: query}).toArray(function(err, result) {
							if(err){
								console.log(err);
							} else {
								//console.log(result);
								if(result[0].usuarios.length == 0) {
									data.collection('grupos').update({
										grupo: query
									},{
										$push:{
											usuarios: {
												name: currUser.cn,
												grupo: query 
											}
										}
									});
								} else {
									result[0].usuarios.forEach(function(currUserDb) {
									if(currUserDb.name == currUser.cn) {
										console.log("Usuario ya existente en db");
										return;
									} else {
										data.collection('grupos').update({
											grupo: query
										},{
											$push:{
												usuarios: {
													name: currUser.cn,
													grupo: query 
												}
											}
										});
									}
								});
							}
						}
					});	
				});

			}	
		});	
	*/

/*
		 	var getApps = function(grupo) {
		 		var appsArr;	
		 		return new Promise(function(fullfill, reject) {
		 			data.collection('profiles').find({name: grupo}).toArray(
		 			function(err, result) {
		 				return result[0].appDisp;
		 			}).done(function(res) {
		 				try {
		 					fullfill(res);
		 				} catch (ex){
		 					reject(ex);
		 				}
		 			}, reject);	
		 		});
		 	};*/

//objUser.aplicaciones = getApps(currVal.grupo);a