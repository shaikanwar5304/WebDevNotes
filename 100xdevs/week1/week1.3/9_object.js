let obj = {
  key1: "value1",
  key2: { key21 :"value21"},
}
console.log(Object.keys(obj));//[ 'key1', 'key2' ]
console.log(Object.values(obj));//[ 'value1', { key21: 'value21' } ]
console.log(Object.entries(obj));//[ [ 'key1', 'value1' ], [ 'key2', { key21: 'value21' } ] ]
console.log(obj.hasOwnProperty("property"));//false
console.log(obj.hasOwnProperty("key2"));//true
//combining two objects
let obj2 = {
  key3: "value1"
}
console.log(Object.assign(obj, obj2));//{ key1: 'value1', key2: { key21: 'value21' }, key3: 'value1' }