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

// Delete Below
function update() {
    var r1 = Number(document.getElementById("r1").value);
    var g1 = Number(document.getElementById("g1").value);
    var b1 = Number(document.getElementById("b1").value);
    var r2 = Number(document.getElementById("r2").value);
    var g2 = Number(document.getElementById("g2").value);
    var b2 = Number(document.getElementById("b2").value);
    var a = Number(document.getElementById("a").value);
    var size = Number(document.getElementById("size").value);
    var angle1 = Number(document.getElementById("angle1").value);
    var rs = Math.round((r1+r2)*0.5);
    var gs = Math.round((g1+g2)*0.5);
    var bs = Math.round((b1+b2)*0.5);
  
  var sheet = document.styleSheets[0];
  var rules = sheet.cssRules;
    
    
  document.getElementById("gradient").style.background = "linear-gradient(" + angle1 + "deg, rgba(" + r1 + "," + g1 + "," + b1 + ",1) 0%, rgba(" + r2 + "," + g2 + "," + b2 + ",1) 100%)";
   document.getElementById("stripe").style.background = "linear-gradient(45deg, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 25%, transparent 25%, transparent 50%, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 50%, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 75%, transparent 75%, transparent 100%), linear-gradient(-45deg, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 25%, transparent 25%, transparent 50%, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 50%, rgba(" + rs + "," + gs + "," + bs + "," + a + ") 75%, transparent 75%, transparent 100%)";
  
    document.getElementById("stripe").style.backgroundSize = size + "vw " + size + "vw";
  document.getElementById("result").innerHTML = ".parent {\n background: linear-gradient(" + angle1 + "deg,\n rgba(" + r1 + "," + g1 + "," + b1 + ",1) 0%,\n rgba(" + r2 + "," + g2 + "," + b2 + ",1) 100%);\n}\n.child {\n background: linear-gradient(45deg, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 25%, \ntransparent 25%, transparent 50%, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 50%, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 75%, \ntransparent 75%, transparent 100%), \nlinear-gradient(-45deg, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 25%, \ntransparent 25%, transparent 50%, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 50%, \nrgba(" + rs + "," + gs + "," + bs + "," + a + ") 75%, \ntransparent 75%, transparent 100%);\nbackground-size: " + size + "vw " + size + "vw;\n}"; 
    
  }
  var isHidden = false;
  document.onkeyup  = function(e)
  {
    var pressedKey = event.key;
    
    if(pressedKey == "h") {
      isHidden = !(isHidden);
  
    }
    if(isHidden == true) {
      
      var elements = document.getElementsByClassName("hide");
      for(var i = 0, l = elements.length; i < l; i++){
        elements[i].style.visibility = "hidden";
      }  
    }
    if(isHidden == false) {
      
      var elements = document.getElementsByClassName("hide");
      for(var i = 0, l = elements.length; i < l; i++){
        elements[i].style.visibility = "visible";
      }  
    
  }
  }