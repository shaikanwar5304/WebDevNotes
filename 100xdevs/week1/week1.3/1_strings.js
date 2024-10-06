// length
console.log("string length".length); //13

// indexOf -> returns the first index of the given string
console.log("hello World World".indexOf("world")); //-1
console.log("hello World World".indexOf("World")); //6

//lastIndexOf
console.log("hello World World".lastIndexOf("world")); //-1
console.log("hello World World".lastIndexOf("World")); //12

//slice
console.log("0123456789".slice(2, 6)); //2345
console.log("0123456789".slice(2, 20));//23456789

//substring
console.log("0123456789".substring(2, 6)); //2345
console.log("0123456789".substring(2, 60));//23456789

//replace
console.log("Hello World".replace("World", "Anwar")); //Hello Anwar

//split
console.log("hi /anwar /".split("/")); //[ 'hi ', 'anwar ', '' ]
console.log("anwar sk ".split("")); //['a','n','w','a','r',' ','s', 'k',' ']

//trim
console.log("      using   trim     ".trim()); //using   trim

//toUpperCase
//toLowerCase
console.log('Hi/thIs/is@nwaR'.toUpperCase());//HI/THIS/IS@NWAR
console.log("Hi/thIs/is@nwaR".toLowerCase());//hi/this/is@nwar

//charCodeAt()
console.log('ABC!E*'.charCodeAt(0))//65
console.log("ABC!E*".charCodeAt(3))//33

//charAt()
console.log("ABC!E*".charAt(0))//A