// Global Variables
let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

// Making sure the form is inputing
function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
}

function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    /* compare remainder to 0 to see if even or not */
    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } 
    else {
        oddList.appendChild(newListItem)
    }

    // Reset the function
    usersWord = ""
    document.getElementById("even-odd-form").reset()
}