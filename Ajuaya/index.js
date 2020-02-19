

const input1 = document.getElementById('input-1')

const jobInput = document.getElementById('job-input')
const selectInput = document.getElementById('select-input')

const jobTitle = document.getElementById('job-title')

const skillInput = document.getElementById('skill-input')
const jobDesired = document.getElementById('job-desired')

const minimum = document.getElementById('minimum')
const minimum1 = document.getElementById('minimum1')
const minimum2 = document.getElementById('minimum2')

const button = document.getElementById('button')


const form = document.querySelector(".form")
const taskList = document.querySelector(".collection")
const taskInput = document.querySelector('.input')

function myFunc() {
    if (minimum.style.display == 'none' && screen.width >= 320) {
        minimum.style.display='block'
        minimum1.style.display='block'
        minimum2.style.display='block'
        button.innerHTML = 'Close'
    } else if(screen.width >= 320) {
        minimum.style.display='none'
        minimum1.style.display='none'
        minimum2.style.display='none'
        button.innerHTML = 'See all'
    }
    
}

function myFunction() {
    if (input1.value === '') {
        alert('please fill the input box to proceed')
    } else {
        location.href="job.html"
    }
}
function myPortfolio() {
    if (jobInput.value === '') {
        alert('please fill the input box to proceed')
    } else {
        location.href="qualification.html"
    }
}
function myQualification() {
    if (selectInput.value === '') {
        alert('please fill the input box to proceed')
    } else {
        location.href="work.html"
    }
}

function mySkill() {
    if (jobTitle.value === '') {
        alert('please fill the input box to proceed')
    } else {
        location.href="skill.html"
    }
}


function myRating() {
    if (skillInput.value === '') {
        alert('please fill the input box to proceed')
    } else {
        location.href="preference.html"
    }
}
function myJobDesire() {
    if (jobDesired.value === '') {
        alert('please fill the input box to proceed')
    } else {
        alert('Application Submitted')
    }
}

loadEventListeners()

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask)

    //Remove task event

    taskList.addEventListener('click', removeTask)

}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        //for confirmation
        if(confirm("Are you Sure?")) {
            e.target.parentElement.parentElement.remove()
        }
        
    }
    
}

function addTask(e) {
    if(taskInput.value === "") {
        alert("Add a task");
    }

    //create li item
    const li = document.createElement("li")
    li.className = 'collection-item';

    //Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value))

    //Craete new link element

    const link = document.createElement("a")
    link.className = 'delete-item secondary-content';
    link.style.marginLeft = "70%"
    link.style.color = "red"

    //Append the lik to li
    li.appendChild(link)

    //Append the li to the ul

    taskList.appendChild(li)

    //Clear the input

    taskInput.value= ""

    e.preventDefault()
}
