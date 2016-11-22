				router.get('/mashupSchema', (req, res, next) => {
		data.collection('contactos_potenciales')
		.find({campana: 'test_campana'})
		.toArray((err, result) => {
			if(err) throw err;
						//console.log(result[0].contactos);
						result[0].contactos.forEach((myVal) => {
							for(var i = 0; i<Object.keys(myVal).length; i++){
								console.log(myVal["" + i + ""]);
							}
						})
					})
	});


			arr.forEach((info, index) => {
				//console.log(info);
			data.collection('esquemas').find({nombre_esquema: "test_campana"})
				.toArray((err, schema) => {
					//console.log(schema[0].esquema_de_datos);
					//console.log(info[0]);
					var obj = {
						[schema[0].esquema_de_datos._o1]: info[0],
						[schema[0].esquema_de_datos._o2]: info[1],
						[schema[0].esquema_de_datos._o3]: info[2],
						[schema[0].esquema_de_datos._o4]: info[3],
						[schema[0].esquema_de_datos._o5]: info[4]
					};
					//console.log(obj);
					//console.log(my_model_arr);	
					my_model_arr.push(obj);
					return my_model_arr;
				});
			 });

			//console.log(arr_model);
			
			/*
			console.log(my_model_arr);
			data.collection('campanas_potenciales').save({ campana: "test_campana", contactos: my_model_arr}, function(err, result){
  				//console.log(result);
  				if(err){
  					console.log(err);
  					res.status(501).send({status:501, descripcion: "Ocurrio un error."});
  				return;
  				}
  			});
  			*/

  			if(arr_model){
			for(var i=0; i<=arr_model;i++) {
				//console.log("hola mundo");
				console.log(arr_model[0][i]);
			};
			}

			/*
  			function saveSchema(arr) {
  				return arr;
			};*/
			
			//saveSchema(arr_model)
			
			//obj[keys] = null;
				//console.log(obj);
				arr_model.forEach((values, index) => {
					//console.log(values);
					if(index != 0) {
						//console.log(values);
						obj[keys] = values;
					}
				});

			/*console.log();
			for(var i = 0; i<=arr_model[0].length;i++){
				var obj = {};
				obj[arr_model[0][i]] = "hola mundo";
				console.log(obj);
			}*/
			
				obj[Object.keys(obj)[0]] = myVal;
				obj[Object.keys(obj)[1]] = myVal;
				obj[Object.keys(obj)[2]] = myVal;
				obj[Object.keys(obj)[3]] = myVal;
				obj[Object.keys(obj)[4]] = myVal;
				my_model_arr.push(obj);	

				/*
			arr_model.forEach((keys, index) => {
				//console.log(keys);
				if(index == 0) {
					//console.log(keys);
					//obj[keys] = null
					keys.forEach((myKey) => {
						obj[myKey] = null;
					});
				}
				//console.log(obj); 
			});
			
			arr_model.forEach((myVal, index) => {
				var my_obj = obj;
				if(index != 0) {
					//console.log(Object.keys(obj)[0]);
					//Object.keys(obj)
					//myVal.forEach((values, index) => {
						my_obj[Object.keys(obj)[0]] = myVal[0];
						my_obj[Object.keys(obj)[1]] = myVal[1];
						my_obj[Object.keys(obj)[2]] = myVal[2];
						my_obj[Object.keys(obj)[3]] = myVal[3];
						my_obj[Object.keys(obj)[4]] = myVal[4];
						console.log(my_obj);
						my_model_arr.push(my_obj);
						//my_obj = obj; 	
					//});
				}
			});*/

			/*console.log(Object.keys(result[0].esquema_de_datos));
					console.log(split_it);*/
					//console.log();

			/*
			var obj = {};
			//console.log(arr_model);
			data.collection('esquemas_campanas').find({name:"test_campana"})
				.toArray((err, result) => {
					 obj = result[0].esquema_de_datos;
					//console.log(obj);
					arr_model.forEach((value, index) => {
						//console.log(value);
						if(index != 0) {
							value.forEach((currValue) => {
								//console.log(currValue);
								console.log(obj)
							});
						}
					});
			});*/
			
			//console.log(i);
						//Object.keys(result[0].esquema_de_datos)
						/*
						objeto.nombre = split_it[0];
						objeto.apellido = split_it[1];
						objeto.edad = split_it[2];
						objeto.dni = split_it[3];
						objeto.direccion = split_it[4];*/

						data.collection('esquemas_campanas').find({name: "test_campana"})
			.toArray((err, result) => {
					//console.log(Object.keys(result[0].esquema_de_datos).length);
					for(var i =0; i<Object.keys(result[0].esquema_de_datos).length; i++){
						objeto[Object.keys(result[0].esquema_de_datos)[i]] = split_it[i];
						console.log(objeto);
						arr_model.push(objeto);
						//objeto = {};
					}
				});

				/*
			arr_model.forEach((myValue, index) => {
				if(index != 0) {
					console.log(myValue);
				}
			});*/

			var arr = [];

			var getSchema = function(arr) {
				var obj;
				data.collection('esquemas_campanas')
					.find({name: "test_campana"})
						.toArray((err, result) => {
							obj = result[0].esquema_de_datos;
							for(var i = 0; i<Object.keys(obj).length; i++) {
								obj[Object.keys(obj)[i]] = "lala";
							}
							console.log(obj);
							arr.push(obj);
							//res.status(200).send(arr);
						});
					//return arr;
			};
			getSchema(arr);		

			getSchemas({})
									.then((data) => {
										//console.log(Object.keys(data).len);
									})

									/*	
			getSchemas({})
				.then((data) => {
					//console.log(data);
					//schema_value = data;
					res.status(200).send(data)
				})*/

				console.log("paso por aca");
					schema_value.forEach((myValue, index) => {
						//console.log(myValue);
						myValue.forEach((myData, index) => {
							console.log(myData);
							obj.nombre = myData;
							obj.apellido = myData;
							obj.edad = myData;
							obj.dni = myData;
							obj.direccion = myData;
							myArr.push(obj);
							obj = {};
							console.log(myArr)
						})
					})