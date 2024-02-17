function setStyles(selector, styles) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      Object.assign(elements[i].style, styles);
    }
  }

function setProperty(selector, styles) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      var style = elements[i].style;
      for (var property in styles) {
        style.setProperty(property, styles[property]);
      }
    }
  }
  
function setInnerHTML(selector, innerHTML) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = innerHTML;
    }
  }
  
  
function setImage(selector, src) {
    var elements = document.getElementsByClassName(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].src = src;
    }
  }


var sp = "binary"
var SP = "Binary"

document.getElementById('textinput').addEventListener('input', function() {
  var text = this.value;
  var binary = textToBinary(text);
  document.getElementById('spinput').value = binary;
});

function textToBinary(text) {
  var binary = '';
  for (var i = 0; i < text.length; i++) {
      var bin = text[i].charCodeAt(0).toString(2);
      binary += '0'.repeat(8 - bin.length) + bin + ' ';
  }
  return binary.trim();
}

document.getElementById("swap").addEventListener("click", function () {
  if(document.getElementById("leftaside").contains(document.getElementById("textinput"))){
  swapfirst()
  document.getElementById('spinput').addEventListener('input', function() {
  var binary = this.value;
  var text = binaryToText(binary);
  document.getElementById('textinput').value = text;
});

function binaryToText(binary) {
  var text = '';
  var binaryArray = binary.split(/\s+/);
  for (var i = 0; i < binaryArray.length; i++) {
      var bin = binaryArray[i];
      if (bin !== '') {
          text += String.fromCharCode(parseInt(bin, 2));
      }
  }
  return text;
  }
  copyanddelete()
  }
  else {
    swaplast()
    document.getElementById('textinput').addEventListener('input', function() {
        var text = this.value;
        var binary = textToBinary(text);
        document.getElementById('spinput').value = binary;
      });
      
      function textToBinary(text) {
        var binary = '';
        for (var i = 0; i < text.length; i++) {
            var bin = text[i].charCodeAt(0).toString(2);
            binary += '0'.repeat(8 - bin.length) + bin + ' ';
        }
        return binary.trim();
      }
      copyanddelete()      
  }
})
