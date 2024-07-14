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

  var sp = "morse"
  var SP = "Morse"

var morseCodeMap = {
  'A': '•-', 'B': '-•••', 'C': '-•-•', 'D': '-••', 'E': '•', 'F': '••-•', 'G': '--•', 'H': '••••',
  'I': '••', 'J': '•---', 'K': '-•-', 'L': '•-••', 'M': '--', 'N': '-•', 'O': '---', 'P': '•--•',
  'Q': '--•-', 'R': '•-•', 'S': '•••', 'T': '-', 'U': '••-', 'V': '•••-', 'W': '•--', 'X': '-••-',
  'Y': '-•--', 'Z': '--••',
  '0': '-----', '1': '•----', '2': '••---', '3': '•••--', '4': '••••-', '5': '•••••',
  '6': '-••••', '7': '--•••', '8': '---••', '9': '----•',
  '.': '•-•-•-', ',': '--••--', '?': '••--••', '\'': '•----•', '!': '-•-•--', '/': '-••-•', '(': '-•--•',
  ')': '-•--•-', '&': '•-•-•', ':': '---•••', ';': '-•-•-•', '=': '-•••-', '+': '•-•-•', '-': '-••••-',
  '_': '••--•-', '"': '•-••-•', '$': '•••-••-', '@': '•--•-•', ' ': '/'
};


document.getElementById('textinput').addEventListener('input', function() {
  var text = this.value.toUpperCase();
  var morse = textToMorse(text);
  document.getElementById('spinput').value = morse;
});

function textToMorse(text) {
  var morse = '';
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (morseCodeMap[char]) {
      morse += morseCodeMap[char] + '   ';
    } else {
      morse += '/ '; // Use / to represent unknown characters
    }
  }
  return morse.trim();
}



document.getElementById("swap").addEventListener("click", function () {
  if(document.getElementById("leftaside").contains(document.getElementById("textinput"))){
    swapfirst()
    document.getElementById('spinput').addEventListener('input', function() {
  var morse = this.value;
  var text = morseToText(morse);
  document.getElementById('textinput').value = text;
});

document.getElementById('spinput').addEventListener('input', function() {
  var morse = this.value;
  var text = morseToText(morse);
  document.getElementById('textoutput').value = text;
});

var morseCodeToCharMap = {
    '._': 'A','•_': 'A','.-': 'A','•-': 'A',
    '_...': 'B','_•••': 'B','-...': 'B','-•••': 'B',
    '_._.': 'C','_•_•': 'C','-.-.': 'C','-•-•': 'C',
    '_..': 'D', '_••': 'D', '-..': 'D', '-••': 'D', 
    '.': 'E', '•': 'E',
    '.._.': 'F', '••_•': 'F', '..-.': 'F', '••-•': 'F', 
    '__.': 'G', '__•': 'G', '--.': 'G', '--•': 'G', 
    '....': 'H','••••': 'H',
    '..': 'I', '••': 'I',
    '.___': 'J', '•___': 'J', '.---': 'J', '•---': 'J', 
    '_._': 'K', '_•_': 'K', '-.-': 'K', '-•-': 'K', 
    '._..': 'L', '•_••': 'L', '.-..': 'L', '•-••': 'L', 
    '__': 'M', '--': 'M',
    '_.': 'N', '_•': 'N', '-.': 'N', '-•': 'N', 
    '___': 'O', '---': 'O',
    '.__.': 'P','•__•': 'P','.--.': 'P','•--•': 'P',
    '__._': 'Q', '__•_': 'Q', '--.-': 'Q', '--•-': 'Q', 
    '._.': 'R', '•_•': 'R', '.-.': 'R', '•-•': 'R', 
    '...': 'S', '•••': 'S',
    '_': 'T', '-': 'T',
    '.._': 'U', '••_': 'U', '..-': 'U', '••-': 'U', 
    '..._': 'V', '•••_': 'V', '...-': 'V', '•••-': 'V', 
    '.__': 'W', '•__': 'W', '.--': 'W', '•--': 'W', 
    '_.._': 'X','_••_': 'X','-..-': 'X','-••-': 'X',
    '_.__': 'Y', '_•__': 'Y', '-.--': 'Y', '-•--': 'Y', 
    '__..': 'Z','__••': 'Z','--..': 'Z','--••': 'Z',
    '_____': '0', '-----': '0',
    '.____': '1', '•____': '1', '.----': '1', '•----': '1', 
    '..___': '2', '••___': '2', '..---': '2', '••---': '2', 
    '...__': '3', '•••__': '3', '...--': '3', '•••--': '3', 
    '...._': '4', '••••_': '4', '....-': '4', '••••-': '4', 
    '.....': '5','•••••': '5',
    '_....': '6', '_••••': '6', '-....': '6', '-••••': '6', 
    '__...': '7', '__•••': '7', '--...': '7', '--•••': '7', 
    '___..': '8', '___••': '8', '---..': '8', '---••': '8', 
    '____.': '9','____•': '9','----.': '9','----•': '9',
    '._._._': '.', '•_•_•_': '.', '.-.-.-': '.', '•-•-•-': '.', 
    '__..__': ',', '__••__': ',', '--..--': ',', '--••--': ',', 
    '..__..': '?', '••__••': '?', '..--..': '?', '••--••': '?', 
    '.____.': '\'', '•____•': '\'', '.----.': '\'', '•----•': '\'', 
    '_._.__': '!', '_•_•__': '!', '-.-.--': '!', '-•-•--': '!', 
    '_.._.': '/', '_••_•': '/', '-..-.': '/', '-••-•': '/', 
    '_.__.': '(','_•__•': '(','-.--.': '(','-•--•': '(',
    '_.__._': ')', '_•__•_': ')', '-.--.-': ')', '-•--•-': ')', 
    '._._.': '&', '•_•_•': '&', '.-.-.': '&', '•-•-•': '&', 
    '___...': ':', '___•••': ':', '---...': ':', '---•••': ':', 
    '_._._.': ';', '_•_•_•': ';', '-.-.-.': ';', '-•-•-•': ';', 
    '_..._': '=', '_•••_': '=', '-...-': '=', '-•••-': '=', 
    '._._.': '+', '•_•_•': '+', '.-.-.': '+', '•-•-•': '+', 
    '_...._': '_','_••••_': '_','-....-': '-','-••••-': '-',
    '..__._': '_', '••__•_': '_', '..--.-': '_', '••--•-': '_', 
    '._.._.': '"', '•_••_•': '"', '.-..-.': '"', '•-••-•': '"', 
    '..._.._': '$', '•••_••_': '$', '...-..-': '$', '•••-••-': '$', 
    '.__._.': '@', '•__•_•': '@', '.--.-.': '@', '•--•-•': '@', 
    '/': ' '
};

function morseToText(morse) {
  var words = morse.split('/');
  var result = ' ';
  for (var i = 0; i < words.length; i++) {
    var word = words[i].trim();
    if (word === ' ') continue;
    var characters = word.split(/\s+/);
    for (var j = 0; j < characters.length; j++) {
      var character = characters[j];
      if (morseCodeToCharMap[character]) {
        result += morseCodeToCharMap[character];
      } else {
        result += '?'; // Use ? to represent unknown Morse code sequences
      }
    }
    result += ' ';
  }
  return result.trim();
  }
  copyanddelete()
  }
  else {
    swaplast()
      document.getElementById('textinput').addEventListener('input', function() {
        var text = this.value.toUpperCase();
        var morse = textToMorse(text);
        document.getElementById('spinput').value = morse;
      });
      
      function textToMorse(text) {
        var morse = '';
        for (var i = 0; i < text.length; i++) {
          var char = text[i];
          if (morseCodeMap[char]) {
            morse += morseCodeMap[char] + '   ';
          } else {
            morse += '/ '; // Use / to represent unknown characters
          }
        }
        return morse.trim();
      }
      copyanddelete()      
  }
})

if (window.matchMedia("(max-height: 1400px)").matches) {
  var dotSound = new Audio("audioShort2.mp3");
  var dashSound = new Audio("audioLong2.mp3");
}else{
  var dotSound = new Audio("audioShort.mp3");
  var dashSound = new Audio("audioLong.mp3");
}

var currentTimeouts = [];

document.getElementById("deletebuttonsp").addEventListener("click", function () {
  var morse = document.getElementById('spinput').value;
    playMorseCode(morse);
});

document.getElementById('spinput').addEventListener('input', function () {
  var morse = this.value;
  var text = morseToText(morse);
  document.getElementById('textoutput').value = text;
});

function playMorseCode(morse) {
  dotSound.pause();
  dashSound.pause();
  dotSound.currentTime = 0;
  dashSound.currentTime = 0;

  currentTimeouts.forEach(clearTimeout);
  currentTimeouts = [];
    

if (window.matchMedia("(max-height: 1400px)").matches) {
    var unitTime = 300;
  }else{
    var unitTime = 200;
  }
  var currentTime = 0;

  function playSound(audio, delay) {
    var timeout = setTimeout(function () {
      audio.play();
    }, delay);
    currentTimeouts.push(timeout);
  }
  
  for (var i = 0; i < morse.length; i++) {
    var symbol = morse[i];
    if (symbol === '.' || symbol === '•') {
      playSound(dotSound, currentTime);
      currentTime += unitTime;
    } else if (symbol === '-' || symbol === '_') {
      playSound(dashSound, currentTime);
      currentTime += unitTime;
    } else if (symbol === ' ') {
      currentTime += unitTime + 5; 
    } else if (symbol === '/') {
      currentTime += unitTime + 15;
    }
    currentTime += unitTime;
  }
}
