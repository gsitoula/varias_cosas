//var search   = req.body.search;
	

	/* primero autenticar contra el AD para luego iniciar la busqueda*/
				ad.authenticate(username, pass, function(err, auth){

					  if(err)
					{
						console.dir(err);
					}
					  else
					{	
					    if(!auth)
					  {
					  	/*Autenticacion fallida*/
					  	res.status(501).send({err: 1, descripcion: "ha ocurrido un error durante la autenticacion de sus credenciales"})
					  }	
					   else
					  {
					    /*
					      Averiguamos a que grupo pertenece el usuario 
					      sea Administradores, Usuarios, etc. para luego
					      matchear contra la base de datos el mismo, lo que
					      nos brindara la Url del Home.
					    */	
					    ad.getGroupMembershipForUser(username, function(err, groups) {
						  if(err) 
						{
							console.log('ERROR: ' +JSON.stringify(err));
							return;
						}
		  				  if(!groups)
						{
							console.log('User: ' + search + ' not found.');	
						} 
		  				  else 
						{   
		  					var first_group = groups[0].cn;		
		  					console.log(JSON.stringify(groups[0].cn));
		    				var findGroup = function(group){ 
			  				var db = mongoose.connection;
	
							function find (collec, query, callback) {
			  					mongoose.connection.db.collection(collec, function(err, collection) {
		        					collection.find(query).toArray(callback);
							  });
		  					};
		    				find('groups', {name: group}, function(err, docs) {				
	   						/* ------- */
	      					docs.forEach(function(currentValue) {
	      					//console.log(currentValue);
	      	  				  if(currentValue.name === groups[0].cn)
	      					{  	
	      					  req.session.user = {token: hash};
	      					  res.status(200).redirect(currentValue.userUrl);
	      					}
	      				 });
	   				  });
    			     }	
	      					findGroup(groups[0].cn);  	           	            	
		   }
		});
	   }
	  }
   });