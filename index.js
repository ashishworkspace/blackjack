// window.onload = onPageLoadMsg;

// Cards Values in BlackJack
cards_value = {
    "2": 2,"3": 3,"4": 4,"5": 5,"6": 6,"7": 7,"8": 8,"9": 9,"10": 10,"j": 10,"q": 10,"k": 10,"a": 11
}

// Getting the selector for cards, msg and sum 
let cards = document.getElementById('cards');
let sum = document.getElementById('sum');
let msg = document.getElementById('msg');
let current_status = document.getElementById('status');


// Filtering the keys from Object
let keys = Object.keys(cards_value);


// Generatng random key and random value for Cards
function rand_gen(){
    rand_key = keys[Math.floor(keys.length * Math.random())];
    rand_value = cards_value[rand_key];
    return {rand_key, rand_value};
}

// Creating the Start Function
let result = 0;
let execution = false;
function start(){
    let tmp = 0;
        if(!execution){
            execution = true;
            let first_card = rand_gen();
            let second_card = rand_gen();
            cards.textContent += `${first_card['rand_key']}, ${second_card['rand_value']}`;
            tmp = first_card['rand_value'] + second_card['rand_value'];
            sum.textContent = `SUM : ${first_card['rand_value']+second_card['rand_value']}`; 
            onPageLoadMsg();
    }
    result = tmp;
}


function newCard(){
    result += Math.floor(Math.random() * keys.length);
    sum.textContent = `SUM : ${result}`;
    showLiveStatus();

}


function onPageLoadMsg(){
    if(result <= 21){
        message = "Do you want to draw a new Card?";
    }else if(result === 21){
        message = "You have got BlackJack!";
    }else{
        message = "You are out of game!";
    }
    msg.textContent = message;
}

function showLiveStatus(){
    if(result >= 17  && result < 21){
        message = "So close😯";
    }else if(result === 21){
        message = "You Won🤗";
    }else if(result < 17 && result > 2){
        message = "Try Again🙂"
    }
    else{
        message = "You Loose😥";
    }
    current_status.textContent = message;
}

