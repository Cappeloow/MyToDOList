
// const inputDiv = document.querySelector(".inputDiv");
// const outputDiv = document.querySelector(".outputDiv");
// const submitBtn = document.querySelector(".submitBtn");
// const input = document.querySelector("input");




// submitBtn.addEventListener("click", ()=>{
//   let localItems = JSON.parse(localStorage.getItem("todo"));

//   if (localItems===null){
//     myTodos=[];
//   }else
//   {
//     myTodos = localItems;
//   };
//   myTodos.push(input.value);
//   input.value ="";
//   localStorage.setItem("todo",JSON.stringify(myTodos));
//   CreateToDo();
 
// });


// let listofTodos = document.createElement("ul");
// function CreateToDo(){
//   let localItems = JSON.parse(localStorage.getItem("todo"));

//   if (localItems===null){
//     myTodos=[];
//   }else
//   {
//     myTodos = localItems;
//   };
//   const outputDiv = document.querySelector(".outputDiv");
  
//   let btnRemove = document.createElement("button");
//   btnRemove.className="btnRemove";
//   btnRemove.innerText = "Remove";
//   let list = document.createElement("li");
//   for (const Todos of myTodos){
//     list.innerText = Todos;
//     list.appendChild(btnRemove);
//     listofTodos.appendChild(list);

//   }
//   outputDiv.appendChild(listofTodos);
  
  
//   btnRemove.addEventListener("click", deleteTask);


// }

// CreateToDo();


// function deleteTask(e){


//     const item = e.target;
//     console.log(item);
//     if (item.className ==="btnRemove"){
//       let todo = item.parentElement;
//       todo.remove();
//       myTodos.splice(index,1);
//     }
    
//     console.log(myTodos);
    
//     CreateToDo();
// }




let container = document.querySelector(".containerOfToDo");
let input = document.querySelector("#inputValue");
let submit = document.querySelector("#Submit");
let TodoContainer = document.querySelector(".ToDo");
let myTodoList = "MY TO DO LIST";
let header = document.querySelector("header");

let arrayCounter = document.createElement("h4");
arrayCounter.className ="arrayCounter";


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


