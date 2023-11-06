// variables  result section

let resultContainer =document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

//variables sumary section

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
buttonContinue = document.querySelector('.button');

// mostrar cuando se haya cargado la pagina

function randomValues (){

    let value = [];
    for (let i = 1 ; i <= 4; i ++) {

        randomNumbers = Math.round(Math.random()* 100);
        value.push(randomNumbers);
        
        
    }
    console.log(value);

   value.forEach((value, index)=>{
    switch (index){

        case 0:

        reaction.innerText= value + ' /100';

        break;


        case 1:
        
        memory.innerText= value + ' /100';
        break;


        case 2:
        verbal.innerText= value + ' /100';

        break;


        case 3:
        visual.innerText= value + ' /100';
        break;

        default: 
                'Fuera de rango';

        break;


    }

   })

   //sumar valores para el resultado de la media
   const media = value.reduce((valuePrevius, currentValue) => {

    return valuePrevius + currentValue;
   }, 0 )

   const result = Math.round( media / 4 ) ;

   if (result >= 75){

    resultContainer.classList.add('result-component');

    numbersContainer.classList.add('numbers');

    resultContainer.classList.remove('result-component-warning', 'result-component-danger');

    stateRange.innerText = result;
    statusRandom.innerText ='Excelenete';
    paragraph.innerText = 'felicidades';

   }

    else if (result <= 74 && result >= 43){

    resultContainer.classList.add('result-component-warning');

    numbersContainer.classList.add('numbers-warning');

    resultContainer.classList.remove('result-component', 'result-component-danger');

    stateRange.innerText = result;
    statusRandom.innerText ='Normal';
    paragraph.innerText = 'Estas en el rango normal de personas';

   }
   else if (result <= 42){

    resultContainer.classList.add('result-component-danger');

    numbersContainer.classList.add('numbers-danger');

    resultContainer.classList.remove('result-component', 'result-component-warning');

    stateRange.innerText = result;
    statusRandom.innerText ='Grave';
    paragraph.innerText = 'Estas en el rango grave y debes revisar tus valores';

   }


   



}

window.addEventListener('load', randomValues);

