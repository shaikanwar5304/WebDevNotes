async function fetchData(){
    resp = await fetch("https://dummyjson.com/products/1");
    jsonData = await resp.json() 
    return jsonData
}
fetchData().then((res)=>{
  console.log(res);
  console.log(res.id, res.title, res.price); //1 Essence Mascara Lash Princess 9.99
})
.catch((rej)=>{
    console.log("rejected",rej);
})