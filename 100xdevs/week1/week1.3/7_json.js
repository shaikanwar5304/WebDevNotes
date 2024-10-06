//In JSONSTring both the key and value pairs will be strings
let JSONString ='{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
JSONObj=JSON.parse(JSONString)
console.log(JSONObj);//{ key: 'value', number: 42, nested: { nestedKey: 'nestedValue' } }
JSONString=JSON.stringify(JSONObj)
console.log(JSONString)//{"key":"value","number":42,"nested":{"nestedKey":"nestedValue"}}