// TOGGLE MENU
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

//toggle the menu visibility when the menu button is clicked

menuButton.addEventListener('click', function(){
    if(menu.style.display === 'none'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
});


// SHOW ALERT MESSAGES

const alertButton = document.getElementById('alertButton');




//Display an alert when alert buton is clicked

alertButton.addEventListener('click', function(){
    alert('Welcome to my website! Im so glad you’re here');
});

//INCREMENT AND DECREMENT 

let counterDisplay = document.getElementById('counter');
let incrementButton = document.getElementById('incrementButton');
let decrementButton = document.getElementById('decrementButton');

//initialize the counter

let counter = 0;

// increment the counter and update the display when button is clicked

incrementButton.addEventListener('click' , function(){
    counter +=1; // increment the counter by 1
    counterDisplay.textContent = counter; //update the counter display
});


// decrement the counter and update the display when button is clicked

decrementButton.addEventListener('click' , function(){
    counter -=1;
    counterDisplay.textContent = counter;
});



//RELOAD PAGE
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click' , function(){
    location.reload();
    
});


//REGEX

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');


//Get reference to the form elements

//Function to check if the input contains only letters

function isValidName(name){
    const namePattern  = /^[a-zA-Z\s]+$/; //Regular expression to allow only letter
    return namePattern.test(name);
}

//Add Event Lister to the button

greetButton.addEventListener('click' , function(){
    const username = usernameInput.value.trim();
    
    // check if the input is not empty and is valid
    
    if (username === ''){
        greetingMessage.textContent = 'Please enter your name.';
    } else if (!isValidName(username)){
        greetingMessage.textContent = 'Invalid Input. Please use only letters';
    }else{
        // set greeting message
        greetingMessage.textContent = `Hello, ${username}! Welcome to my website! Im so glad you’re here`;
    }
});


//SHOW PARAGRAPH

const AddParagraphButton = document.getElementById("AddParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");


AddParagraphButton.addEventListener('click',function(){
    //create a new paragraph
    const newParagraph = document.createElement('p');
    //set its text content
    newParagraph.textContent="Congratulation on learning Practical javascript!";
    //append paragraph to the container
    paragraphContainer.appendChild(newParagraph);
});




