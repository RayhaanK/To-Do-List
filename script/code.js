const addName = document.querySelector('#addName')
const sort = document.querySelector("#sort")
const nameInput = document.querySelector("#displayInput")
const output = document.querySelector("#name-list")
const deleteBtn = document.querySelector('#delete')
let nameList = []

addName.addEventListener("click", (e)=> {
    // doesnt let the entire page refresh
    e.preventDefault()
    if(nameInput.value) {
        nameList.push(nameInput.value)
        nameInput.value = ""
    } else {
        nameInput.style = "outline: 3px solid red;"
    }
    
})

// update
localStorage.setItem("names", JSON.stringify(nameList))
addName.addEventListener("click", (event)=> {
    event.preventDefault()
    output.innerHTML = "";
    nameList.forEach( (name)=> {
        output.innerHTML += `
        <li><input type="checkbox">
        ${name}
        <button class="btn3" id="delete">x</button>
        </li>
        `
    })
    // nameList = localStorage.getItem("names");
    deleteBtn.addEventListener('click', (e) => {
        console.log("Hi");
    
    })
})

function clear() {
    // nameList = ""
}