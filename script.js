const swatch = document.querySelectorAll('.colorpicker'),
      colorChoice = document.querySelector('#color-choice');

let colorArray = [];

//Colors dropdown: On dropdown remove extra color pickers.
colorChoice.addEventListener('change', function() {
    numColors = event.target.value;
    colorArray = colorArray.slice(0,parseInt(numColors));

    for(let i = 0; i < numColors; i++) {
        if (colorArray[i]) continue;
        colorArray[i] = '#000000';
    };

    buildColorPickers();
    buildYarnBall();

    // updateColorPickers(numColors);
});

// Take a color and build an HTML color picker, defaulting to color.
const buildColorPickers = () => {
    let colorPickers = [];

    colorArray.map((color, idx) => {
        const string = `<div id="color${idx}"><input class='colorpicker' type="color" id="colorpicker" data-color="${idx+1}" value="${color}"></div>`;
        colorPickers.push(string);
        return;
    })

    document.getElementById('color-contents').innerHTML = colorPickers.join('');

    
    const elements = document.getElementsByClassName('colorpicker');
    
    for(let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('change', e => {
            updateColorPicker(e, i);
        }); 
    }
    
}
//  When a color picker changes update color array at the correct index.
const updateColorPicker = (event, index) => {
    colorArray[index] = event.target.value;
    buildYarnBall();
}

// Builds out yarn based off colorArray

const buildYarnBall = () => {
    const yarnContainer = document.getElementById('yarn-contents');
    const yarnContainer2 = document.getElementById('yarn-contents2');
    let yarnBallArray = [];

    colorArray.map((color, idx) => {
        console.log(color);
        const newSvg = `<svg id="ball" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 561 561">
            <defs>
                <g id="ball${idx}">
                    <path fill="${color}" stroke="none" d="
                    M 40.5 402.65
                    Q 59.3546875 439.1099609375 90.65 470.4 120.103515625 499.8162109375 154.05 518.25 410.7369140625 451.59453125 526.7 222 360.7939453125 390.3744140625 138.95 371.5 91.7568359375 390.0544921875 40.5 402.65
                    M 20.9 351.7
                    Q 92.2791015625 322.4314453125 152.4 289.75 79.7037109375 252.63359375 27.4 188.45 11.9859375 231.2962890625 12 280.55 11.994921875 317.9419921875 20.9 351.7
                    M 81.6 100.05
                    Q 60.386328125 123.1708984375 45.65 148.95 122.669140625 216.4099609375 215.45 252.45 261.146484375 223.123828125 298.75 191.25 175.5220703125 163.982421875 81.6 100.05
                    M 41.2 157
                    Q 35.6384765625 167.6615234375 31.1 178.75 85.1265625 246.7654296875 161.95 284.45 184.8564453125 271.7109375 206.05 258.45 116.2990234375 222.35859375 41.2 157
                    M 90.65 90.6
                    Q 89.237109375 92.0087890625 87.85 93.4 182.5390625 157.45234375 307.25 183.9 378.3857421875 121.498046875 418.85 49.65 357.498046875 11.965234375 280.55 12 169.33828125 12.0021484375 90.65 90.6
                    M 536.95 198.15
                    Q 519.1033203125 141.3986328125 475.15 95.45 351.7697265625 281.30546875 157.85 363.75 375.366796875 374.5533203125 536.95 198.15
                    M 549.1 280.55
                    Q 549.1126953125 245.09765625 541.1 212.95 426.341015625 452.887109375 166.05 524.35 218.198046875 549.07421875 280.55 549.05 391.71171875 549.045703125 470.35 470.4 549.0947265625 391.7603515625 549.1 280.55
                    M 468.65 88.95
                    Q 448.5974609375 69.1939453125 426.45 54.5 384.884375 128.1625 311.65 192.05
                    L 311.35 192.3
                    Q 269.97578125 228.32890625 218.5 261.25
                    L 218.4 261.3 218.3 261.35
                    Q 192.7125 277.6916015625 164.6 293.25 164.4607421875 293.3869140625 164.25 293.45 164.1791015625 293.5302734375 164.05 293.55 164.0408203125 293.595703125 164 293.6 100.1466796875 328.98515625 23.35 360.4 28.652734375 377.91328125 36.4 394.4 88.483984375 381.734375 136.35 362.9 136.6552734375 362.7455078125 136.95 362.65 341.14609375 281.967578125 468.65 88.95 Z"/>
                </g>
            </defs>
            
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlink:href="#ball${idx}"/>
            </g>
        </svg>`;
        
        yarnBallArray.push(newSvg);
    });
    console.log(yarnBallArray);
    yarnContainer.innerHTML = yarnBallArray.join('');
    yarnContainer2.innerHTML = yarnBallArray.join('');
}

//Display Sweater Pattern 
function showPattern() {
    document.getElementById("pattern").style.display = "block";
  }


// Step 2 display elemnt by ID

document.getElementById("size").addEventListener('change', function(e) {
    adjustAllSizes(e.target.value);
})

const adjustAllSizes = (selectedSize) => {
    const allSizes = ['xs', 's', 'm', 'l', 'onex', 'twox', 'threex'];
    allSizes.map((size) => {
        const htmlElements = document.querySelectorAll('.' + size.toLowerCase());
        if (size == selectedSize.toLowerCase()) {
            htmlElements.forEach(el => el.style.display = "inline");
            return;
        } else {
            htmlElements.forEach(el => el.style.display = "none");
            return;
        }
    })
}

$(document).ready(function () {
    $('#random').click()
})
















// let storecolor1 = '#000000',
//     storecolor2 = '#000000',
//     storecolor3 = '#000000',
//     storecolor4 = '#000000',
//     storecolor5 = '#000000',
//     storecolor6 = '#000000',
//     storecolor7 = '#000000',
//     storecolor8 = '#000000',
//     numColors = 1,
//     whatColor = 1,
//     whatBall,
//     pickers = '';

// updateColorPickers(numColors);

// //Colors dropdown
// colorChoice.addEventListener('change', function() {
//     numColors = event.target.value;
//     updateColorPickers(numColors);
// });

// //Only show as many color pickers as selected in colors dropdown
// function updateColorPickers(numColors) {
//     pickers = '';
//     for(let i = 0; i < numColors; i++) {
//         pickers += `<div id="color${i}"><input class='colorpicker' type="color" id="colorpicker" data-color="${i+1}" value="${eval('storecolor' + (i + 1))}"></div>`;
//     }
//     document.getElementById('color-contents').innerHTML = pickers;
//     updateYarnColor();
// }

// function updateYarnColor() {
//     document.querySelectorAll('.colorpicker').forEach(element => { 
//         $('.colorpicker').on('change', function() {
//             whatColor = $(this).data('color');
//             eval('storecolor' + whatColor + '= ' + '"' +event.target.value + '"');
//             // passColor = event.target.value;
//             updateYarn(whatColor, eval('storecolor' + whatColor));
//         });
// }); 
// }

// function updateYarn(whatColor, passColor) { 
//     whatBall = $('.ball').get(whatColor - 1);
//     $(whatBall).css({fill: passColor});
// }

// const selectElement = document.querySelector('#color');
// selectElement.addEventListener('change', (event) => {
//  console.log(event.target.value); 
// });

// const swatch1 = document.querySelector('#color1');

// swatch1.addEventListener('change', (event) => {
//  console.log(event.target.value); 
// });

