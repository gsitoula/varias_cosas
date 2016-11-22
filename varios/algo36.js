for(var i = 0; i<arr_schema.length; i++) {
	if(arr_schema[i] != arr_file[i]) {
		console.log({head_schema: arr_schema[i], head_file: arr_file[i]});
		reject({desc: "La cabecera es diferente"})
	} else {
		if(arr_schema[i] == arr_file[i]) {
			console.log({head_schema: arr_schema[i], head_file: arr_file[i]});
													//console.log("Las cabeceras son iguales");
													resolve({desc: "Las cabeceras son iguales"})
												}
											}	
										}

										if(arr_schema.length != arr_file.length) {
											console.log("La cabecera es diferente");
											reject({desc: "La cabecera es diferente"});
										} else {
											for(var i = 0; i<arr_schema.length; i++) {

												if(arr_schema[i] !== arr_file[i]) {
											//console.log({head_schema: arr_schema[i], head_file: arr_file[i]});
											console.log(arr_schema[i] === arr_file[i]);
											reject({desc: "La cabecera es diferente"});
										}
										else if(arr_schema[i] === arr_file[i]) {
											console.log(arr_schema[i] === arr_file[i]);
											//console.log({head_schema: arr_schema[i], head_file: arr_file[i]});
											resolve({desc: "Las cabeceras son iguales"})
										}

										
									}
								}

								for(var i = 0; i<arr_schema.length; i++) {

									for(var i = 0; i<arr_schema.length; i++) {
										if(arr_schema.length !== arr_file.length) {
											reject({desc: "La cabecera es diferente"});
											return;
										} 
									/*
									else if(arr_schema[i] !== arr_file[i]) {
											console.log({arr_schema: arr_schema[i],arr_file: arr_file[i]});
											console.log(arr_schema[i] === arr_file[i]);
											return reject({desc: "Las cabeceras no son iguales"});
									}
									*/
									
									else if(arr_schema[i] !== arr_file[i]) {
										console.log({arr_schema: arr_schema[i],arr_file: arr_file[i]});
										console.log(arr_schema[i] === arr_file[i]);
										return resolve({desc: "Las cabeceras son iguales"});
									} 
									else {
										return reject({desc: "Las cabeceras no son iguales"});
									} 
								}									