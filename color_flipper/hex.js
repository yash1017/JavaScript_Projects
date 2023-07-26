const hex=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`]

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click",()=>{
  
    var clr=`#`;

    for(let i=1;i<=6;i++)
    {
        clr=clr+hex[getRandomNumber()];
    }

    document.body.style.backgroundColor=clr;
    color.textContent=clr;
})

var getRandomNumber=()=>{
return Math.floor(Math.random()*hex.length);
}