function (x){return x;}

{
    "_id": "getGrupos",
    "value": Code("function (){ var grupos = db.grupos.find().toArray(function(err, res){ return res; }) return grupos; }")
}

var grupos = db.grupos.find().toArray(function(err, res){ return res; }) return grupos;

db.grupos.find().toArray(function(err, res) {})