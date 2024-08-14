//appendchild takes one arg and returns the element
//append takes multiple args and returns nothing
div = document.body.getElementsByTagName("div")[0]
div.style.border="dotted blue"

h1 = document.createElement("h1")
h1.innerText="first H1 from script"
h1.style.border="2px solid red"

h2 = document.createElement("h2")
h2.innerText="first H2 from script"
h2.style.border="2px solid lightgreen"

pre = document.createElement("pre")
pre.innerText="first pre from script"
pre.style.border="2px solid black"

x=div.appendChild(h2)//appends h2 to div and returns h2
y=div.appendChild(pre)//appends pre to div and returns pre
z=div.append(h1)//appends h1
h2.append("   random text ")//concatenates some text to h2 which is in div          
h2.append(z," can send multiple elements to append unlike apppendchild")//appends the z (undefined returned by append)
h1.append(y)//y is plucked and appended to h1
// to put some element inside another element h1 to put inside div
// div.innerHTML=""
// div.append(h1)
//eventlistener will work till program termination
