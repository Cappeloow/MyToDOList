
const inputDiv = document.querySelector(".inputDiv");
const outputDiv = document.querySelector(".outputDiv");
const submitBtn = document.querySelector(".submitBtn");
const input = document.querySelector("input");




submitBtn.addEventListener("click", ()=>{
  let localItems = JSON.parse(localStorage.getItem("todo"));

  if (localItems===null){
    myTodos=[];
  }else
  {
    myTodos = localItems;
  };
  myTodos.push(input.value);
  input.value ="";
  localStorage.setItem("todo",JSON.stringify(myTodos));
  CreateToDo();
 
});


let listofTodos = document.createElement("ul");
function CreateToDo(){
  let localItems = JSON.parse(localStorage.getItem("todo"));

  if (localItems===null){
    myTodos=[];
  }else
  {
    myTodos = localItems;
  };
  const outputDiv = document.querySelector(".outputDiv");
  
  let btnRemove = document.createElement("button");
  btnRemove.className="btnRemove";
  btnRemove.innerText = "Remove";
  let list = document.createElement("li");
  for (const Todos of myTodos){
    list.innerText = Todos;
    list.appendChild(btnRemove);
    listofTodos.appendChild(list);

  }
  outputDiv.appendChild(listofTodos);
  
  
  btnRemove.addEventListener("click", deleteTask);


}

CreateToDo();


function deleteTask(e){


    const item = e.target;
    console.log(item);
    if (item.className ==="btnRemove"){
      let todo = item.parentElement;
      todo.remove();
      myTodos.splice(index,1);
    }
    
    console.log(myTodos);
    
    CreateToDo();
}




