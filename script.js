const swatch = document.querySelectorAll('.colorpicker'),
    colorChoice = document.querySelector('#color-choice');

let storecolor1 = '#000000',
    storecolor2 = '#000000',
    storecolor3 = '#000000',
    storecolor4 = '#000000',
    storecolor5 = '#000000',
    storecolor6 = '#000000',
    storecolor7 = '#000000',
    storecolor8 = '#000000',
    numColors = 1,
    whatColor = 1,
    whatBall,
    pickers = '';

updateColorPickers(numColors);

//Colors dropdown
colorChoice.addEventListener('change', function() {
    numColors = event.target.value;
    updateColorPickers(numColors);
});

//Only show as many color pickers as selected in colors dropdown
function updateColorPickers(numColors) {
    pickers = '';
    for(let i = 0; i < numColors; i++) {
        pickers += `<div id="color${i}"><input class='colorpicker' type="color" id="colorpicker" data-color="${i+1}" value="${eval('storecolor' + (i + 1))}"></div>`;
    }
    document.getElementById('color-contents').innerHTML = pickers;
    updateYarnColor();
}

function updateYarnColor() {
    document.querySelectorAll('.colorpicker').forEach(element => { 
        $('.colorpicker').on('change', function() {
            whatColor = $(this).data('color');
            eval('storecolor' + whatColor + '= ' + '"' +event.target.value + '"');
            // passColor = event.target.value;
            updateYarn(whatColor, eval('storecolor' + whatColor));
        });
}); 
}

function updateYarn(whatColor, passColor) { 
    whatBall = $('.ball').get(whatColor - 1);
    $(whatBall).css({fill: passColor});
}

// const selectElement = document.querySelector('#color');
// selectElement.addEventListener('change', (event) => {
//  console.log(event.target.value); 
// });

// const swatch1 = document.querySelector('#color1');

// swatch1.addEventListener('change', (event) => {
//  console.log(event.target.value); 
// });

