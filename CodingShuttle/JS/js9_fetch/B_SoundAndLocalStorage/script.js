btn = document.querySelector("button")
btn.addEventListener("click",(e)=>{
    audio = new Audio(
      "https://www.soundjay.com/nature/sounds/lake-waves-lapping-gently-on-the-beach-01.mp3"
    );
    audio.play()
    alert("sdlfks")
})
textArea = document.querySelector("textarea")
textArea.addEventListener('change',(e)=>{
  localStorage.setItem("essayKey",textArea.value)
})
window.addEventListener('load',()=>{
  textArea.innerText = localStorage.getItem("essayKey")
})
form = document.querySelector('form')
form.addEventListener("submit",(e)=>{
  e.preventDefault()
})