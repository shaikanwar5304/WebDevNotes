let jsonstring="{\"id\":5,\"phone\":\"(254)954-1289\",\"website\":\"demarco.info\",\"company\":{\"name\":\"KeeblerLLC\",\"bs\":\"revolutionizeend-to-endsystems\"}}";
let jsonobject=JSON.parse(jsonstring)
console.log(jsonobject,typeof(jsonobject));
/* 
{
  id: 5,
  phone: '(254)954-1289',
  website: 'demarco.info',
  company: { 
    name: 'KeeblerLLC', 
    bs: 'revolutionizeend-to-endsystems' 
}
} object 
*/
jsonobject = {
  id: 5,
  phone: "(254)954-1289",
  website: "demarco.info",
  company: {
    name: "Keebler LLC",
    bs: "revolutionize end-to-end systems"
  }
};
jsonstring=JSON.stringify(jsonobject)
console.log(jsonstring,typeof(jsonstring))
/*
{"id":5,"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","bs":"revolutionize end
-to-end systems"}} string
*/