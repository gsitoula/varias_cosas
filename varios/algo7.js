$scope.submit = function() {
            
        var info = {username: $scope.userName, password: $scope.userPass};
          frontLogin.post(info).then(function(data){
            console.log(data);
          });
          

          var info = {username: $scope.userName, password: $scope.userPass};
          frontLogin.post(info).then(function(datos) {
                console.log(datos.token);
                  if(!datos.token)
                {

                }
                  else
                {

                }
             });

        frontLogin.post(info).then(function(data){
            console.log(data);
        }); 
       }

       console.log(info);
          frontLogin.post(info).then(function(datos) {
                console.log(datos.token);
                  if(!datos.token)
                {
                    console.log("Server Authentication Failed");
                }
                  else
                {
                    console.log("Server Authentication Success");
                }
             });


          /*.service('frontLogin', ['$http', function($http) {
            this.post = function(info){
                var require = {
                      method: 'POST',
                      url: 'http://127.0.0.1:2530/login',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      data: info
                };
                $http(require)
                    .success(function(data) {
                        console.log("success");
                        setter(rock, data);
                        return data;
                    })
                    .error(function(data) {
                        console.log(data);  
                    });
            }
        }])
        .service('setData', function() {
                    
            this.getValue = function() {
                console.log(this.myValue);
                return this.myValue;
            };

            this.setValue = function(newValue) {
                this.myValue = newValue;
            }               
        })*/