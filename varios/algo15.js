
    
        /*
        $scope.callback = function(a){
            console.log("hola mundo");
        }

        var objCsv = {};

        $scope.arrData = [];
        
        */

        /*
        $scope.mostrarCsv = function(res){
            
            console.log(res[0][0].split(','));
            
            var init = 1;

            res[0][0].split(',').forEach(function(currentValue){
                
                objCsv.data = currentValue;
                objCsv.id = init;
                init += 1;
                $scope.arrData.push(objCsv);
            
            });
            console.log($scope.arrData);
        };

        */

        /*
    	var canvas = $("#canvasPotenciales")[0];
		var ctx = canvas.getContext("2d");
		var w = $("#canvasPotenciales").width();
		var h = $("#canvasPotenciales").height();

        var datos = {
            collection: 'esquemas',
            //id: $stateParams.id
            numid: 1
        };
        */

        /*
        $http({
            method: 'GET',
            url: config.url_service + '/getData/',
            params: datos
        })
            .then(function (data, status) {
                
                console.log(Object.keys(data.data[0]));
                
           });
        */


        /*
        $scope.arrSchema = [
        	{
        		"name": "Id",
        		"id": 1
        	},{
        		"name": "Campaña",
        		"id": 2
        	},{
        		"name": "Cliente",
        		"id": 3
        	}
        ];        

        $scope.objPotencial = {};
        
        var puntoInicio = 25;
        var puntoFinal = 25;
        var inxs;  

        var objCordenada = {};

        function drawInitCircles(param){
          
          //$scope.arrSchema.forEach(function(currentValue) {
        	 
        	 //console.log(param);

        	 
        	 if(param.id == 1) {
        	 		puntoInicio = 25;		
        			ctx.fillStyle = "red";
        			ctx.beginPath();	
					ctx.arc(inxs, puntoInicio, 5, 0, 2*Math.PI);
					ctx.stroke();
					objCordenada.x = inxs;
					objCordenada.y = puntoInicio;
					
			  	};

			  if(param.id == 2) {
        	 		puntoInicio = 75;		
        			ctx.fillStyle = "red";
        			ctx.beginPath();	
					ctx.arc(inxs,puntoInicio,5,0,2*Math.PI);
					ctx.stroke();
					objCordenada.x = inxs;
					objCordenada.y = puntoInicio;
					
			  	};

			   if(param.id == 3) {
        	 		puntoInicio = 125;		
        			ctx.beginPath();	
					ctx.arc(inxs,puntoInicio,5,0,2*Math.PI);
					ctx.stroke();
					objCordenada.x = inxs;
					objCordenada.y = puntoInicio;
					
			    };
			  					  		
          	//});

        }
        */

        /*
        function drawFinalCircles(param){
          
          //$scope.arrSchema.forEach(function(currentValue) {
        		if(param.id == 1) {
        	 		puntoInicio = 25;		
        			ctx.fillStyle = "red";
        			ctx.beginPath();	
					ctx.arc(inxs,puntoInicio,5,0,2*Math.PI);
					ctx.stroke();
					ctx.moveTo(objCordenada.x,objCordenada.y);
					ctx.lineTo(inxs,puntoInicio);
					ctx.stroke();
					
			  	};

			  if(param.id == 2) {
        	 		puntoInicio = 75;		
        			ctx.fillStyle = "red";
        			ctx.beginPath();	
					ctx.arc(inxs,puntoInicio,5,0,2*Math.PI);
					ctx.stroke();
					ctx.moveTo(objCordenada.x,objCordenada.y);
					ctx.lineTo(inxs,puntoInicio);
					ctx.stroke();
					
			  	};

			   if(param.id == 3) {
        	 		puntoInicio = 125;		
        			ctx.beginPath();	
					ctx.arc(inxs,puntoInicio,5,0,2*Math.PI);
					ctx.stroke();
					ctx.moveTo(objCordenada.x,objCordenada.y);
					ctx.lineTo(inxs,puntoInicio);
					ctx.stroke();
					
			    };
          //});	
        }
        */

        /*
        $scope.potencialesKey = function(key) {
        	//console.log(key);
        	//puntoInicio = 25;
        	//console.log(key);
        	$scope.objPotencial[key.name] = null;
 			//puntoInicio = 25;
 			inxs = 10;
 			drawInitCircles(key);
 			console.log(objCordenada);
        	
        	ctx.fillStyle = "white";
			ctx.fillRect(0, 0, w, h);
			
        };
        */

        /*
        $scope.potencialesValue = function(value) {
        	
        	Object.keys($scope.objPotencial).forEach(function(currentValue) {
        		if($scope.objPotencial[currentValue] === null){
        			console.log("la key del objeto es nula");
        			$scope.objPotencial[currentValue] = value.data;
        		}
        	});
        	
        	inxs = 290;
        	drawFinalCircles(value);
        };

		$scope.funcionResetPotencial = function(){
        	$scope.objPotencial = {};
        	puntoInicio = 25;
        	puntoFinal = 25;
        	ctx.clearRect(0, 0, w, h);
        }        

        $scope.funcionLogPotencial = function(){
        	console.log($scope.objPotencial);
        }
        */
        

        ad.getUsersForGroup(teamLeaders, function(err, users) {
            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var grupoTeamLead = {};

                    users.forEach(function(currentValue){
                        //console.log(currentValue.displayName);

                        data.collection('profiles').find({name: teamLeaders}).toArray(function(err, result) {
                            //console.log(result);
                            result.forEach(function(currentValue) {
                            //res.status(200).send(currentValue.appDisp);
                            //console.log(currentValue.appDisp);
                            grupoTeamLead.aplicaciones = currentValue.appDisp;
                        });
                    });     
                        grupoTeamLead.grupo = teamLeaders;
                        grupoTeamLead.name = currentValue.displayName;
                        arrUserInGroups.push(grupoTeamLead);
                    });
            }
        });

        ad.getUsersForGroup(superVisores, function(err, users) {
            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var grupoSuperVisores = {};

                    users.forEach(function(currentValue){
                        
                        //console.log(currentValue.displayName);
                        
                        data.collection('profiles').find({name: superVisores}).toArray(function(err, result) {
                            //console.log(result);
                            result.forEach(function(currentValue) {
                            //res.status(200).send(currentValue.appDisp);
                            //console.log(currentValue.appDisp);
                            grupoSuperVisores.aplicaciones = currentValue.appDisp;
                        }); 
                    });
                        grupoSuperVisores.grupo = superVisores;
                        grupoSuperVisores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoSuperVisores);
                    });
            }
        });
        
        
        ad.getUsersForGroup(opeRadores, function(err, users) {
            if (err) {
                console.log('ERROR: ' +JSON.stringify(err));
                return;
            }

            if (! users) console.log('Group: ' + groupName + ' not found.');
                else {
                    var grupoOperadores = {};

                    users.forEach(function(currentValue){
                        //console.log(currentValue.displayName);

                        data.collection('profiles').find({name: opeRadores}).toArray(function(err, result) {
                            //console.log(result);
                            result.forEach(function(currentValue) {
                            //res.status(200).send(currentValue.appDisp);
                            //console.log(currentValue.appDisp);
                            grupoOperadores.aplicaciones = currentValue.appDisp;
                        });
                    });
                        grupoOperadores.grupo = opeRadores;
                        grupoOperadores.name = currentValue.displayName;
                        arrUserInGroups.push(grupoOperadores);
                    });
            }
            var asd = 'asd';
            arrUserInGroups.push(asd);
            res.status(200).send(arrUserInGroups);
            console.log(arrUserInGroups);
        });