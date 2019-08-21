function newElement() {
    var div = document.createElement("div");
    var inp = document.createElement("input");
    inp.type="checkbox";
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    div.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("dv").appendChild(inp);
      document.getElementById("dv").appendChild(div);
    }
    document.getElementById("myInput").value = "";
  
   /* var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    div.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    } */
  }