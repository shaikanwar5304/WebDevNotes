firstobj={
    name:'anwar',
    college:'sasi',
    internalobj:{
        year:3
    }
}
secondobj={
    name:'secondobj'
}
//adding newkey value pair
firstobj.newkey='newvalue'
console.log(firstobj,'\n',firstobj.internalobj)
/*
{
  name: 'anwar',
  college: 'sasi',
  internalobj: { year: 3 },
  newkey: 'newvalue'
}
 { year: 3 }
*/
console.log(firstobj.name,firstobj.internalobj.year)//anwar 3
console.log(firstobj['college'])//sasi
//changing values
secondobj.name='second_name'
console.log(secondobj)//{name:'second_name'}
//assigning new value
secondobj='secondobj'
console.log(secondobj);//secondobj
//using for loop and objects
for (key in firstobj){
    console.log(key,typeof(key))//{key} string
    console.log(firstobj[key])//value
}
/*
name string
anwar
college string
sasi
internalobj string
{ year: 3 }
newkey string
newvalue
*/
function returnobj(){
    return {
        name:'object_returning_function',
        lang:'js'
    }
}
firstcall=returnobj()
secondcall=returnobj()
firstcall.name='firstcalledobject'
secondcall.name='secondcalledobject'
delete firstcall.lang
console.log(firstcall,secondcall)//{ name: 'firstcalledobject'} { name: 'secondcalledobject', lang: 'js' }
console.log(typeof returnobj);//function
console.log(typeof firstcall);//object