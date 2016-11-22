router.get('/test', function(req, res) {

    var conn = new sql.Connection(config.dbConfig);
    var request = new sql.Request(conn);

    conn.connect(function(err) {
        if(err) 
        {
            console.log(err);
                //req.app.locals.errorLogger(err, url_type);
                res.status(501).send(err);
                return;
            } 
            else 
            {
                var c_produc = '01';
                var gcDis = "auxiliout.dbo.GetCoberturasPorProducto";
                request.input('idproducto', sql.Int, c_produc);
                request.execute(gcDis, function(err, recordsets, returnValue, affected) {
                  if(err) 
                  {   
                    console.log(err);
                        //req.app.locals.errorLogger(err, url_type);
                        res.status(501).json(err);
                        return;
                    } 
                    else 
                    {   
                        /*Hogar Vehiculo Viajero*/
                        /*
                        var c_hog = recordsets[0].coberturahogar;
                        var c_veh = recordsets[0].coberturavehiculo;
                        var c_via = recordsets[0].coberturahogar;
                        req.app.locals.alogsLogger(url_type);
                        */
                        console.log(recordsets);
                        console.log(affected);
                        console.log(returnValue);                                   
                    }
                    conn.close();
                });
            }
        });
});