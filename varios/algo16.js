db.contratos.aggregate([{$unwind:"$LIQUIDACION"},{$match:{"LIQUIDACION.mesLiq.año":2016}},{$match:{"LIQUIDACION.mesLiq.mes":8}}])
 este es el servicio
router.get("/getLiquidacionesPorMes", function(req, res){
    var mes=req.query.mes;
    var ano=req.query.ano;
  var urlConnect = config.dbHost + "/" + req.session.user.db;

  console.log("Usuario:"+req.session.user);

  if(!req.session.user) {

    res.status(501).send({status:501, descripcion: "La sesion a caducado"});
    return;

  } else {


    MongoClient.connect(urlConnect, function(err, db) {

        if(err) {
            throw err;
            return err;
        } else {
            //conecta db
            
            
            db.collection("contratos").aggregate(
                [
                    {$unwind:"$LIQUIDACION"},
                    {$match:{"LIQUIDACION.mesLiq.año":ano}},
                    {$match:{"LIQUIDACION.mesLiq.mes":mes}},
                    
                ]).toArray(function(err, result){
                    console.dir(result);
                    console.log("MES: "+mes+" ANO: "+ano);
                    if(err)
                        res.status(501).send(err);
                    else
                        res.status(200).send(result);

                });
            
   
        }
    });
  }   

});

arrGrupos.forEach(function(currentValue) {
        
        var objUsuario = {};
        var arrUserInGroups = [];

        //console.log(currentValue);

        objUsuario.grupo = currentValue;
        
        data.collection('profiles').find({name: currentValue}).toArray(function(err, result) {
                    
                    result.forEach(function(currentValue) {
                        objUsuario.aplicaciones = currentValue.appDisp;
                        arrUserInGroups.push(objUsuario);
                        console.log(arrUserInGroups);
                    });
        });     
        console.log(arrUserInGroups);
        res.status(200).send(arrUserInGroups);
    });