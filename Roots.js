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

copyanddelete()

function copyanddelete(){
  //TEXT
document.getElementById("copybuttontext").addEventListener("click", function () {
  console.log("Copy text");
  var textToCopy = document.getElementById("textinput").value;

    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    if(document.getElementById("textinput").value === ""){
      showNotification("There no text to copy❐");
    }else{
      showNotification("Text copied❐");
    }

  document.getElementById("copybuttontext").innerHTML = `<span class="copyfloatout">❐ Copy</span>❐ Copy`;
  setTimeout(function (){
    document.getElementById("copybuttontext").innerHTML = `❐ Copy`;
  },1200);
});  

document.getElementById("deletebuttontext").addEventListener("click", function () {
  if(document.getElementById("textinput").value === ""){
    showNotification("There no text to delete✗");
  }else{
    document.getElementById("textinput").value = "";
    showNotification("Text cleared✗");
  }
});

//BINARY
document.getElementById("copybuttonsp").addEventListener("click", function () {
  console.log("Copy " + sp);
  var textToCopy = document.getElementById("spinput").value;
  
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
  
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    if(document.getElementById("spinput").value === ""){
      showNotification("There no " + sp + " to copy❐");
    }else{
      showNotification(SP + " copied❐");
    }
  
  document.getElementById("copybuttonsp").innerHTML = `<span class="copyfloatout">❐ Copy</span>❐ Copy`;
  setTimeout(function (){
    document.getElementById("copybuttonsp").innerHTML = `❐ Copy`;
  },1200);
  });  
  
  document.getElementById("deletebuttonsp").addEventListener("click", function () {
  if(document.getElementById("spinput").value === ""){
    showNotification("There no " + sp + " to delete✗");
  }else{
    document.getElementById("spinput").value = "";
    showNotification(SP + " cleared✗");
  }
  });
  }

function showNotification(message) {
  var notification = document.getElementById("notification");
  notification.innerHTML = message;
  notification.style.display = "block";

  setTimeout(function () {
    notification.style.display = "none";
  }, 700);
}

function swapfirst(){
    console.log(SP + " To Text")
  document.getElementById("leftaside").innerHTML = `
  <span class="inputheader">` + SP + `</span>
  <textarea class="input" id="spinput" rows="25" placeholder="` + SP + `input ..."></textarea>
  <div class="buttons">
    <button class="copydeletebutton" id="copybuttonsp">❐ Copy </button>
    <button class="copydeletebutton DBB" id="deletebuttonsp">✗ Delete All</button>
  </div>`

  
  document.getElementById("rightaside").innerHTML = `
  <span class="inputheader">Text</span>
  <textarea class="input" id="textinput" rows="25" placeholder="Text output ..." readonly></textarea>
    <div class="buttons">
      <button class="copydeletebutton" id="copybuttontext">❐ Copy</button>
      <button class="copydeletebutton DBT" id="deletebuttontext">✗ Delete All</button>
    </div>`
    setStyles("DBB", {visibility:"visible"});
    setStyles("DBT", {visibility:"hidden"});
}

function swaplast(){
    console.log("Text To " + SP)
    document.getElementById("leftaside").innerHTML = `
    <span class="inputheader">Text</span>
    <textarea class="input" id="textinput" rows="25" placeholder="Text input ..."></textarea>
      <div class="buttons">
        <button class="copydeletebutton" id="copybuttontext">❐ Copy</button>
        <button class="copydeletebutton DBT" id="deletebuttontext">✗ Delete All</button>
      </div>`
  
    document.getElementById("rightaside").innerHTML = `
    <span class="inputheader">` + SP + `</span>
    <textarea class="input" id="spinput" rows="25" placeholder="` + SP + ` output ..." readonly></textarea>
    <div class="buttons">
      <button class="copydeletebutton" id="copybuttonsp">❐ Copy </button>
      <button class="copydeletebutton DBB" id="deletebuttonsp">✗ Delete All</button>
    </div>`
      setStyles("DBB", {visibility:"hidden"});
      setStyles("DBT", {visibility:"visible"});
}

function updateLayout() {
    console.log("updatelayout");
    if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
      setProperty("logo", {"--img": "8dvh","--marginL": "1dvh","--marginR": "1dvh"});
      setProperty("logotext", {"--fontS": "1.75dvh"});
      setProperty("headertext", {"--fontS": "1.5dvh","--marginR": "1.5dvh"});
      setProperty("viewSource", {"--fontS": "1.5dvh","--marginR": "1.5dvh"});
      setProperty("viewSourceimg", {"--img": "3.5dvh"});
      setProperty("dropdown-content", {"--width": "15dvh","--marginT": "15dvh","--fontS": "1.75dvh"});
      setProperty("dropdownimg", {"--height": "3.75dvh","--marginL": "-4.5dvh","--padding": ".25dvh"});
      setProperty("QRcode", {"--img": "12dvh","--marginT": "15dvh","--marginL": "27dvh"});
      setProperty("copydeletebutton", {"--fontS": "1.8dvh"});
    } else if (window.matchMedia("(max-width: 1400px) and (orientation: landscape)").matches) {
      setProperty("logo", {"--img": "10dvh","--marginL": "2dvh","--marginR": "1dvh"});
      setProperty("logotext", {"--fontS": "2.5dvh"});
      setProperty("headertext", {"--fontS": "2.5dvh","--marginR": "5dvh"});
      setProperty("viewSource", {"--fontS": "2dvh","--marginR": "3dvh"});
      setProperty("viewSourceimg", {"--img": "4dvh"});
      setProperty("dropdown-content", {"--width": "20dvh","--marginT": "20dvh","--fontS": "2.3dvh"});
      setProperty("dropdownimg", {"--height": "4.75dvh","--marginL": "-5.5dvh","--padding": ".5dvh"});
      setProperty("QRcode", {"--img": "14dvh","--marginT": "20dvh","--marginL": "34dvh"});
      setProperty("copydeletebutton", {"--fontS": "2.2dvh"});
    }     
    
    if (window.matchMedia("(max-width: 1000px) and (orientation: landscape)").matches || (window.matchMedia("(max-height: 1000px) and (orientation: portrait)").matches)){
      document.getElementsByClassName("logotext")[0].innerHTML = SP + "<br>Translator";
      document.getElementsByClassName("DDTruemoney")[0].href = "https://tmn.app.link/i2oMlve54Gb";
      document.getElementsByClassName("DDTruemoney")[0].target ="_blank";
      document.getElementsByClassName("viewSource")[0].innerHTML = "<img class=viewSourceimg src=./image/1Github2.png>";
      setProperty("viewSourceimg", {"--marginR": "0dvh"});
      setProperty("logo", {"--marginL": "1dvh","--marginR": ".5dvh"});
      if(window.matchMedia("(max-width: 1000px) and (orientation: landscape)").matches){
        document.getElementsByClassName("logotext")[0].innerHTML = SP + "&nbsp;Translator";
        document.getElementsByClassName("viewSource")[0].innerHTML = "<img class=viewSourceimg src=./image/1Github2.png>View Source";
      }
    }else{
      document.getElementsByClassName("logotext")[0].innerHTML = SP + "&nbsp;Translator";
      document.getElementsByClassName("DDTruemoney")[0].href = "#";
      document.getElementsByClassName("DDTruemoney")[0].target ="";
      document.getElementsByClassName("viewSource")[0].innerHTML = "<img class=viewSourceimg src=./image/1Github2.png>View Source";
      setProperty("viewSourceimg", {"--marginR": "3.5dvh"});
      setProperty("logo", {"--marginL": "1dvh","--marginR": "1dvh"});
    }
  }
  updateLayout();
  setInterval(updateLayout, 30000);
  
  window.addEventListener("resize", function () {
  updateLayout();
  });
  
  document.getElementsByClassName("DDTruemoney")[0].addEventListener("click", function () {
    var items = document.getElementsByClassName("QRcode");
    
    for (var i = 0; i < items.length; i++) {
      if (items[i].style.display === "none" || items[i].style.display === "") {
        console.log("Popdown TruemoneyQRCODE");
        items[i].style.animation = "pop-down 1s ease-in-out";
        items[i].style.display = "block";
        items[i].src = "./image/1TMQRcode.jpg";
        items[i].classList.replace('noqrcode', 'Truemoney');
        downQR(items[i]);
      } else if (items[i].classList.contains("Promptpay")) {
          console.log("Popover PromptpayQRCODE(rapid)");
          items[i].style.animation = "pop-over 0.1s ease-in-out";
          items[i].classList.replace('Promptpay', 'Truemoney');
          items[i].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
            console.log("Popdown TruemoneyQRCODE");
            this.style.animation = "pop-down 1s ease-in-out";
            this.style.display = "block";
            this.src = "./image/1TMQRcode.jpg";
            downQR(items[i]);
          });
      }else {
        for (let i = 0; i < items.length; i++) {
          console.log("Popover TruemoneyQRCODE");
          items[i].style.animation = "pop-over 0.5s ease-in-out";
          items[i].classList.replace('Truemoney', 'noqrcode');
          items[i].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);  
            this.src = "";
          });
        }
      }
    }
  });
  
  document.getElementsByClassName("DDPromptpay")[0].addEventListener("click", function () {
    var items = document.getElementsByClassName("QRcode");
    
    for (var i = 0; i < items.length; i++) {
      if (items[i].style.display === "none" || items[i].style.display === "") {
        console.log("Popdown PromptpayQRCODE");
        items[i].style.animation = "pop-down 1s ease-in-out";
        items[i].style.display = "block";
        items[i].src = "./image/1PMQRcode.jpg";
        items[i].classList.replace('noqrcode', 'Promptpay');
        downQR(items[i]);
      } else if (items[i].classList.contains("Truemoney")) {
        console.log("Popover TruemoneyQRCODE(rapid)");
        items[i].style.animation = "pop-over 0.1s ease-in-out";
        items[i].classList.replace('Truemoney','Promptpay' );
        items[i].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
          console.log("Popdown PromptpayQRCODE");
          this.style.animation = "pop-down 1s ease-in-out";
          this.style.display = "block";
          this.src = "./image/1PMQRcode.jpg";
          downQR(items[i]);
        });
      }else {
        for (let i = 0; i < items.length; i++) {
          console.log("Popover TruemoneyQRCODE");
          items[i].style.animation = "pop-over 0.5s ease-in-out";
          items[i].classList.replace('Truemoney', 'noqrcode');
          items[i].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);  
            this.src = "";
          });
        }
      }
    }
  });
  
  function downQR(item){
    item.addEventListener("animationend", function() {
      this.style.animation = "none";
      if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches){
        this.style.marginLeft = "27dvh";
      }else{
        this.style.marginLeft = "34dvh";
      }
    });
  }
  document.querySelector('.dropdown').addEventListener('mouseleave', function() {
    var items = document.getElementsByClassName("QRcode");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
      items[i].classList.replace('Truemoney','noqrcode');
      items[i].classList.replace('Promptpay','noqrcode');
    }
  });