function greet(firstname, secondname){
    console.log('Hello ' + firstname + ' ' + secondname);
}

//the async statements or results will be considered after all the current synchronouse work is done
//eg: by the end of 2secs if js is busy in running some instructions after the async statement it will
//exec async instruction after all the work is done

console.log("Start");
//setTimeout(greet, 2000, 'John', 'Doe');//you can give the required arguments after the time
//or
//spread operator
setTimeout(greet, 2000, ...["John", "Doe"]);//Hello John Doe
//or
timeOutId = setTimeout(function(){greet('Jane', 'Doe')}, 2000);//will be cancelled
//or
// setTimeout(() => greet('John', 'Doe'), 2000);

clearTimeout(timeOutId);//to cancel the timeout

console.log("End");