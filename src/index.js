document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', e =>{
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)
    })
  
});

function handleToDo(todo){
  let p = document.createElement('p')
  p.textContent = todo;
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'X'
  p.appendChild(btn)
  
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentElement.remove()
}