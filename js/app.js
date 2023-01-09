


// localStorage

// getItem (key,value)
// getItem (value)
// removeItem (key)

// localStorage.setItem("id", 1)
// localStorage.removeItem('id')
// console.log(localStorage.getItem('id'))


// JSON.stringify
// JSON.parse


// localStorage.setItem('task',JSON.stringify([{id:1,title:"go to school",isDone: false},{id:2,title:"go to office",isDone: false}]))

const input = document.querySelector('.text-input')
const btn = document.querySelector('.add-btn')
const list = document.querySelector('.list')
//
// const classes = {
//     li: "list-group-item d-flex justify-content-between align-items-center",
//     delBtn: "del-btn btn btn-danger",
//     span: "d-flex align-items-center",
//     checked: "check-box mx-1",
// }
//
// function view(){
//     const tasks = JSON.parse(localStorage.getItem('task')) || []
//     let allList = ""
//     tasks.map(el =>{
//         allList += `<li class="${classes.li}"><span class="${classes.span}
//         ${el.isDone ? "line" : ""}"> <input ${el.isDone ? "checked" : ""}
//         type="checkbox" class="${classes.checked}"> ${el.title}</span>
//         <button class="${classes.delBtn}">delete</button></li>`})
//
//
//     list.innerHTML = allList
//     deleteTask()
// }
// view()
//
//
//
// btn.addEventListener("click", () => {
//
//     let tasks = JSON.parse(localStorage.getItem('task')) || []
//     const newTask = {
//         id:tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
//         title: input.value,
//         isDone: false,
//     }
//     tasks = [...tasks, newTask ]
//     localStorage.setItem('task', JSON.stringify(tasks))
//     view()
//     changeStatus()
// })
//
//
//
// function deleteTask(){
//     const buttons = document.querySelectorAll('.del-btn')
//     let tasks = JSON.parse(localStorage.getItem('task')) || []
//
//     buttons.forEach((btn,index) =>{
//         btn.addEventListener('click', () => {
//             tasks = tasks.filter((el, idx) =>{
//                 return index !== idx
//             })
//             localStorage.setItem('task', JSON.stringify(tasks))
//             view()
//         })
//     })
// }
//
//
//
// function changeStatus (){
//     const checkboxes = document.querySelectorAll('.check-box')
//     let tasks = JSON.parse(localStorage.getItem('task')) || []
//
//     checkboxes.forEach((check,index) =>{
//         check.addEventListener('click', () => {
//
//             tasks = tasks.map((el,idx) => {
//                 if(index === idx){
//                     check.parentNode.classList.toggle('line')
//                     return {...el, isDone: !el.isDone}
//                 }else{
//                     return el
//                 }
//             })
//             localStorage.setItem('task', JSON.stringify(tasks))
//         })
//     })
// }
// changeStatus()
//
//














//--------------------------------------------------------------------



btn.addEventListener('click',() =>{
    addNewWork()
})

input.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        addNewWork()
    }
})

function addNewWork(){
    if (input.value !== "") {
        const newList = `<li class="list-group-item d-flex justify-content-between
                          align-items-center">
        <span class="d-flex align-items-center"> <input type="checkbox" class="checkbox mx-1">
         ${input.value}</span>
        <button class="del-btn btn btn-danger">delete</button>
        </li>`
        list.innerHTML += newList
    }
    input.value = ""
}

list.addEventListener('click',(e) =>{
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }

    if (e.target.classList.contains("checkbox")){


        e.target.parentNode.classList.toggle('line')
    }
})