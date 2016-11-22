							/*	
		  if(matching === docs[0].name)
		{
			res.status(200).send("hola mundo");
		}
		  else 
		{
			res.status(501).send({err: 1});	
		}*/

var data_handler = JSON.stringify(groups[0].cn);
            	var user_group = data_handler;
            	var a_0 = "hola mundo";
            	var a_1 = "hola mundo";
            	var var_str = {as: "Administradores"};          	
            	console.log(user_group);
            	//console.log(req.app.locals.findGroup(user_group))		
				//res.status(200).send(groups[0].cn);
				  if(user_group !== var_str.as) //req.app.locals.findGroup(user_group)
				{
					res.status(501).send('el usuario no pertenece al grupo requerido');
				}
				  else
				{
					res.status(200).send(user_group);	
				}	
			
				/* primero autenticar contra el AD para luego iniciar la busqueda*/
				ad.authenticate(username, pass, function(err, auth){

					  if(err)
					{
						console.log(err);
					}
					  else
					{	
					    if(!auth)
					  {
					  	/*Autenticacion fallida*/
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