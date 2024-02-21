const container = document.querySelector('.container');
const inputNumber = document.querySelector('#input');
const div = document.querySelectorAll('div');
const size = document.querySelector('#size')
let rgb = ``;
let inputValue = 16;
let rainbow = 1;

function createGrid(){
    for (let i = 1; i <= inputValue; i++){
            const column = document.createElement('div');
            column.classList.add('column');
            container.appendChild(column);
            for (let i = 1; i<= inputValue; i++){
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
            };
    };
};
createGrid();
    
function removeCurrentGrid(){
    for (i = 1; i <= inputValue; i++){
    const rmcolumn = document.querySelector('.column');
    const rmrow = document.querySelector('.row');
    rmcolumn.remove();
    rmrow.remove();
    };
};


inputNumber.addEventListener('change', function(){
    removeCurrentGrid(); 
    inputValue = document.querySelector('#input').value;
    createGrid();
    size.textContent = `${inputValue} x ${inputValue}`
});

function randomNumber(){    
    return Math.floor(Math.random()* 256);
};

function randomColor(){
    const colorOne = randomNumber();
    const colorTwo = randomNumber();
    const colorThree = randomNumber();
    rgb = `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
}; 

document.addEventListener('mouseover', function(event){
    if (event.target.classList.value === 'row'){
        if (rainbow === 1){
        randomColor();
        event.target.style.backgroundColor = rgb;
        } else {
            event.target.style.backgroundColor = 'white'
        };
    };
});

document.addEventListener('click', function(event){
    if (event.target.classList.value === 'rainbow'){
        rainbow = 1;
    } else if (event.target.classList.value === 'erase') {
        rainbow = 0;
    } else if (event.target.classList.value === 'reset'){
        removeCurrentGrid();
        createGrid();
    };
});