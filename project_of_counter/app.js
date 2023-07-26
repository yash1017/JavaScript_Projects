const increase= document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const value = document.getElementById("value")
var count=0;

increase.addEventListener("click",()=>{
    count++;
    value.textContent=count;
    if(count>0){
        value.style.color="green";
    }
})

reset.addEventListener("click",()=>
{
    count=0;
    value.textContent=count;
    value.style.color="black";
})

decrease.addEventListener("click",()=>{
    count--;
    value.textContent=count;
    if(count<0)
    {
        value.style.color="red";
    }
})
