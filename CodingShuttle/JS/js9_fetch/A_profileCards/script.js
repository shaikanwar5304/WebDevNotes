container = document.getElementsByClassName("container")[0];

card = document.createElement("div")
card.classList.add('card')
template = document.getElementsByClassName("templateOfCards")[0];
card.innerHTML = template.innerHTML
n=0

async function fetchData() {
    resp = await fetch("https://dummyjson.com/users");
    jsonData = await resp.json();
    container.style.gridTemplateColumns=`repeat(${jsonData.users.length},1fr)`
    n=jsonData.users.length
    jsonData.users.forEach((elem)=>{
        displayCards(elem)
    })
    percentage = -(100*(n-1)) ;
    keyframes = `@keyframes anim {
                        100% {
                            transform: translateX(${percentage}%);
                        }
                            }`
    const styleSheet = document.createElement("style");
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
}
fetchData();
function displayCards(user) {
  newNode = card.cloneNode(true)

  username = newNode.getElementsByTagName("h2")[0]
  username.innerText = user.firstName+" " +user.maidenName+" "+user.lastName
  
  profilePic = newNode.getElementsByTagName("img")[0]
  profilePic.src=user.image

  clg = newNode.querySelector("#college");
  clg.innerHTML=user.university

  email = newNode.querySelector("#email")
  email.innerText= user.email

  newNode.querySelector("#country").innerText=user.address.address

  container.append(newNode)
}
