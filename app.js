const inputText = document.querySelector("#task");
const button = document.querySelector(".add-btn");
const form = document.querySelector("#add-task");
const ul = document.querySelector(".todolist-list-container");


//functions

const createTask = (taskText)=>{
    return `
    <div class="list-group">
                    <li class="unchecked">${taskText}</li>
                    <button class="btn">&#128473;</i></button>
                </div>`

}

const completedTaskCount=()=>{
    let checkedcount = ul.getElementsByClassName("checked").length;
    let taskCount = ul.getElementsByClassName("list-group").length;
    const checkedTasks = document.getElementById("checkedTasks");
    const allTasks = document.getElementById("allTasks");
    checkedTasks.innerText = checkedcount;
    allTasks.innerText = taskCount; 
}



//events
button.addEventListener("click",e=>{
    e.preventDefault();
    if(inputText.value != ""){
    ul.innerHTML += createTask(inputText.value);
    form.reset();
    }else{
        alert("Please enter a task!");
    }
    completedTaskCount();
})
//delete task
ul.addEventListener("click",e=>{
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }
    completedTaskCount();
})

//check & uncheck Task
ul.addEventListener("click", e=>{
    if (e.target.classList.contains("unchecked")) {
        e.target.className="checked";   
    }else{
        e.target.className="unchecked"; 
    }
    completedTaskCount();
})



