let child=document.body.getElementsByClassName("child")
let parent=document.body.getElementsByClassName("parent")
let grandparent=document.body.getElementsByClassName("grandparent")
let text= document.createElement("h1");
document.body.append(text);
let s = '';
let flag= false;
child[0].addEventListener("click",(e)=>{
    flag=true;
    console.log("child clicked");
    s+=" child,";
})
parent[0].addEventListener("click", (e) => {
  flag = true;
  console.log("parent clicked");
  s+= " parent,";
});
grandparent[0].addEventListener("click", (e) => {
  flag=true;
  console.log("grandparent clicked");
  s+= " grandparent clicked";
});
document.body.addEventListener("click", (e) => {
  if(flag){
    flag=false;
    text.innerText=s;
    s='';
  }else{
  text.innerText = "body clicked";}
})
document.body.style.height="100vh";
document.body.style.width="100vw";