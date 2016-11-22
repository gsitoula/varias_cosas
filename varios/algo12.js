
   			var findUser = function(user, pass, hash) {
				var db = mongoose.connection;

				function find(collec, query, callback) {
					mongoose.connection.db.collection(collec, function(err, collection) {
						collection.find(query).toArray(callback);
					});
				};
				find('users', { name: user }, function(err, docs) {

					//console.log(docs);

					if(docs[0] === undefined ){
						res.status(501).send({
							err: 49,
							descripcion: "El usuario no existe en la Base de Datos"
						});
						return;
					}

					docs.forEach(function(currentValue) {
						//console.log(currentValue);
	   				if(currentValue.password !== pass) {
	   					res.status(401).send({
	   						err: 51,
	   						descripcion:"Contraseña invalida"
	   					});
						return;
	   				}

	   		req.session.user = {

					token: hash,
					name: currentValue.name,
					profile: currentValue.profiles

					};
					var sessionUser =	JSON.stringify(req.session.user);
					//console.log("session de usuario: " + sessionUser);
					res.status(200).json(req.session.user);
				});
			});
		}
			findUser(userbase, pass, hash);

            
	var findPerfil = function(perfil) {

			var db = mongoose.connection;
			function find(collec, query, callback) {
				mongoose.connection.db.collection(collec, function(err, collection) {
					collection.find(query).toArray(callback);
				});
			};
			find('profiles', { name: perfil }, function(err, docs) {
				//console.log(docs);
				docs.forEach(function(currentValue) {

					if (currentValue.name === perfil) {
						console.dir(currentValue);

						res.status(200).send(currentValue.appDisp);
					}
				});
			});
		}
	findPerfil(req.session.user.profile);