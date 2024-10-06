let date = new Date();
console.log(date)//2024-04-01T07:30:20.004Z

console.log(date.getDate())//1
console.log(date.getMonth()+1);//4//months are 0 indexed 0-11
console.log(date.getFullYear());//2024
console.log(date.getHours());//13
console.log(date.getMinutes());//2
console.log(date.getSeconds());//30

console.log("Time in milliseconds since 1970:", date.getTime());//Time in milliseconds since 1970: 1711956750900

date.setFullYear(2003)
date.setMonth(8)
date.setDate(26)
date.setHours(23)
date.setMinutes(59)
console.log(date)//2003-09-26T18:29:38.856Z
console.log(date.getTime())//1064600995306

const newdate =new Date(2004,3,5)
console.log(newdate.getDate(),newdate.getMonth(),newdate.getFullYear())//5 3 2004