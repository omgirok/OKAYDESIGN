console.log("hello world");

function addPop() {
  var pics = document.getElementsByTagName('img');

  for (var i = 0; i < pics.length; i++) {
    var image = pics[i];
    image.setAttribute("onclick", "return popUp(this);");
    console.log("orion");
  }
}


function popUp(elmt) {
  elmt.style.width = "400px";
  elmt.style.height = "500px";
}

window.onload = addPop;
