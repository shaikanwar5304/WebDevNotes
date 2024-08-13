let nodes = ul.childNodes;
console.log(nodes);//NodeList(8) [comment, text, li, text, li, text, li, text]
nodes.forEach((node) => {
    console.log(node);
});
// even the new line character is treated as node and also space 
//\n      
//li
//\n
//li
//\n
//li
//\n
console.log("first and last childs and elements");//#comment
console.log(ul.firstChild);//#comment
console.log(ul.firstElementChild);//<li>One</li>
console.log(ul.lastChild);//#text
console.log(ul.lastElementChild);//<li>Three</li>