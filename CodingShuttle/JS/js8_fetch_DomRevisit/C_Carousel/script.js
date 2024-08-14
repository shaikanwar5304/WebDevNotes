imgarr = [
    "https://dummyjson.com/image/200x100/008080/ffffff?text=1+image",
    "https://dummyjson.com/image/400x200/008080/ffffff?text=2+image",
    "https://dummyjson.com/image/600x300/008080/ffffff?text=3+image",
    "https://dummyjson.com/image/800x400/008080/ffffff?text=4+image",
];
img=[]
carousel = document.getElementsByClassName("carouselimages")[0]
for(i=0;i<imgarr.length;i++){
    img[i]=document.createElement("img");
    img[i].src=imgarr[i]
    carousel.append(img[i])
}

currentPos=0;
leftbtn=document.getElementsByClassName("leftarr")[0]
rightbtn=document.getElementsByClassName("rightarr")[0]

if(imgarr.length==1){
    rightbtn.style.display = "none";
}

rightbtn.addEventListener('click',(e)=>{
    currentPos++;
    if(currentPos==imgarr.length-1){
        rightbtn.style.display="none"
    }
    leftbtn.style.display = "flex";
    carousel.style.transform=`translateX(${-(currentPos)*100}%)`;
})
leftbtn.addEventListener("click", (e) => {
    currentPos--;
    if(currentPos==0){
        leftbtn.style.display="none"
    }
    rightbtn.style.display = "flex";
    carousel.style.transform = `translateX(${-(currentPos) * 100}%)`;
});