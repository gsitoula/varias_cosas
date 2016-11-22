//console.log(auth);
		  ad.getGroupMembershipForUser(userbase, function(err, groups) {
		  		  if(err)
		  		{
		  			console.log('ERROR: ' +JSON.stringify(err));
		  			return;
		  		}
		  		    if(!groups)
		  		  {
		  		  	console.log('User: ' + username + "not found.");
		  		  }
		  		    else
		  		  {
		  		  	//res.status(200).send(groups);

		  		  	var first_perfil = groups[0].cn;

		  		  	//console.log(first_perfil);
		  		  	
		  		  	var findPerfil = function(perfil){
		  		  		var db = mongoose.connection;

		  		  	function find(collec, query, callback){
		  		  		mongoose.connection.db.collection(collec, function(err, collection) {
		  		  			collection.find(query).toArray(callback);
		  		  		});
		  		  	 };
		  		  	find('perfils', {name: perfil}, function(err, docs) {
		  		  		
		  		  		docs.forEach(function(currentValue) {
		  		  			  if(currentValue.name === perfil)
		  		  			{	
		  		  				//console.log(docs);
		  		  				req.session.user = {token: hash, username: userbase, primary_perfil: first_perfil, appDisp: currentValue.appDisp};
		  		  				res.status(200).send(req.session.user);	
		  		  			}	
		  		         });
		  	          }); 	
		  	         }
		     		findPerfil(first_perfil);
		     }	
		  });

/* console.log(docs[0].name);
 * group_find.name = docs[0].name;
 * console.log(group_find);
 * res.status(200).send(docs[0].name);
 * return local_arr;
 */
	
app.locals.findPerfil = function(perfil){ 
	var db = mongoose.connection;
	function find (collec, query, callback) {
		mongoose.connection.db.collection(collec, function(err, collection) {
			collection.find(query).toArray(callback);
		});
	};
	find('perfiles', {name: perfil}, function(err, docs) {
		console.log(docs[0].name);
		//group_find.name = docs[0].name;
		//console.log(group_find);
		//res.status(200).send(docs[0].name)
		//return docs[0].name;
	});
}		  	