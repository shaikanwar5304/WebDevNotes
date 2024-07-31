let container = document.getElementsByTagName("div")[0];
container.classList.remove("someclass"); //no error

container.innerText = "container";

console.log(container.classList); //DOMTokenList [value: '']

container.classList.add("class1");
console.log(container.classList); //DOMTokenList ['class1', value: 'class1']

container.classList.remove("class1");
console.log(container.classList); //DOMTokenList [value: '']

let newelement = document.createElement("h1");
newelement.innerText = "New Element";
newelement.style.color = "red";
newelement.style.backgroundColor='lightgreen'//'backgroundColor -->camelCase'
container.append(newelement);