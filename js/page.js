const  input = document.querySelector('.text-input')
const  btn = document.querySelector('.add-btn')
const  list = document.querySelector('.list')

const classes = {
    li: "list-group-item d-flex justify-content-between align-item-center",
    delBtn: "del-btn btn btn-danger",
    span: "d-flex align-items-center",
    checked: "check-box mx-1",
}

function view(){
    const tasks = JSON.parse(localStorage.getItem('task'))
}