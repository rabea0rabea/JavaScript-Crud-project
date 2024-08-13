// window.alert("helow");
// document.getElementById('demo').innerHTML="yarb";
// console.log("hwllow") 


//  var titell=window.prompt("enter your tittale");


// switch (true) {
//     case titell%3==0:
//         window.alert("you soud lern js ")
//         break;
//     case titell%2==0:
//     window.alert("you soud lern .net") 
//         break;
//     default:
//         window.alert("hamada")
//         break;
// };



// cartona1="";
// for(var i=0;i<5;i++)
// {
//     cartona1+="<li>nader</li>"
// }

// document.getElementById("myul").innerHTML=cartona1;


// carton2="";
// for(var i=2010;i<=2020;i++)
// {
//     carton2+=`<option >${i}</option>`
// }
// document.getElementById("myselect").innerHTML=carton2;


//  if(titell=="frontend")
//  {
//     window.alert("you soud lern js ")
//  } 
//  else if(titell=="backend") 
//  {
//     window.alert("you soud lern .net")
//  } 
//  else if(titell=="andorid") 
//  {
//     window.alert("you soud lern kotlewn")
//  } 
//  else
//  {
//     window.alert("hamada")
//  };

// 1 var usernamber= window.Number(prompt("enter yoy namber?"))  

//  console.log(usernamber);
//--------------------------------------------------------------------------------------- 
//2
//  var usernamber= window.Number(prompt("enter yoy namber?"))
//  if(usernamber%3==0&&usernamber%4==0)
//  {
//     window.alert("yeas")
//  } 
//  else
//  {
//     window.alert("now")
//  }; 
//------------------------------------------------------------------------------------------ 
//3
// var userNamberFirest= window.Number(prompt("enter your firest namber?"));
// var userNameSacend=window.Number(prompt("enter your sacand namber?"));
// if(userNamberFirest>=userNameSacend)
// {
// window.alert(userNamberFirest)
// } 
// else
// {
//     window.alert(userNameSacend)
// }
//---------------------------------------------------------------------------------------- 


//4
// var usernamber= window.Number(prompt("enter yoy namber?"))  
// if(usernamber>=0)
// {
//     window.alert("Output positive")
// } 
// else
// {
//     window.alert("Output negative")
// }
//-------------------------------------------------------------
//5
//  var userNamberFirest= window.Number(prompt("enter your firest namber?"));
//  var userNameSacend=window.Number(prompt("enter your sacand namber?"));
//  var userNameTheree=window.Number(prompt("enter your theree namber?")); 
//  if(userNamberFirest>userNameSacend&&userNamberFirest>userNameTheree) 
//  {
//     window.alert=(Math.max());
//     window.alert=(Math.min)
//  }
//-------------------------------------------------------------------

//  var usernamber= window.Number(prompt("enter yoy namber?")) 
//  for(var i=5;i<(usernamber-12);i+=5) 
//  {
//     console.log(i)
//  } 



// function cala(price,tax,proved,hamada) 
// {
//     var rsert =price+proved
//     var final=rsert*tax/hamada 
//     return final
// }

//   var x=cala(10,20,30,40) 
//   console.log(x)



//   function sayhel(hamada,g,)
//   {
//     var c=hamada+g 
//     return c
//   } 
//    var y=sayhel(20,9x) 
//    console.log(y) 



// var user =
// {
//     name: "nader",
//     age: 20,
//     work: function () {
//         window.alert("yas")
//     },
//     chelid: {
//         name: "jamel",
//         age: 2,
//     work:function () {
//    window.alert("now")
//     }     
//     }
// };


// console.log(user.chelid.work())
// var enbloy=
// [
//   {name:"ahamed",age:25,sarary:200000},
//   {name:"ali",age:25,sarary:200000},
//   {name:"ahamed",age:25,sarary:200000},
//   {name:"ahamed",age:25,sarary:200000}

// ] 
// console.log(enbloy[0].age)
// for(var i=0;i<enbloy.length;i++) 
// {
//  if(enbloy[i].name=="ahamed") 
//  {
//     console.log(enbloy[i].name)
//  }

// }  












//--------------------------------------------------------------------------------------------------------



// var inputName = document.getElementById("inputName");
// var inputBrice = document.getElementById("inputprice");
// var inputCategory = document.getElementById("inputcategory");
// var inputDescriptio = document.getElementById("inputDescriptio");
// var inputs = document.getElementsByClassName("form-control");
// var alertName=document.getElementById("alertName"); 
// var alertbrice=document.getElementById("alertbrice") ;
// var alertGategory=document.getElementById("alertGategory")


// if (JSON.parse(localStorage.getItem("projec1")) == null) {

//     var proudcts = [];
// }
// else {
//     var proudcts = JSON.parse(localStorage.getItem("projec1"));
//     dissPlay()
// }
        











// function addBroduct() { 
//     if(namRjex() ==true&&rejexPrice() ==true&&rejexGat() ==true) 
//     {
//         var prouduct = {
//             name: inputName.value,
//             price: inputBrice.value,
//             category: inputCategory.value,
//             desc: inputDescriptio.value,
    
//         }
    
//         proudcts.push(prouduct);
//         localStorage.setItem("projec1", JSON.stringify(proudcts));
    
//         dissPlay();
//         resetInput();
    
//         console.log(proudcts)
//     }
   


// };

// function dissPlay() {
//     var cartona = "";
//     for (var i = 0; i < proudcts.length; i++) {
//         cartona += `
//     <tr>
//     <td>${proudcts[i].name}</td> 
//     <td>${proudcts[i].price}</td>
//     <td>${proudcts[i].category}</td>
//     <td>${proudcts[i].desc}</td> 
//     <td><button class="btn btn-danger" onclick="delet(${i})">DELET</button></td> 
//     <td> <button class="btn btn-warning">UPDAT</button> </td>
//    </tr>
//     `

//     }
//     document.getElementById("mytabel").innerHTML = cartona

// }


// function resetInput() {

//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].value = "";
//     }

// }
// function delet(index) {
//     proudcts.splice(index, 1);

//     dissPlay()
//     localStorage.setItem("projec1", JSON.stringify(proudcts));
// }


// function search(txt) {



//     var cartona = "";
//     for (var i = 0; i < proudcts.length; i++) {

//         if (proudcts[i].name.toLowerCase().includes(txt.toLowerCase()))
//          {

//             cartona += `
//             <tr>
//             <td>${proudcts[i].name}</td> 
//             <td>${proudcts[i].price}</td>
//             <td>${proudcts[i].category}</td>
//             <td>${proudcts[i].desc}</td> 
//             <td><button class="btn btn-danger" onclick="delet(${i})">DELET</button></td> 
//             <td> <button class="btn btn-warning">UPDAT</button> </td>
//            </tr>
//             `

//         }
//     }


//     document.getElementById("mytabel").innerHTML = cartona


// }



// function namRjex()
// {
//   var namRejex=/^[a-zA-Z]{3,8}$/

//  if( namRejex.test(inputName.value)==true) 
//  {
//    inputName.classList.add("is-valid") ;
//    inputName.classList.remove("is-invalid")
//    alertName.classList.add("d-none") 
//    return true
//  }
 
// else
// { 
//     inputName.classList.add("is-invalid") 
//    inputName.classList.remove("is-valid")
//    alertName.classList.remove("d-none") 
//    return false
// }

// } ;

// function rejexPrice(){


//    var rejexPrice=/^[0-9]{3,6}$/


//     if(rejexPrice.test(inputBrice.value)==true) 
//     {

//         inputBrice.classList.add("is-valid") 
//         inputBrice.classList.remove("is-invalid")
//         alertbrice.classList.add("d-none") 
        
//    return true
   
//     } 
//     else
//     {
//         inputBrice.classList.add("is-invalid") 
//         inputBrice.classList.remove("is-valid")
//         alertbrice.classList.remove("d-none") 
//         return false
//     }



// }


// function rejexGat(){


//  var rejexGat=/^[a-zA-Z]{2,15}$/

//    if(rejexGat.test(inputCategory.value)==true)
//    {
//     inputCategory.classList.add("is-valid") ;
//     inputCategory.classList.remove("is-invalid")
//     alertGategory.classList.add("d-none") 
//     return true
//    }

//    else
//    {
//     inputCategory.classList.add("is-invalid") 
//     inputCategory.classList.remove("is-valid")
//     alertGategory.classList.remove("d-none") 
//     return false
//    }





// }




// console.log(alertName) 




//------------------------------------------------------------------------------------------------

var firstName=document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var pohenNumber=document.getElementById("pohenNumber");
var emailUser=document.getElementById("emailUser");
var inputs=document.getElementsByClassName("form-control"); 
var messag=document.getElementById("messageAdd")
var firstNameAlert=document.getElementById("firstNameAlert")

 var alertLastAlert=document.getElementById("alertLastAlert")

  var alertNumber=document.getElementById("namberAlert")


if(JSON.parse(localStorage.getItem("project2"))==null )
{


    var users=[];
}
else
{
    var users=JSON.parse(localStorage.getItem("project2")) 
    display()
} 






function aaduser(){ 
    if(nameREJEX()==true&& lastNmeRejex()==true&&numberRejex()==true) 
    {


        var user={
 
            firstName:firstName.value,
            lastName:lastName.value,
            pohenNumber:pohenNumber.value,
            emailUser:emailUser.value,
            firstCar:firstName.value.charAt(0),
           
        }
        
        users.push(user) 
        console.log(users)  
        localStorage.setItem("project2",JSON.stringify(users))
        display()
        
        reset()
        messag.style.animationDuration="4s";
        // messag.style.animationDuration="none" ;
    
    }



} 

 

function display(){ 
   var cartona="";
 for(var i=0;i<users.length;i++)
{
  cartona += `  <tr>
  <td class="m rounded-pill"> ${users[i].firstCar}</td>
  
  <td><h4>${users[i].firstName}${" "}${users[i].lastName} </h4>

  <p> ${users[i].pohenNumber}<p>
  </td>
  
  <td><i class="fa-sharp fa-solid fa-trash delet"onclick="delet(${i})" ></i><i class="fa-sharp fa-solid fa-pen-to-square m-3 "></i></td>

                 </tr>`



}

document.getElementById("mytabel").innerHTML=cartona 

}

 function reset(){
    for(var i=0 ;i<inputs.length;i++) 
    {
          inputs[i].value = ""

    }
 }



function delet(index)
{

   users.splice(index,1)

   display()
   localStorage.setItem("project2",JSON.stringify(users))
}
  
function nameREJEX(){
    var nameRejaex=/^[a-zA-Z]{3,8}$/ 
    if(nameRejaex.test(firstName.value)==true)  
    {
        firstName.classList.add("is-valid") ;
       firstName.classList.remove("is-invalid") 
       firstNameAlert.classList.add("d-none")  

       return true
    } 
    else
    {
        firstName.classList.add("is-invalid") 
        firstName.classList.remove("is-valid") 
        firstNameAlert.classList.remove("d-none") 
        return false
    }
} 

function lastNmeRejex(){

var lastNmeRejex=/^[a-zA-Z]{3,8}$/
    
if(lastNmeRejex.test(lastName.value)==true) 
{
    lastName.classList.add("is-valid") ;
    lastName.classList.remove("is-invalid") 
   alertLastAlert.classList.add("d-none")   
   return true
}
else
{
   lastName.classList.add("is-invalid") 
    lastName.classList.remove("is-valid") 
    alertLastAlert.classList.remove("d-none") 
    return false
}

} 
function numberRejex(){
    var numberRejex=/^[0-9]{3,11}$/ 
    if(numberRejex.test(pohenNumber.value)==true) 
    {
          alertNumber.classList.add("d-none") 
          pohenNumber.classList.add("is-valid")
          pohenNumber.classList.remove("is-invalid") 
          return true
    } 
    else
    {
        alertNumber.classList.remove("d-none") 
        pohenNumber.classList.remove("is-valid")
        pohenNumber.classList.add("is-invalid") 
        return false
        
    }
} 


function search(teaxt) 
{


  var  cartona="";
 for(var i=0;i<users.length;i++) 
{ 
   if(users[i].firstName.toLowerCase().includes(teaxt.toLowerCase()))

    {
        cartona += `  <tr>
        <td class="m rounded-pill"> ${users[i].firstCar}</td>
        
        <td><h4>${users[i].firstName}${" "}${users[i].lastName} </h4>
      
        <p> ${users[i].pohenNumber}<p>
        </td>
        
        <td><i class="fa-sharp fa-solid fa-trash delet"onclick="delet(${i})" ></i><i class="fa-sharp fa-solid fa-pen-to-square m-3 "></i></td>
      
                       </tr>`
    }








}


document.getElementById("mytabel").innerHTML=cartona


}
 
