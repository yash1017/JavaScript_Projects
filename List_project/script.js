const courses=[
    {
        name:"C++ Course",
        price:"2.7",
    },
    {
        name:"javaScript Course",
        price:"5.4",
    },
    {
        name:"python Course",
        price:"2.3",
    },
    {
        name:"HTML Course",
        price:"1.2",
    },
];

// function genearateList(){
//     const ul=document.querySelector(".list-group");
//     courses.forEach( (course) =>{
//         const li=document.createElement("li");
//         li.classList.add("list-group-item");
//         const name=document.createTextNode(course.name);
//         li.appendChild(name);

//         const span=document.createElement("span");
//         span.classList.add("float-right");
//         const price=document.createTextNode(course.price);
//         span.appendChild(price);

//         li.appendChild(span);
//         ul.appendChild(li);
//     })

// }


function generateLIST(){

    const ul=document.querySelector(".list-group")
    ul.innerHTML="";
    courses.forEach((course)=>{
        const li= document.createElement("li");
        li.classList.add("list-group-item");
        const name=document.createTextNode(course.name);
        li.appendChild(name);

        const span=document.createElement("span");
        span.classList.add("float-right");
        const price= document.createTextNode("$ "+course.price)
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);
    })
}

window.addEventListener("load",generateLIST);

const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    courses.sort((a,b)=>{
        return a.price - b.price;
    })
    generateLIST();
})