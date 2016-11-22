/* Configuracion del Panel Usuarios/Grupos*/
        $scope.oneAtATime = true;


        var getCallcenterVentas = {
            collection: 'grupos'
        };

        $http({
            method: 'GET',
            url: config.url_service + '/getData/',
            params: getCallcenterVentas
          })
          .then(function (data, status) {
                $scope.grupos = data.data;
            }).catch(function(err) {
                console.log(err);
            });    
    
    
    

    /*
    $scope.showUsers = function() {
        //console.log(Object.keys($scope.usersName));
    };
    */


    $scope.asignarCampana = function(){

        $scope.usersName = {};

        console.log("hola mundo");
        
    /*
        $scope.operadoresSelecionados = [];

        angular.forEach($scope.usersName, function(currVal, currKey) {
            if(currVal){
                //console.log(currKey);
                $scope.operadoresSelecionados.push(currKey);
            }
        });
        
        var objRegistro = {
          "CLIENTE": $scope.form.cliente,
          "CAMPAÑA": $scope.form.campana,
          "PUNTO_DE_CONTACTO": $scope.form.puntodecontacto,
          "FECHA_INICIO_OPE": $scope.form.fechainicio,
          "FECHA_FIN_OPE": $scope.form.fechafin,
          "RESPONSABLE_COMERCIAL": $scope.form.comercial,
          "ARCHIVO_SELECCIONADO": $scope.form.archivo,
          "ESTADO": $scope.form.estado,
          "OPERADORES": $scope.operadoresSelecionados
        };
        
        console.log(objRegistro);  */
        
        /*
        $http({
            method: 'POST',
            url: config.url_service + "/setData/",
            data: { collection: 'campanas_asignadas', registro: objRegistro }
          })
          .then(function (data, status) {
              console.log(data);

            });
        */
    };

    $scope.limpiarCampos = function(){

        var objRegistro = {
          "CLIENTE": $scope.form.cliente,
          "CAMPAÑA": $scope.form.campana,
          "PUNTO_DE_CONTACTO": $scope.form.puntodecontacto,
          "FECHA_INICIO_OPE": $scope.form.fechainicio,
          "FECHA_FIN_OPE": $scope.form.fechafin,
          "RESPONSABLE_COMERCIAL": $scope.form.comercial,
          "ARCHIVO_SELECCIONADO": $scope.form.archivo,
          "ESTADO": $scope.form.estado,
          "OPERADORES": $scope.form.operadores
        };

        $scope.usersName = {};
    };


    <!-- <div class="table-responsive">
                
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Grupo</th>
                            <th>Operadores</th>
                            <th>Fecha de Asignación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="grupo in grupos">
                            <td>{{grupo.name}} <input type="checkbox" ng-model="operadores"/></td>
                            <td><span ng-repeat="operador in grupo.operadores"> {{operador.name}} <input type="checkbox" value={{operador.name}} ng-model="form.operadores"/></span></td>
                            <td>01-Sept-2016</td>
                        </tr>
                    </tbody>
                </table>
            </div> -->