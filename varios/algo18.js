if(currVal.grupo === "Teamleaders") {
                              var objLeader = {};
                              var arrLead = [];
                              
                              currVal.usuarios.forEach(function(currUser) {
                                //console.log(currUser.cn);
                                objLeader.usuarios = currUser.cn;
                              });

                              currVal.aplicaciones[0].appDisp.forEach(function(currApps){
                                arrLead.push(currApps.name);
                                objLeader.aplicaciones = arrLead;
                              });
                              
                              $scope.usuariosPorGrupo.push(objLeader);
                          }

                          if(currVal.grupo === "Supervisores") {
                              var objSup = {};
                              var arrSup = [];

                              currVal.usuarios.forEach(function(currUser) {
                                objSup.usuarios = currUser.cn;
                              });
                              
                              currVal.aplicaciones[0].appDisp.forEach(function(currApps){
                                arrSup.push(currApps.name);
                                objSup.aplicaciones = arrSup;
                              });
                              
                              $scope.usuariosPorGrupo.push(objSup);                 
                          }

                          if(currVal.grupo === "Operadores") {
                              var objOpe = {};
                              var arrOpe = [];
                              
                              currVal.usuarios.forEach(function(currUser) {
                                objOpe.usuarios = currUser.cn;
                              });
                              
                              currVal.aplicaciones[0].appDisp.forEach(function(currApps){
                                arrOpe.push(currApps.name);
                                objOpe.aplicaciones = arrOpe;
                              });
                              
                              $scope.usuariosPorGrupo.push(objOpe);                 
                          }

                          //console.log($scope.usuariosPorGrupo);     



