const result = document.getElementById("result");
// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
const btns = document.querySelectorAll(".btn");



let count = 0;
btns.forEach(btn=>{
    btn.addEventListener("click",event=>{
        const styles = event.target.classList;
        if(styles.contains("decrease")){
            count--;
            
        }else if(styles.contains("reset")){
            count = 0;
    
        }else if(styles.contains ("increase")){
            count ++;
         
        }
        if (count === 0){
            result.style.color = "black"
        }else if (count >0){
              result.style.color = "green"
        }
        else if (count <0){
            result.style.color = "red"
      }
        result.textContent = count;
    });
});

// increase.addEventListener("click",()=>{
//     count ++;
//     result.textContent = count;
    
//     if(count >0){
//         result.style.color = "green";}

// });

// decrease.addEventListener("click",()=>{
//     count --;
//     result.textContent = count;
    
//     if(count <0){
//          result.style.color = "red";}
// });


// reset.addEventListener("click",()=>{
//     count = 0;
//     result.textContent = count;
//     if(count === 0){
//         result.style.color = "black";
//     }
    
// });


