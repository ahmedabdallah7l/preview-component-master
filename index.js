const shareBtn = document.getElementById("share");
const shareDesktop =document.querySelector(".shareDesktop")
const shareBox =document .querySelector(".shareBox")





 shareBtn.addEventListener("click",()=>
 {
 
 
 {
  
 }
   shareBtn.classList.add("click")
   shareDesktop.style.display = "flex"
   shareBox.style.display = "flex"
 
   shareBtn.addEventListener("click",()=>
 {
  shareBtn.classList.remove("click")
   shareDesktop.style.display = "none"
   shareBox.style.display = "none"
 })
 })
 
