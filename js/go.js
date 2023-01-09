const input = document.querySelector(".text-input")
const btn = document.querySelector(".add-btn")
const list = document.querySelector(".list")


const classes = {
    li:"list-group-item d-flex justify-content-between align-items-center",
    delBtn:"del-btn btn btn-danger",
    span:"d-flex align-items-center",
    checked:"check-box mx-1"
}

function view() {
    const tasks = JSON.parse(localStorage.getItem('task')) || []
    let allList = ""
    tasks.map(el =>{
        allList += `<li class="${classes.li}"><span class="${classes.span} 
        ${el.isDone ? "line" : ""}"> <input ${el.isDone ? "checked" : ""}
        type="checkbox" class="${classes.checked}"> ${el.title}</span> 
        <button class="${classes.delBtn}">delete</button></li>`})


    list.innerHTML = allList
    deleteTask()
}
view()



btn.addEventListener("click", () => {
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const newTask = {
        id:tasks.length ? tasks [tasks.length -1].id +1 : 1,
        title:input.value,
        isDone:false,
    }
    tasks = [...tasks,newTask]
    localStorage.setItem("task",JSON.stringify(tasks))
    view()
    changeStatus()
})


function deleteTask(){
    const buttons = document.querySelector()
}

















