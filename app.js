// let mainDiv = document.querySelector(".main-body");
// let btn = document.querySelector(".btn");

// let divColor = "normal";
// btn.addEventListener("click", () => {
//     if(divColor === "normal"){
//         mainDiv.style.backgroundColor = "red";
//         divColor = "changed";
//     }else{
//         mainDiv.style.backgroundColor = "green";
//         divColor = "normal";
//     }
// })




let mainbody = document.querySelector(".main-body");
let btn = document.querySelector(".btn");
let colors = ["red","yellow","green","voilet","grey"];

btn.addEventListener("click", ()=> {
    let randomNo = parseInt(Math.random()*colors.length);
    console.log(randomNo);
    mainbody.style.backgroundColor = colors[randomNo];
})


// let mainBody = document.querySelector(".main-body");
// let btn = document.querySelector(".btn");
// let colors = ["red", "green","yellow","blue","aqua","orange"];

// btn.addEventListener("click", (colors) => {
    

// });

