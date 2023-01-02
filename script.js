

let container = document.querySelector(".containerOfToDo");
let input = document.querySelector("#inputValue");
let submit = document.querySelector("#Submit");
let TodoContainer = document.querySelector(".ToDo");
let myTodoList = "MY TO DO LIST";
let header = document.querySelector("header");

let arrayCounter = document.createElement("h4");
arrayCounter.className ="arrayCounter";


let containerOfText = document.querySelector(".containerOfText");

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

let animationRunning =false;
function deleteItem(index) {
  if (animationRunning){
    return;
  }
  animationRunning =true;
  let localItems = JSON.parse(localStorage.getItem("blocks"));
  let containerOfText = document.getElementsByClassName("containerOfText"); // Get the container element

  containerOfText[index].classList.add("fade"); // Add the "fade" class to the container
  setTimeout(() => {
    localItems.splice(index, 1); // Remove the item from the list
    localStorage.setItem("blocks", JSON.stringify(localItems)); // Update the local storage
    showList(); // Update the list on the page
    animationRunning = false;
  }, 1200); // Wait 2 seconds before removing the item
}



window.addEventListener('load', function() {
  // Get all the elements with the class "moving-element"
  var elements = document.querySelectorAll('.moving-element');

  // Set the initial position and blur of the elements
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = '100%';
    elements[i].style.filter = 'blur(5px)';
  }

  // Animate the elements to the middle of the screen
  var interval = setInterval(function() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var currentLeft = parseInt(element.style.left, 10);
      var newLeft = currentLeft - 10;

      // Decrease the blur as the element moves towards the middle
      element.style.filter = 'blur(' + (5 - newLeft / 20) + 'px)';

      // Stop the animation when the element reaches the middle of the screen
      if (newLeft < 50) {
        clearInterval(interval);
      } else {
        element.style.left = newLeft + '%';
      }
    }
  }, 10);
});