let ul = document.body.getElementsByTagName("ul")[0];
let children = ul.children;
console.log(children); //HTMLCollection(3) [li, li, li]
console.log(children[0])//<li>One</li>
//children.forEach((child) => {}//TypeError: children is not an array it is an HTMLCollection
Array.from(children).forEach((child) => {
    console.log(child);
});
/* <li>One</li>;
<li>Two</li>;
<li>Three</li>; */