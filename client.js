const socket=io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
var audio = new Audio('ring.mp3');

const append=(message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('massage');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);
    if(position == 'left'){
        audio.play();
    }
}


const name = prompt("Enter your name to join");
socket.emit('new-user-joined',Name);

socket.on('user-joined',Name =>{
append(`${Name} joined the chat`,'right')
})

socket.on('receive',data =>{
    append(`${data.name}: ${data.message}`,'left')
})

socket.on('left', Name =>{
    append(`${Name} left the chat`,'right')
})

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const message = messageInput.Value;
    append(`You: ${message}`, 'right');
    socket.emit('send',message);
    messageInput.Value =''
})