
router.get('/getUsersGroups', function(req, res) {

	var teamleaders = 'Teamleaders';
	var supervisores = 'Supervisores';
	var operadores = 'Operadores';
	var arrUserInGroups = [];
	var grupoOperadores = {};

	ad.getUsersForGroup('Teamleaders', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    
                    var grupoTeamLead = {};

                    users.forEach(function(currentValue){
                        //console.log(currentValue.displayName);

                        /*
                        data.collection('profiles').find({name: teamleaders}).toArray(function(err, result) {
                                                     
                            	result.forEach(function(currentValue) {
                            	//console.log(currentValue);
                            	grupoTeamLead.aplicaciones = currentValue.appDisp;
                        	});
                    	});*/     
                        
                        grupoTeamLead.grupo = teamleaders;
                        grupoTeamLead.name = currentValue.displayName;
                        arrUserInGroups.push(grupoTeamLead);
            			res.status(200).send(arrUserInGroups);
                   	});
            }
        });

		/*
        ad.getUsersForGroup('Supervisores', function(err, users) {
            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var grupoSuperVisores = {};

                    users.forEach(function(currentValue){
                        
                        //console.log(currentValue.displayName);
                        
                        data.collection('profiles').find({name: supervisores}).toArray(function(err, result) {
                            
                            //console.log(result);
                            
                            result.forEach(function(currentValue) {
                            console.log(currentValue);
                            grupoSuperVisores.aplicaciones = currentValue.appDisp;
                        }); 
                    });
                        grupoSuperVisores.grupo = supervisores;
                        grupoSuperVisores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoSuperVisores);
                    });
            }
        });*/

        /*
        ad.getUsersForGroup('Operadores', function(err, users) {
            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var grupoOperadores = {};

                    users.forEach(function(currentValue){
                        
                        //console.log(currentValue.displayName);
                        
                        data.collection('profiles').find({name: 'Operadores'}).toArray(function(err, result) {
                            
                            //console.log(result);
                            
                            result.forEach(function(currentValue) {
                            console.log(currentValue);
                            grupoOperadores.aplicaciones = currentValue.appDisp;
                        }); 
                    });
                        grupoOperadores.grupo = operadores;
                        grupoOperadores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoOperadores);
                    });
            }
        });*/

});


router.get('/getUsersGroups', function(req, res) {
    
    var teamleaders = 'Teamleaders';
    var supervisores = 'Supervisores';
    var operadores = 'Operadores';
    var arrUserInGroups = [];
    var grupoOperadores = {};

    ad.getUsersForGroup('Teamleaders', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    
                    var grupoTeamLead = {};

                    users.forEach(function(currentValue){     
                        grupoTeamLead.grupo = teamleaders;
                        grupoTeamLead.name = currentValue.displayName;
                        arrUserInGroups.push(grupoTeamLead);
                    });
                //res.status(200).send(arrUserInGroups);
            }
    });

        ad.getUsersForGroup('Supervisores', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    
                    var grupoSupervisores = {};

                    users.forEach(function(currentValue){     
                        grupoSupervisores.grupo = supervisores;
                        grupoSupervisores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoSupervisores);
                    });
                //res.status(200).send(arrUserInGroups);
            }
    });

        ad.getUsersForGroup('Operadores', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    
                    var grupoOperadores = {};

                    users.forEach(function(currentValue){     
                        grupoOperadores.grupo = operadores;
                        grupoOperadores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoOperadores);
                    });
                res.status(200).send(arrUserInGroups);
            }
    });

});

ad.getUsersForGroup('Teamleaders', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    
                    var grupoTeamLead = {};

                    data.collection('profiles').find({name: teamleaders}).toArray(function(err, result) {
                            grupoTeamLead.aplicaciones = result;
                            /*                         
                            result.forEach(function(currentValue) {
                            //console.log(currentValue);
                            grupoTeamLead.aplicaciones = currentValue.appDisp;
                        });*/
                    });

                    users.forEach(function(currentValue){     
                        grupoTeamLead.grupo = teamleaders;
                        grupoTeamLead.name = currentValue.displayName;
                        arrUserInGroups.push(grupoTeamLead);
                    });

                res.status(200).send(arrUserInGroups);
            }
    });


    arrGrupos.forEach(function(currentValue) {

        ad.getUsersForGroup(currentValue, function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    users.forEach(function(currentValue) {
                        //console.log(currentValue.displayName);
                        arrUserInGroups.push(currentValue.displayName);
                    });
                }
        });
    });
        res.status(200).send(arrUserInGroups);


// assuming openFiles is an array of file names and saveFile is a function
// to save the modified contents of that file:

async.each(openFiles, saveFile, function(err){
  // if any of the saves produced an error, err would equal that error
});

// assuming openFiles is an array of file names
async.each(grupos, function(grupos, callback) {
      // Procesamiento de datos
      console.log('Procesando dato: ' + grupos);
      arrUser.push(grupos);
      callback();
}, function(err) {
    if( err ) {
      //callback final disparado luego del proceso de datos
      console.log('Error en el proceso');
    } else {
      //respuesta
      res.status(200).send(arrUser);
    }
});        


ad.getUsersForGroup('Teamleaders', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var obj = {};
                    
                    users.forEach(function(currentValue) {
                        obj.name = currentValue.displayName;
                    });
                    arrUserInGroups.push(obj);
                    //res.send(obj);
                }
        });

    ad.getUsersForGroup('Supervisores', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var obj = {};
                    
                    users.forEach(function(currentValue) {
                        obj.name = currentValue.displayName;
                    });
                    arrUserInGroups.push(obj);
                    //res.send(obj);
                }
        });
    
    ad.getUsersForGroup('Operadores', function(err, users) {

            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var obj = {};
                    
                    users.forEach(function(currentValue) {
                        obj.name = currentValue.displayName;
                    });
                    arrUserInGroups.push(obj);
                    res.send(arrUserInGroups);
                }
        });


router.get('/getUsersGroups', function(req, res) {
    
    var grupos = ["Operadores", "Teamleaders", "Supervisores"];

    var objUser = {};
    var arrUser = [];

    grupos.forEach(function(currentValue) {
        console.log(currentValue);
        ad.getUsersForGroup(currentValue, function(err, users) {
            
            if (err) {
                    console.log('ERROR: ' +JSON.stringify(err));
                    return;
                }

                if (! users) console.log('Group: ' + groupName + ' not found.');
                    else {
                        console.log(users);

                        users.forEach(function(currentUser) {
                                console.log(currentUser)
                                data.collection('profiles').find({name: currentValue}).toArray(function(err, result) {
                                    console.log(result);
                                    result.forEach(function(currentApp) {
                                        console.log(currentApp);
                                        arrUser.push({grupo: currentValue, usuario: currentUser.displayName, aplicaciones: currentApp});
                                    
                                    }); 
                                });
                        });
                    }
        });
    });
    
    res.status(200).send(arrUser);

});

router.get('/getUsersGroups', function(req, res) {
    
    var grupos = ["Operadores", "Teamleaders", "Supervisores"];

    var objUser = {};
    var arrUser = [];

    grupos.forEach(function(currentValue) {
        console.log(currentValue);
        ad.getUsersForGroup(currentValue, function(err, users) {
            
            if (err) {
                    console.log('ERROR: ' +JSON.stringify(err));
                    return;
                }

                if (! users) console.log('Group: ' + groupName + ' not found.');
                    else {
                        console.log(users);

                        users.forEach(function(currentUser) {
                                console.log(currentUser)
                                data.collection('profiles').find({name: currentValue}).toArray(function(err, result) {
                                    console.log(result);
                                    result.forEach(function(currentApp) {
                                        console.log(currentApp);
                                        arrUser.push({grupo: currentValue, usuario: currentUser.displayName, aplicaciones: currentApp});
                                    
                                    }); 
                                });
                        });
                    }
        });
    });
    res.status(200).send(arrUser);

});

function getGroupUsers(arr, callback){

    arr.forEach(function(currentValue) {
        ad.getUsersForGroup(currentValue, function(err, users) {
            if(err){
                console.log('Error: ' + JSON.stringify(err));
                return;
            }

            if(!users){
                console.log('Group: ' + currentValue + ' not found.');
            } else {
                users.forEach(function(currentUser) {
                    console.log(currentUser.displayName);
                });      
            }
        });
    });
}


    function getGroupUsers(arr, callback){

        var arrUsers = [];

        arr.forEach(function(currentValue) {
            ad.getUsersForGroup(currentValue, function(err, users) {
                if(err){
                    console.log('Error: ' + JSON.stringify(err));
                    return;
                }

                if(!users){
                    console.log('Group: ' + currentValue + ' not found.');
                } else {
                        users.forEach(function(currentUser) {
                            console.log(currentUser.displayName);
                            arrUsers.push(currentUser.displayName);
                            console.log(arrUsers);
                            return arrUsers;
                        });
                    return arrUsers;          
                }
            });
            return arrUsers;
        });
    }

    function getGroupUsers(arr, callback){

        var arrUsers = [];

        arr.forEach(function(currentValue) {

            ad.getUsersForGroup(currentValue, function(err, users) {
                if(err){
                    console.log('Error: ' + JSON.stringify(err));
                    return;
                }

                if(!users){
                    console.log('Group: ' + currentValue + ' not found.');
                } else {
                    arrUsers.push(users);
                    return arrUsers;                          
                }
            });
        });
    }
    
    var arrUsers = [];

    function responder(res, param){
        res.status(200).send(param);
    };

    function getGroupUsers(arr, callback){


        arr.forEach(function(currentValue) {

            ad.getUsersForGroup(currentValue, function(err, users) {
                if(err){
                    console.log('Error: ' + JSON.stringify(err));
                    return;
                }

                if(!users){
                    console.log('Group: ' + currentValue + ' not found.');
                } else {
                    //console.log(users);
                    arrUsers.push(users);
                    //responder(res, arrUsers);
                }
            });
        });
    }
    getGroupUsers(grupos, responder(res, arrUsers));


    function responder(res, param){
        res.status(200).send(param);
    };

    function getGroupUsers(arr, callback){

        arr.forEach(function(currentValue) {

            ad.getUsersForGroup(currentValue, function(err, users) {
                if(err){
                    console.log('Error: ' + JSON.stringify(err));
                    return;
                }

                if(!users){
                    console.log('Group: ' + currentValue + ' not found.');
                } else {
                    //arrUsers.push(users);
                    users.forEach(function(currentValue) {
                        arrUsers.push({user: currentValue.displayName});
                        callback();
                    });
                    //console.log(arrUsers);
                }
            });
        });
    }
    getGroupUsers(grupos, responder(res, arrUsers));


    async.each(grupos, function(grupos, callback) {
            // Procesamiento de datos
            console.log('Procesando dato: ' + grupos);
                //arrUsers.push(grupos);
                //grupos.forEach(function(currentValue){
                    ad.getUsersForGroup(grupos, function(err, users) {
                        if(err){
                            console.log(err);
                        } 
                        if(!users){
                            console.log("El grupo " + currentValue + " no existe");
                        } else {
                            arrUsers.push(grupos);
                            /*users.forEach(function(currentUser) {
                                arrUsers.push({user: currentUser.displayName});
                                console.log(arrUsers);
                                return arrUsers;
                            });*/
                        }
                    });
                //});
            callback();
        }, function(err) {
            if( err ) {
            //callback final disparado luego del proceso de datos
            console.log('Error en el proceso');
        } else {
            //respuesta
            res.status(200).send(arrUsers);
        }
    });

    //grupos.forEach(function(current))

    async.each(grupos, function(file, callback) {    
        // Perform operation on file here.
            console.log('Processing file ' + file);

            if( file.length > 32 ) {
                console.log('This file name is too long');
                callback('File name too long');
            } else {
                // Do work to process file here 
                console.log('Armado de Array'); 
                
                    ad.getUsersForGroup(file, function(err, users) {

                        if (err) {
                            console.log('ERROR: ' +JSON.stringify(err));
                            return;
                        }
                            if (! users) console.log('Group: ' + groupName + ' not found.');

                            else {
                                console.log(users);
                            }
                    });

            callback();
            }

            }, function(err) {
                // if any of the file processing produced an error, err would equal that error
            if( err ) {
                // One of the iterations produced an error.
                // All processing will now stop.
                console.log('A file failed to process');
                res.status(501).send(err);
                console.log(err);
            } else {
                console.log("Respuesta del Callback")
                res.status(200).send(grupos);
        }
    });


return Promise.each(grupos, function(dir) {
        return new Promise(function(resolve, reject) {
            //if(err) reject(err);
            return resolve(
                grupos.forEach(function(currentGroup) {
                ad.getUsersForGroup(currentGroup, function(err, users) {
                        if (err) {
                            console.log('ERROR: ' +JSON.stringify(err));
                            
                            return reject(err);
                        }

                        if (! users) console.log('Group: ' + currentGroup + ' not found.');
                        
                        else {
                            console.log(users); 
                            return arrUsers.push(users);
                        }
                    });
                }))
        });
    }).then(function(arrUsers) {
        return res.status(200).send(arrUsers);
    }).catch(function(err){
        if(err){
            console.log(err);
        }
    });


{
    "_id": ObjectID("57d6f551c0d20e1634860e1d"),
    "name": "Administradores",
    "appDisp": [
        {
            "icon": "ti-bolt",
            "name": "Ventas",
            "descripcion": "Ventas, Telemarketing & Sponsoring",
            "url": "#/ventas/ventas"
        },
        {
            "icon": "ti-comments",
            "name": "Servicios",
            "descripcion": "Asistencia Hogar, Vehiculo, Viajero & Atencion al Cliente",
            "url": "#/servicios/servicios"
        },
        {
            "icon": "ti-settings",
            "name": "Calidad",
            "descripcion": "Auditoría, QA",
            "url": "#/calidad/calidad"
        },
        {
            "icon": "ti-lock",
            "name": "Seguridad",
            "descripcion": "Autenticación, Perfiles de Usuario",
            "url": "#/seguridad/seguridad"
        }
    ]
}

{
    "_id": ObjectID("57d6f57ac0d20e1634860e1f"),
    "name": "Usuarios",
    "appDisp": [
        {
            "icon": "ti-headphone-alt",
            "name": "Callcenter",
            "descripcion": "Aplicacion de Callcenter",
            "url": "#/callcenter/callcenter"
        },
        {
            "icon": "ti-agenda",
            "name": "Lista de Clientes",
            "descripcion": "Lista de Clientes disponibles",
            "url": "#/page/blank"
        },
        {
            "icon": "ti-user",
            "name": "Configuracion de Usuario",
            "descripcion": "Configuracion de su Usuario",
            "url": "#/page/blank"
        },
        {
            "icon": "ti-pin-alt",
            "name": "Tareas",
            "descripcion": "Listado de Tareas",
            "url": "#/page/blank"
        }
    ]
}

data.collection('profiles').find().toArray(function(err, result) {
            
            //console.log(result);
            getUsuariosAd(result, res);     

    });

    function getUsuariosAd(grupo, res){

        var arrUsers = [];

        grupo.forEach(function(currentGrupo) {
            //console.log(currentGrupo);
            
            ad.getUsersForGroup(currentGrupo.name, function(err, users) {
                
                if(err) console.log(err);

                if(!users) console.log("Grupo " + currentGrupo + " no existente");

                else {
                    //console.log(users);
                    arrUsers.push(users);
                 }
            });
        });
            res.status(200).send(arrUsers);
            /*
                    users.forEach(function(currentUser) {
                        arrUsers.push({user: currentUser.displayName});
                        console.log(arrUsers);  
                    });
                    return arrUsers;*/
    }

    , function(grupo, callback){
        /*
        grupo.forEach(function(currentGrupo) {
            arrUsers.push(grupo);
        });*/
        getUsersInAd(grupo);        
        callback();
    }