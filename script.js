let swatch = document.querySelectorAll('.colorpicker'),
    storecolor1 = '#000000';


swatch.forEach(element => { console.log('element');
    element.addEventListener('change', (event) => {
    storecolor1 = event.target.value;
    updateYarn(storecolor1);
    });
}); 

function updateYarn(storecolor1){ 
   const yarn = document.getElementById('ball');
   yarn.style.fill = storecolor1;
}

const selectElement = document.querySelector('#color');

selectElement.addEventListener('change', (event) => {

 console.log(event.target.value); 
});

const swatch1 = document.querySelector('#color1');

swatch1.addEventListener('change', (event) => {
 console.log(event.target.value); 
});

