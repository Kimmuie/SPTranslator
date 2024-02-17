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

var sp = "braille"
var SP = "Braille"

var brailleMap = {
  'a': '⠠⠁', 'b': '⠠⠃', 'c': '⠠⠉', 'd': '⠠⠙', 'e': '⠠⠑', 'f': '⠠⠋', 'g': '⠠⠛', 'h': '⠠⠓',
  'i': '⠠⠊', 'j': '⠠⠚', 'k': '⠠⠅', 'l': '⠠⠇', 'm': '⠠⠍', 'n': '⠠⠝', 'o': '⠠⠕', 'p': '⠠⠏',
  'q': '⠠⠟', 'r': '⠠⠗', 's': '⠠⠎', 't': '⠠⠞', 'u': '⠠⠥', 'v': '⠠⠧', 'w': '⠠⠺', 'x': '⠠⠭',
  'y': '⠠⠽', 'z': '⠠⠵',
  '0': '⠠⠼⠚', '1': '⠠⠼⠁', '2': '⠠⠼⠃', '3': '⠠⠼⠉', '4': '⠠⠼⠙', '5': '⠠⠼⠑',
  '6': '⠠⠼⠋', '7': '⠠⠼⠛', '8': '⠠⠼⠓', '9': '⠠⠼⠊',
  '.': '⠲', ',': '⠂', '?': '⠦', '\'': '⠄', '!': '⠖', '/': '⠸⠌', '(': '⠸⠢', ')': '⠸⠣',
  '&': '⠯', ':': '⠒', ';': '⠆', '=': '⠐⠅', '+': '⠖', '-': '⠤⠤', '_': '⠤⠄', '"': '⠦',
  '$': '⠈⠥', '@': '⠈⠢'
};

document.getElementById('textinput').addEventListener('input', function() {
  var text = this.value.toLowerCase();
  var braille = textToBraille(text);
  document.getElementById('spinput').value = braille;
});

function textToBraille(text) {
  var braille = '';
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (brailleMap[char]) {
      braille += brailleMap[char] + ' ';
    } else {
      braille += '⠀'; // Use Braille space if character not found
    }
  }
  return braille.trim();
}


document.getElementById("swap").addEventListener("click", function () {
  if(document.getElementById("leftaside").contains(document.getElementById("textinput"))){
    swapfirst()
    document.getElementById('spinput').addEventListener('input', function() {
  var braille = this.value;
  var text = brailleToText(braille);
  document.getElementById('textinput').value = text;
});

document.getElementById('spinput').addEventListener('input', function() {
  var braille = this.value;
  var text = brailleToText(braille);
  document.getElementById('textoutput').value = text;
});

var brailleToTextMap = {
  '⠁': 'a', '⠃': 'b', '⠉': 'c', '⠙': 'd', '⠑': 'e', '⠋': 'f', '⠛': 'g', '⠓': 'h',
  '⠊': 'i', '⠚': 'j', '⠅': 'k', '⠇': 'l', '⠍': 'm', '⠝': 'n', '⠕': 'o', '⠏': 'p',
  '⠟': 'q', '⠗': 'r', '⠎': 's', '⠞': 't', '⠥': 'u', '⠧': 'v', '⠺': 'w', '⠭': 'x',
  '⠽': 'y', '⠵': 'z',
  '⠼⠚': '0', '⠼⠁': '1', '⠼⠃': '2', '⠼⠉': '3', '⠼⠙': '4', '⠼⠑': '5',
  '⠼⠋': '6', '⠼⠛': '7', '⠼⠓': '8', '⠼⠊': '9',
  '⠲': '.', '⠂': ',', '⠦': '?', '⠄': '\'', '⠖': '!', '⠸⠌': '/', '⠸⠢': '(', '⠸⠣': ')',
  '⠯': '&', '⠒': ':', '⠆': ';', '⠐⠅': '=', '⠖': '+', '⠤⠤': '-', '⠤⠄': '_', '⠦': '"',
  '⠈⠥': '$', '⠈⠢': '@'
};

function brailleToText(braille) {
  var text = '';
  var brailleChars = braille.split(/\s+/);
  for (var i = 0; i < brailleChars.length; i++) {
    var char = brailleChars[i];
    if (brailleToTextMap[char]) {
      text += brailleToTextMap[char];
    } else {
      text += ' '; // Add space if Braille character not found
    }
  }
  return text;
}
  copyanddelete()
  }
  else {
      swaplast()
      document.getElementById('textinput').addEventListener('input', function() {
        var text = this.value.toLowerCase();
        var braille = textToBraille(text);
        document.getElementById('spinput').value = braille;
      });
      
      function textToBraille(text) {
        var braille = '';
        for (var i = 0; i < text.length; i++) {
          var char = text[i];
          if (brailleMap[char]) {
            braille += brailleMap[char] + ' ';
          } else {
            braille += '⠀'; // Use Braille space if character not found
          }
        }
        return braille.trim();
      }
      copyanddelete()      
  }
})