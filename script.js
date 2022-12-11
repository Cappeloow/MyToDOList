

let container = document.querySelector(".containerOfToDo");
let input = document.querySelector("#inputValue");
let submit = document.querySelector("#Submit");
let TodoContainer = document.querySelector(".ToDo");
let myTodoList = "MY TO DO LIST";
let header = document.querySelector("header");

let arrayCounter = document.createElement("h4");
arrayCounter.className ="arrayCounter";
let holderOfText ="";

function validate(input){
  if(/^\s/.test(input.value))
    input.value = '';
    input.style.borderColor ="red";

}




input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();
  
    document.getElementById("Submit").click();
  }
});


let fromI = 0;
function writingtext(){
  if(fromI<myTodoList.length){
    header.innerHTML += myTodoList.charAt(fromI);
    fromI++;
    setTimeout(writingtext, 70);
  }

  if (fromI===myTodoList.length){
    header.classList.add("headertransition");
  }
}

writingtext();



submit.addEventListener("click", () =>{
  let localItems = JSON.parse(localStorage.getItem("blocks"));

  if (localItems===null){
    arrayList=[];
  }else
  {
    arrayList = localItems;
  };

  if (input.value.length ===0){
    input.style.borderColor ="red";
  }else if(/^\s/.test(input.value)) {
    input.style.borderColor ="red";
  } else {
    input.style.borderColor ="green";
    arrayList.push(input.value.toUpperCase());
  }
  input.value = "";
  localStorage.setItem("blocks",JSON.stringify(arrayList));
  showList();
    
});

function showList(){

  let outPut ="";
  let TodoContainer = document.querySelector(".ToDo");
  let localItems = JSON.parse(localStorage.getItem("blocks"));
  if (localItems===null){
    arrayList=[];
  }else
  {
    arrayList = localItems;
  };
  

  
  arrayList.forEach((data,index)=>{

    outPut += `<div class="containerOfText">
    <p class="pText">${data}</p>
    <button class ="deleteTask" onClick="deleteItem(${index})"><i class="fa-sharp fa-solid fa-check"></i></button>
    </div>
    `
  });
  
  
  taskLogic(arrayList);


  TodoContainer.insertAdjacentElement("beforebegin",arrayCounter);
  TodoContainer.innerHTML = outPut;
 
}
showList();


function taskLogic(array){
  if (array.length===0){
    arrayCounter.innerText = `GET THINGS DONE` ;
  }
  else if (arrayList.length<2){
    arrayCounter.innerText = `${array.length}  TASK LEFT` ;
  } else {
    arrayCounter.innerText = `${array.length}  TASKS LEFT` ;
  }
}



function deleteItem(index){
  let localItems = JSON.parse(localStorage.getItem("blocks"));
  
  
  arrayList.splice(index, 1);
  // setTimeout(greeting, 3000,index);


 

  localStorage.setItem("blocks",JSON.stringify(arrayList));
  showList();
}

// function greeting(index){
  // arrayList.splice(index, 1);
// }


