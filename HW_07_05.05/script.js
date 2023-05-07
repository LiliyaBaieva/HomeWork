const t = setInterval(move, 20);
const box = document.getElementById('box');

let pos = 0;
let moveForward = true; 

function move(){
    if(moveForward){
        pos++;  
        if(pos == 150){
            moveForward = false;
        }
    } else{
        pos--;
        if(pos == 0){
            moveForward = true;
        }
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}

const t2 = setInterval(printTime, 500);

function printTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const timeBox = document.getElementById('timeBox');
    const newTime = document.createElement('p');
    
    // была попытка сделать секунды с нулём впереди
    // const time = '';
    // if(sec < 10){
    //     time = hour + ' : ' + min + ' : 0' + sec; 
    // } else {
    //     time = hour + ' : ' + min + ' : ' + sec;
    // }

    const time = hour + ' : ' + min + ' : ' + sec;
    const newTimeText = document.createTextNode(time);
    
    newTime.appendChild(newTimeText);
    newTime.style.color = 'white';
    newTime.style.fontSize = '3em';

    timeBox.replaceChild(newTime, timeBox.firstElementChild);

}    




// ТОЖЕ РАБОТАЕТ задание про бокс

// let t = setInterval(move, 20);

// const box = document.getElementById('box');

// let pos = 0;
// function move(){
//     pos++;
//     if(pos == 150){
//         clearInterval(t);
//         t = setInterval(moveBack, 20);
//     }
//     box.style.left = pos + 'px';
//     box.style.top = pos + 'px';
// }

// function moveBack(){
//     pos--;
//     if(pos == 0){
//         clearInterval(t);
//         t = setInterval(move, 20);
//     }
//     box.style.left = pos + 'px';
//     box.style.top = pos + 'px';
// }