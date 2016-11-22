<<<<<<< HEAD

            $scope.arrNuevoCamp.forEach(function(currNewField) {
              $scope.arrImp.forEach(function(currImport) {
                if(currNewField.numEsq == currImport.numEsq){
                  objMapeo.campos_en_archivo = currImport.datoEsq;
                  objMapeo.campos_en_esquema = currNewField.datoEsq;
                  $scope.mapeo_array.push(objMapeo);
                  objMapeo = {};
                }
              });
            });          
            //console.log($scope.mapeo_array);
            } 
          }

=======<