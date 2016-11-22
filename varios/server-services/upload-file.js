/* Servicio en Desarrollo */
/*
router.post('/uploadFile', function(req, res, next) {
	//console.log(data);
	//console.log(req.body.data);
	
	/*
	var writting = JSON.stringify(req.body.data);
	
	fs.writeFile('test.txt', writting, (err) => {
  		if (err) throw err;
  			console.log('It\'s saved!');
	});
	*/
	/*
	data.collection('upload').save(req.body.data, {w:1}, function(err, result) {
		if(err) {
			console.log(err);
			res.status(501).send(err);
			return;
		} 
		//console.log(result['ops'][0]['_id']);
		res.status(200).send({resultado: result, id_contrato: result['ops'][0]['_id']});
	});
	*/
	//res.status(200).send(req.body);
//});	