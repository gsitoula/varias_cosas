/*
        $scope.grupos = ['Operadores', 'Supervisores', 'Teamleaders'];

        $http({
          method: 'GET',
          url: config.url_service + '/getOperadores'          
        }).then(function(data, status) {
          console.log(data.data);
          
          var arrUsers = [];
          var objUsers = {};

          objUsers.apps = data.data.apps;

          console.log(objUsers);

        $scope.tableOperadores = new NgTableParams({
                page: 1,
                count: 10,
                sorting: { name: 'asc' }
            }, {
                //total: data.data,
                //dataset: data.data
            });
        });
         data.data.forEach(function(currentGroup) {

                  $scope.subTitGrup = currentGroup;

                  var datos = {grupo: currentGroup};

                  $scope.usuarios = [];
                  $scope.usuariosPorGrupo = [];
                  $scope.arrGruposUser = [];
                  
                  $http({
                    method: 'GET',
                    url: config.url_service + '/getUsersAndGroups',
                    params: datos
                  }).then(function(data, status) {
                    
                    $scope.usuarios.push(data.data);
                  
                    console.log($scope.usuarios);

                  });
            });

            */

            //$scope.usuarios.$apply()
              /*
              function refreshTable(){
                  $http({
                    method: 'GET',
                    url: config.url_service + '/getUsersAndGroups',
                  }).then(function (data, status) {
                  //console.log(data.data);
                  $scope.usuarios = data.data;   
                });
              }
              refreshTable();
              */

              $scope.cambiarVista = function(){
              //console.log("asdasdasd");
              $state.go('vista2');  
            };

            $scope.volverVista = function(){
              //console.log("asdasdasd");
              $state.go('vista1');  
            };

             /*
          $http({
            method: 'GET',
            url: config.url_service + '/getUsersAndGroups',

          })
          .then(function (data, status) {
            //console.log(data.data);
            
            $scope.usuarios = data.data;   
          });*/