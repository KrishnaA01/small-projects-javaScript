let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

function addTask(e){
    console.log(e);
    e.preventDefault()

    if(input.value.trim()===''){
    alert('type in your to-dos')
    } else {
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.innerText = "\u274C"
    li.innerText = input.value
    li.append(span)
    ul.insertBefore(li, ul.firstElementChild)
    form.rest()
    }
}


ul.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.style.backgroundColor = 'lightblue'
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
})
form.addEventListener('submit', addTask)