/*  
        $scope.campos = [];

        $scope.nuevoCampo = function() { 
            $scope.campos.push({
                obligatorio: false,
                registro: "",
                campoPlaceholder: "Nombre del Campo",
            });            
        };


        $scope.mostrarCampo = function() {
            $scope.arrayCampos = [];
            $scope.objCampos = {};
            
            $scope.campos.forEach(function(currentValue) {
                  console.log(currentValue);
                $scope.objCampos.registro = currentValue.registro;
            });
          }*/

          /*
         $scope.csvCallback = function(){
          //console.log(result);
          //$scope.resultado = result;
         };

         $scope.helloWorld = function(result){
          console.log(result)
         }*/


         {
    //"_id": ObjectID("57f5022e2541bffd40e6f839"),
    //"IDEMPRESA": 479,
    //"IDUTEMPRESA": 479,
    //"IDCAMPANA": 446,
    //"IDCONTACTO": 9171225,
    "NOMBRE": "",
    "APELLIDO": "SAURO",
    "ApellidoYNombre": "CLAUDIO NICOLAS",
    //"SALUDO": "",
    //"IDTIPOCONTACTO": "",
    //"IDUSALTA": "",
    //"FECHAALTA": "",
    //"IDUSMOD": "",
    //"FECHAMOD": "",
    //"FECHANAC": "",
    //"IdTipoDoc": "",
    //"DIANAC": "",
    //"MESNAC": "",
    //"ANNONAC": "",
    //"CALLE": "",
    //"ALTURA": "ALSINA",
    //"PISO": 2214,
    //"DPTO": "",
    //"ANEXO": 5,
    //"PUERTA": "",
    //"PROVINCIA": "",
    //"PARTIDO": "C",
    //"IDLOCALIDAD": "",
    //"LOCALIDAD": "",
    //"BARRIO": "CAPITAL FEDERAL",
    //"CP": "",
    "NroDocumento": "",
    //"EMPRESA": 21977627,
    //"IDTIPODIR": "",
    "EMAIL": "",
    //"CARGODESC": "",
    "SEXO": "",
    //"DIRECCION": "",
    //"IDORIGEN": "ALSINA",
    //"CODAREA": "",
    "TELEFONO": "",
    //"FAX": 495,
    //"IDUSLLAMANDO": "",
    "TITULAR": 0,
    "CLAVECLIENTE": "",
    "OTROCONTACTO": "",
    "TELEFONO2": "",
    "SECTORDESC": "",
    "CLAVEIDUTEMPRESAN": "",
    "CLAVEIDUTEMPRESAC": "",
    "FORMADECARGA": "",
    "DFECHANAC": "",
    "IDPRODUCTO": "",
    "CodArea2": "",
    "CodAreaFax": "",
    "PAis": "",
    "email2": "",
    "CODPMA": "",
    "CUSTOM1": "",
    "CUSTOM2": "PLANOVALO",
    "CUSTOM3": 93094564,
    "CUSTOM4": "ZURICH ARGENTINA COMPA\ufffdIA DE SEGUROS S.A.",
    "CUSTOM5": "8/7/2012",
    "CUSTOM6": "FORD KA 1.0 PLUS AA",
    "CUSTOM7": 2007,
    "CUSTOM8": "GDX858",
    "CUSTOM9": "GDX858",
    "CUSTOM10": "",
    "CUSTOM11": "",
    "CUSTOM12": "C PREMIUM",
    "IDESTADO": "",
    "idcontactoreferente": "",
    "Auxiliar1": "",
    "Auxiliar2": "",
    "Auxiliar3": "",
    "Auxiliar4": 638816,
    "Auxiliar5": "Willis_Posprenda_01",
    "Auxiliar6": "",
    "Auxiliar7": "",
    "Auxiliar8": "",
    "Auxiliar9": "",
    "Auxiliar10": "",
    "Base": "",
    "NombreConyuge": "",
    "idestadocivil": "",
    "Cuit": "2012_07_08_09_Postprenda_01",
    "idprovincia": "",
    "IdTipodeCuit_CUIL": "",
    "idProfesion": "",
    "condicionfrentealIVA": "",
    "NivelDeEstudios": "",
    "idCondicionIVA": "",
    "Nacionalidad": "",
    "IdConyuge": "",
    "Hijos": "",
    "SeleccionadoParaLLamar": "",
    "TelefonoParaLLamar": "",
    "idnocall": "",
    "Baja": "",
    "IdEnCliente": "",
    "CODAREA4": "",
    "TELEFONO4": "",
    "CODAREA5": "",
    "TELEFONO5": "",
    "field103": "",
    "field104": "",
    "field105": ""
}

/*
            console.log($scope.array_esquema);
            console.log($scope.array_csv_file);
            /*
            console.log($scope.itemsArrayImportar);
            console.log($scope.itemsArrayEsquema);*/
            /*
            $scope.itemsArrayImportar.forEach(function(currImp){
                $scope.itemsArrayEsquema.forEach(function(currEsq){
                      if(currImp == currEsq) {
                          var obj = {
                            "matchea": "" + $scope.array_csv_file[currImp] + "" + " con " + "" + $scope.array_esquema[currEsq] + ""
                          };
                          console.log(obj)
                      }
                });
            });*/

            //$scope.itemsArrayEsquema[index];

            var config = {
    
  /* - Url de Testing Publico - */

      //"url_service": 'http://172.16.8.54:3008',
        
    /* - Url de Desarrollo - */
     
      //"url_service": 'http://localhost:3008',
     
  /* - Url Test Join - */

  "url_service": 'http://joinlabs.com.ar:3001',

      "authType" : true,
      "appName": "Cardinal"
}