var url_type = req.originalUrl.substring(1,4).toUpperCase();
    //console.log(url_type);

    //var i_idCamp = req.body.idCamp;      
    var c_produc = req.body.produc;          
    var d_fecVig = req.body.fecVig;     
    var d_fecVen = req.body.fecVen;
    var s_numPol = req.body.numPol;
    var s_numSec = req.body.numSec;
    var s_apeNom = req.body.apeNom;
    var s_apelli = req.body.apelli;
    var s_nombre = req.body.nombre;
    var s_sexo   = req.body.sexo;
    var d_fecNac = req.body.fecNac;
    var i_docTip = req.body.docTip;
    var s_docNum = req.body.docNum;
    var s_domici = req.body.domici;
    var s_locali = req.body.locali;
    var s_provin = req.body.provin;
    var s_pais   = req.body.pais;
    var s_codPos = req.body.codPos;
    var s_codAr1 = req.body.codAr1;
    var s_telef1 = req.body.telef1;
    var s_codAr2 = req.body.codAr2;
    var s_telef2 = req.body.telef2;
    var s_codArF = req.body.codArF;
    var s_faxNum = req.body.faxNum;
    var s_email1 = req.body.email1;
    var s_email2 = req.body.email2;
    var s_cuit   = req.body.cuit;
    var s_patent = req.body.patent;
    var s_marVeh = req.body.marVeh;
    var s_modelo = req.body.modelo;
    var s_vehCol = req.body.vehCol;
    var s_vehAno = req.body.vehAno;
    var s_numMot = req.body.numMot;
    var i_tipVeh = req.body.tipVeh;
    var c_operat = req.body.operat;
    
    if(!req.session.user)
    {
     res.status(501).send({err:49, descripcion: "su sesion ha caducado"});
    }
 else 
 {    
  if(req.session.user.token !== req.param("token"))
 {
     res.status(401).send({err: 1, descripcion: "La sesion a expirado / Bad Authenticity Token"});
 } 
 else 
 {
    var conn = new sql.Connection(config.dbConfig);
    var request = new sql.Request(conn);

    conn.connect(function(err) {
        if(err) 
        {
            console.log(err);
            req.app.locals.errorLogger(err, url_type);
            res.status(501).send(err);
            return;
        } 
        else 
        {   

            /* -- Set de Poliza -- */              
            var gcDis = "auxiliout.dbo.GetCoberturasPorProducto";
            var sAbmPol = "auxiliout.dbo.SetABMPolizaIntegracion";

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
                        
                        var i_idCamp = recordsets[0].idcampana; 
                        var c_hog = recordsets[0].CoberturaHogar;
                        var c_veh = recordsets[0].CoberturaVehiculo;
                        var c_via = recordsets[0].CoberturaHogar;
                        //req.app.locals.alogsLogger(url_type);
                        /*
                        console.log(recordsets);
                        console.log(affected);
                        console.log(returnValue);*/

                        request.input('idCampana', sql.Int, i_idCamp);
                        /*request.input('coberturavehiculo', sql.NVarChar, c_veh);
                        request.input('coberturahogar', sql.NVarChar, c_hog);
                        request.input('coberturaviajero', sql.NVarChar, c_via);
                        request.input('fechadevigencia', sql.NVarChar, d_fecVig);
                        request.input('fechadevencimiento', sql.NVarChar, d_fecVen);
                        request.input('nrodepoliza', sql.NVarChar, s_numPol);
                        request.input('nrosecuencial', sql.NVarChar, s_numSec);
                        request.input('apellidoynombre', sql.NVarChar, s_apeNom);
                        request.input('apellido', sql.NVarChar, s_apelli);
                        request.input('nombre', sql.NVarChar, s_nombre);
                        request.input('sexo', sql.NVarChar, s_sexo);
                        request.input('fechadenacimiento', sql.NVarChar, d_fecNac);
                        request.input('idtipodedocumento', sql.Int, i_docTip);
                        request.input('numerodedocumento', sql.NVarChar, s_docNum);
                        request.input('domicilio', sql.NVarChar, s_domici);
                        request.input('localidad', sql.NVarChar, s_locali);
                        request.input('provincia', sql.NVarChar, s_provin);
                        request.input('pais', sql.NVarChar, s_pais);
                        request.input('codigopostal', sql.NVarChar, s_codPos);
                        request.input('codigodearea1', sql.NVarChar, s_codAr1);
                        request.input('telefono1', sql.NVarChar, s_telef1);
                        request.input('codigodearea2', sql.NVarChar, s_codAr2);
                        request.input('telefono2', sql.NVarChar, s_telef2);
                        request.input('codigodeareafax', sql.NVarChar, s_codArF);
                        request.input('fax', sql.NVarChar, s_faxNum);
                        request.input('email1', sql.NVarChar, s_email1);
                        request.input('email2', sql.NVarChar, s_email2);
                        request.input('cuit', sql.NVarChar, s_cuit);
                        request.input('patente', sql.NVarChar, s_patent);
                        request.input('marcadevehiculo', sql.NVarChar, s_marVeh);
                        request.input('modelo', sql.NVarChar, s_modelo);
                        request.input('color', sql.NVarChar, s_vehCol);
                        request.input('Ano', sql.NVarChar, s_vehAno);
                        request.input('NRODEMOTOR', sql.NVarChar, s_numMot);
                        request.input('TIPODEVEHICULO', sql.Int, i_tipVeh);
                        request.input('Operacion', sql.NVarChar, c_operat);*/

                        request.execute(sAbmPol, function(err, recordsets, returnValue, affected) {
                              if(err) 
                            {   
                                console.log(err);
                                    //req.app.locals.errorLogger(err, url_type);
                                    res.status(501).json(err);
                                    return;
                            } 
                              else 
                            {   
                                //req.app.locals.alogsLogger(url_type);
                                console.log(recordsets);
                                console.log(affected);
                                console.log(returnValue);                                   
                            }
                            //conn.close();
                        });
                                                           
                    }   
                    conn.close();
                });            
               }
            }); 
           }
          }