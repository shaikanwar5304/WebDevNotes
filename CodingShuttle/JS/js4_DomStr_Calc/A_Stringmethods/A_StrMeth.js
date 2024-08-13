s="12345556789"
console.log(s.length)//11
console.log(s.charAt(3))//4
console.log(s.charAt(20))// ''
console.log(s.charCodeAt(3))//52
console.log(s.charCodeAt(20))//NaN
console.log(s.indexOf(5))//4
console.log(s.replace(5,0))//12340556789
console.log(s);//12345556789
console.log(s.slice(2,8))//345556
console.log(s.split(5))//["1234",'','' ,"6789"]
console.log(s.split('3'))//[ '12', '45556789' ]
console.log(s.substr(2,5))//34555
console.log(s.startsWith('12'))//true
console.log(s.endsWith('89'))//true
s1="  hello  "
console.log(s1.trim())//hello
console.log(s1)//  hello
s2="##g#hello##"
console.log(s2.trim("#"))//##g#hello
console.log(s2)//##g#hello
console.log(s2.replace('##',''))//g#hello##
console.log(s2.replace("##", "").replace("##",''));//g#hello
s3="1234567890"
console.log(s3.substring(2,6))//3456 (2 TO 5 (indexes))