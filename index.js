// Add JavaScript code here

const btn = document.querySelector(".button"); 
btn.addEventListener("click", () => {
 
  const progress = document.querySelector(".progressclass");
  if (progress.value === 40) {

     
      progress.value = 95;

 } else {
     progress.value = 40;
  }

 console.log()
})
 

