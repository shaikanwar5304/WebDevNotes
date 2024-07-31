let child=document.body.getElementsByClassName("child")
let parent=document.body.getElementsByClassName("parent")
let grandparent=document.body.getElementsByClassName("grandparent")
child[0].addEventListener("click",(e)=>{
    console.log("child clicked");
})
parent[0].addEventListener("click", (e) => {
  console.log("parent clicked");
});
grandparent[0].addEventListener("click", (e) => {
  console.log("grandparent clicked");
});