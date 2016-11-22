			/*
							currVal.forEach((currData, index) => {
								console.log(object);
								var obj = my_schema.reduce((o, v, i) => {
									o[v] = currDato;
									console.log(o);
									return o;
								}, {});
							});*/



			//res.status(200).send(arr_model);
			function getSchemas (q) {
				return new Promise((resolve, reject) => {
					data.collection('esquemas_campanas')
					.find({name: "test_campana"})
					.toArray((err, result) => {
						if(err){
							reject(err)	
						} else {
									//console.log(result);
									resolve(result[0].esquema_de_datos);
								}
							});
				});
			};

			function getDatos (q) {
				var arr = [];
				//var = [];
				return new Promise((resolve, reject) => {
					q.forEach((myValue, index) => {
						if(index != 0) {
								//console.log(myValue);
								arr.push(myValue);
								//resolve(arr);
							}
						});
					resolve(arr);
				});
			};

			function makeRecord (q) {
				var arr = [];
				//var = [];
				return new Promise((resolve, reject) => {
					q.forEach((myValue, index) => {
						//console.log(myValue);
						//resolve(myValue);
						createRecord(myValue)
						.then((datos) => {
							console.log(datos);
						})	
					});
					resolve(arr);
				});
			};

			function createRecord (q) {
				var arr = [];
				var obj = {};

				return new Promise((resolve, reject) => {
					q.forEach((realValue, index) => {
						//console.log(realValue);
						console.log(schema_model);
						obj.name = realValue;
						arr.push(obj);
						obj = {};
					});
					resolve(arr);
				});
			}

			var schema_value;
			var schema_model;
			var obj = {};
			var myArr = [];

			getDatos(arr_model)
			.then((datos) => {
				schema_value = datos;
			})
			.then(() => {
				getSchemas({})
				.then((schema) => {
					//console.log(schema);
					schema_model = schema;
				})
			})
			.then(() => {
				makeRecord(schema_value);
			}) 
			.then(() => {
				res.status(200).send(schema_value);
			})

			function getSchema (q) {
				var this_schema;
				return new Promise((resolve, reject) => {
					data.collection('esquemas_campanas')
						.find({name: "test_campana"})
							.toArray((mySchema, index) => {
								console.log(Object.keys(mySchema));
								this_schema = Object.keys(mySchema);
								//console.log(this_schema);
								//resolve(this_schema);
							})
				});
				resolve(this_schema);
			}

			function getData (q) {
				var schema_data = [];
				return new Promise((resolve, reject) => {
					q.forEach((myData, index) => {
						if(index != 0) {
							schema_data.push(myData);
						}
					});
					resolve(schema_data);
				});
			}

			function getSchemas (q) {
				return new Promise((resolve, reject) => {
					data.collection('esquemas_campanas')
					.find({name: "test_campana"})
					.toArray((err, result) => {
						if(err){
							reject(err)	
						} else {
									//console.log(result);
									resolve(Object.keys(result[0].esquema_de_datos));
								}
							});
				});
			}

			var import_data;
			var import_schema;

			getSchemas({})
				.then((schema) => {
					console.log(schema);
					import_schema = schema;
			})

			getData(arr_model)
				.then((data) => {
					//console.log(data);
					import_data = data;
				})
				.then(() => {
					//console.log("hola mundo"); 
				})
				.then(() => {
					console.log({schema: import_schema, data: import_data});
				})
				.then(() => {
					res.status(200).send(import_data);
				})

				//console.log(my_schema);
						//console.log(datos);
						//console.log(my_schema);
						//console.log(datos);
						datos.forEach((currDato, index) => {
							console.log(currDato);
							var obj = my_schema.reduce((o, v, i) => {
								o[v] = currDato;
								console.log(o);
								return o;
							}, {});
						});

						getData(datos)
							.then((datas) => {
							})

			//console.log(my_schema);
			getDatos(arr_model)
			.then((datos)=>{				
			})

		function getSchema (q) {
			return new Promise((resolve, reject) => {
				data.collection('esquemas_campanas')
				.find({name: "test_campana"})
					.toArray((err, result) => {
						//console.log(Object.keys(result[0].esquema_de_datos));
					resolve(Object.keys(result[0].esquema_de_datos));
				});
			});
		}

		function getDatos (q) {
			var arr = [];
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					if(index != 0) {
						//console.log(myDatos);
						arr.push(myDatos);
					}
				});
			resolve(arr);
			});
		}

		function getData (q) {
			//var arr = [];
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					console.log(myDatos)
				});
			//resolve(arr);
			});
		}

		
		function getRealData (q) {
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					//console.log(myDatos);
				});
			});
		}							


function getSchema (q) {
			return new Promise((resolve, reject) => {
				data.collection('esquemas_campanas')
				.find({name: "test_campana"})
					.toArray((err, result) => {
						//console.log(Object.keys(result[0].esquema_de_datos));
					resolve(Object.keys(result[0].esquema_de_datos));
				});
			});
		}

		function getDatos (q) {
			var arr = [];
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					if(index != 0) {
						//console.log(myDatos);
						arr.push(myDatos);
					}
				});
			resolve(arr);
			});
		}

		function getData (q) {
			//var arr = [];
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					console.log(myDatos)
				});
			//resolve(arr);
			});
		}

		
		function getRealData (q) {
			return new Promise((resolve, reject) => {
				q.forEach((myDatos, index) => {
					//console.log(myDatos);
				});
			});
		}

			router.get('/readHead', function(req, res, next) {

		
		function puts(error, stdout, stderr) { 
			salida = stdout.split(',');
			var lastItem = salida[salida.length-1].slice(0, salida[salida.length-1].lastIndexOf('\n\r'));
			}
	exec("head -n 1 uploads/last-import.csv", puts);
});

			router.get('/listDir', function(req, res, next) {
		function puts(error, stdout, stderr) { 
			console.log(stdout);
			console.log(stderr);
			res.status(200).send({a: stdout, b: stderr});
		};
		exec("ls -v uploads", puts);	
	//exec("mkdir -v uploadas", puts);
	//exec("rm -vr uploads", puts);
});

	router.get('/listUploads', function(req, res, next) {

		function puts(error, stdout, stderr) { 
			console.log(stdout.split('\n'));
			console.log(stderr);
			let cmd_out = stdout.split('\n');
			let out_arr = [];
		//res.status(200).send({a: stdout, b: stderr});
		cmd_out.forEach(hola => {
			//console.log(hola);
			if(hola !== '') {
				out_arr.push(hola);
			}
		});

		res.status(200).send(out_arr[0]);
	};
	exec("ls -v uploads", puts);	
	//exec("mkdir -v uploadas", puts);
	//exec("rm -vr uploads", puts);
});

	//console.log();
							//Object.keys(myVal);
							data.collection('esquemas_campanas')
								.find({name: "test_campana"})
									.toArray((err, resultado) => {
										//Object.keys(mySchema[0].esquema_de_datos)
										//console.log();
										console.log(Object.keys(myVal));
										console.log(Object.keys(resultado[0].esquema_de_datos));
										/*
										if( == ) {
											console.log("las keys son iguales");
										}*/
									})

									function betterRecords (q) {
			var obj = {};
			var arr = [];
			return new Promise((resolve, reject) => {
				q.forEach((currData) => {
					console.log(currData);
				});
			});
		}