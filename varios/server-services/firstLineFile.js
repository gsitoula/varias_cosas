router.get('/firstLineFile', function(req, res, next) {

	var salida;
	var tRex;
	function puts(error, stdout, stderr) { 
		//console.log(stdout);
		salida = stdout.split(',');
			var lastItem = salida[salida.length-1].slice(0, salida[salida.length-1].lastIndexOf('\n\r'));
			salida.pop();
		//tRex = salida.push(lastItem) 
			salida.push(lastItem) 
			console.log(salida);
		//return salida;
	res.status(200).send({array: salida.length, descripcion: "first line of file"});
	//console.log(llegada)
	};
	//exec("head -n 1 csvtest.csv", puts);
	//;
	//exec("head -n 1 uploads/cfdd8b5f8af6dd935868a954fc96c17c", puts);
	
	//var rock = 
	//console.log(rock.length);
	////////res.status(200).send("rock");
});