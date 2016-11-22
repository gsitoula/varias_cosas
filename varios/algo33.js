		new_split.forEach((record, index, array) => {
			//my_model[record] = null;
			//asdqwe.push(my_model);
			//console.log(index);
			//var rec_data;
			//console.log(array);
			counter = 0;

			if(record != "nombre") {
				//console.log("records distintos de nombre: " + record);
				//rec_data = record;
				//rec_data = null;
				obj_val = { obj_key: record, counter: counter};
				//counter=+1;
				counter+=1;
				//console.log(obj_val);
				arr_obj_key.push(obj_val);
				obj_val = {};
			}
			
			if(record == "nombre") {
				//my_model[record] = rec_data;
				//my_model_arr.push(my_model);
				//my_model = {};
				//console.log(my_model);
				counter=+1;
				obj_key = { obj_key: record, counter: counter};
				//console.log(obj_key);
				arr_obj_key.push(obj_key);
				obj_key = {};
			}

			
			//console.log(arr_obj_key)

			arr_obj_key.forEach((objs) => {
				//console.log(objs.obj_key);
				
				if(objs.counter == 1) {
					console.log(objs);
					/*
					my_model[objs.obj_key] = objs.obj_value;
					//console.log(my_model);
					my_model_arr.push(my_model);
					my_model = {};*/
				}
			});
				//console.log(my_model_arr);			
		});