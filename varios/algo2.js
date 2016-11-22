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
		/*	
		  if(matching === docs[0].name)
		{
			res.status(200).send("hola mundo");
		}
		  else 
		{
			res.status(501).send({err: 1});	
		}*/		
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