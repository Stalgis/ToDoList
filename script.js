const routineSection = document.getElementById("routine");
const todaySection = document.getElementById("today");
const notesSection = document.getElementById("pasteNotes");
const btnRoutineSection = document.getElementById("btnRoutine");
const textarea= document.getElementById("taskToAdd");
const textToday=document.getElementById("todayTaskToAdd");
const timeTask=document.getElementById("timeTask");

/*Add task to routine section*/
function addRoutine() {
  const taskToAdd=textarea.value;
  
  if (taskToAdd===""){
    return alert("You must write something!")
  }

  createInput = document.createElement("input");
  createInput.setAttribute("type", "radio");
  createInput.setAttribute("class", "inputTask col-1")
  createInput.addEventListener("change",function(){
    if(createInput.checked){
      createText.classList.add("crossed-out");
    } else {
      createText.classList.remove("crossed-out");
    }
  })
  
  var createText = document.createElement("label");
  createText.textContent=taskToAdd
  createText.setAttribute("class", "text-start col-8")

  var createBtnTrash=document.createElement("button")
  createBtnTrash.textContent="x"
  createBtnTrash.setAttribute("class","btnTrash col-2")
  createBtnTrash.addEventListener("click",function(){
    createDiv.textContent=""
  })

  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "TaskDiv row")
  createDiv.appendChild(createInput);
  createDiv.appendChild(createText);
  createDiv.appendChild(createBtnTrash);

  textarea.value=""
  routineSection.appendChild(createDiv);
}


function addToday() {
  const textToday=todayTaskToAdd.value;
  const timeTodayTask=timeTask.value;
  
  if (textToday===""){
    return alert("I cant add nothing mate!")
  }
  
  createInput = document.createElement("input");
  createInput.setAttribute("type", "radio");
  createInput.setAttribute("class", "inputTask col-1")
  createInput.addEventListener("change",function(){
    if(createInput.checked){
      createText.classList.add("crossed-out");
    } else {
      createText.classList.remove("crossed-out");
    }
  })

  var createText = document.createElement("label");
  createText.textContent=textToday+" "+timeTodayTask;
  createText.setAttribute("class", "text-start col-8")

  var createBtnTrash=document.createElement("button")
  createBtnTrash.textContent="x"
  createBtnTrash.setAttribute("class","btnTrash col-2")
  createBtnTrash.addEventListener("click",function(){
    createDiv.textContent=""
  })

  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "TaskDiv row")
  createDiv.appendChild(createInput);
  createDiv.appendChild(createText);
  createDiv.appendChild(createBtnTrash)

  todayTaskToAdd.value=""
  timeTask.value=""
  todaySection.appendChild(createDiv);
}

function addNotes(){
  var createNote = document.createElement("li")
  createNote.setAttribute("class", "noteMessage")

  var createText= document.createElement("input");
  createText.setAttribute("type","text")
  createText.setAttribute("class", "TextTask");

  createText.addEventListener("blur", function() {
    createText.disabled = true; // Disable the text input on blur event
  });


  notesSection.appendChild(createNote);
  notesSection.appe
}