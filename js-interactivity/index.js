let message = document.querySelector('#message')

console.log('hello world')

let inputField = document.querySelector('input')

 const addMovie = (event) => {
    event.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField = ''
 }

 const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.previousElementSibling.textContent} deleted!`
    revealMessage()
 }

 const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }revealMessage()
 }

 const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'),1000)   
    }
 

document.querySelector('form').addEventListener('submit',addMovie)