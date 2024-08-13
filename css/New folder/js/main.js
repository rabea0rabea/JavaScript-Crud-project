// var codes=[


// cod={
//     h1:"jjggjghjnvhb" ,
//     p:"ghyfffhgbvbvcg"
// },

// cod={
//     h1:"jghfvhgcfc" ,
//     p:"jhcfdxfgbj"
// },

// cod={
//     h1:"sdxfh" ,
//     p:"dxfm",
   
// }
// ]  
// var ex=Math.random()*(codes.length-1)
// var end=Math.round(ex) 

// console.log(end) 




var body=document.querySelector("body") 
body.addEventListener("mousedown",function(){

var r= Math.round(Math.random()*255)
var g=Math.round(Math.random()*255) 
var b=Math.round(Math.random()*255)

body.style.background=`rgb(${r},${g},${b})`




})
