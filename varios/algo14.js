    
//console.log(stringToSearch);
    /*
    var objIndexes = {};
    
    arrayToObject.push(BusqNom, BusqApe, BusqApeNom, BusqTel, BusqDni);

    arrayToObject.forEach(function(currentValue) {
        objIndexes[currentValue] = { $regex: stringToSearch };  
      });*/

      //console.log(objIndexes);  
    
    //data.collection(objSearch.collection).getIndexes();

    //data.getCollection('contactos').getIndexes();

    data.collection(objSearch.collection).indexInformation(function(error, result) {
      if(error){
        console.log(error);
      }
        //console.log(Object.keys(result));
        var arrayOfKeys = Object.keys(result);
        console.log(Object.values(result));
        console.log(arrayOfKeys);
      });