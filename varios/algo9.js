
var perfilSchema = mongoose.Schema({
        name: String,
     appDisp: Object          
});

var Perfil = mongoose.model('Perfil', perfilSchema);

/*  ¡ATENCION! SET DE PERFILES EN MONGODB
 *  AL AGREGAR UN PERFIL CERCIORARSE QUE TODOS 	
 *  INGRESADOS CONCUERDEN CON EL SCHEMA QUE SE ESTA
 *	USANDO, YA QUE EN CASO QUE ESTEN MAL, EL SERVICIO
 *  INGRESARA LOS DATOS DE TODAS FORMAS.
 */ 

app.post('/setPerfil', function(req, res) {
  
  var perfil_5  = req.body.perfil;
  var app_name     = req.body.name;
  var app_icon     = req.body.icon;

    var perfilLog = function(perfil){
  
      var db = mongoose.connection;
  	    var perfil_2 = new Perfil({name: perfil, appDisp: {name: app_name, icon: app_icon}});

          var promise = perfil_2.save();
      		assert.ok(promise instanceof require('mpromise'));

       	      promise.then(function (doc) {
                assert.equal(doc.name,"Perfil");
               	res.status(200).send(doc);
               	return "ok";
              });
             }
               perfilLog(perfil_5);	  
});


app.post('/findPerfil', function(req, res) {
  
  var perfilToFind  = req.body.find;
  var perfilToMatch = req.body.match;

  
  var findPerfil = function(perfil, matching){ 
	var db = mongoose.connection;
	
	function find (collec, query, callback) {
		mongoose.connection.db.collection(collec, function(err, collection) {
			collection.find(query).toArray(callback);
		});
	};

	find('perfils', {name: perfil}, function(err, docs) {
		  /*if(matching === docs[0].name)
		{
			res.status(200).redirect("/redirect");
		}
		  else 
		{
			res.status(501).send({err: 1});	
		}*/	
		console.log(docs);
		res.status(200).send(docs);	
	});
}	
	findPerfil(perfilToFind, perfilToMatch);
});