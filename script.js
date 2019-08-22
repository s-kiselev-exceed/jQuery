
$(document).ready(function(){

  //Add block

  $('#Add').click(function() 
  {
    event.preventDefault();
    var item = $('#myInput').val();
  
      if(item) {

        let back = ['red','blue','aqua','yellow','purple' ,'pink'];
        let rand = back[Math.floor(Math.random() * back.length)];

        $('#list-items').append(`<div class='div ${rand}'><input class='checkbox' type='checkbox'/> ${item}</div>`);
        $('#myInput').val("");
     
      //  $(this).css('background',rand);
      }
    });

    //Setup default color for checked block

    $("body").on("change",".checkbox", function() {
      $(this).toggleClass("clicked");
    });
});

//   random colors
$("body").ready(function () {
  var back = ['red','blue','aqua','yellow','purple' ,'pink'];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('.div').parent().css('background',rand);
})

    //buttons for change color all blocks 

  $("#bt1").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","red");
     }); 

  $("#bt2").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","pink");
     }); 

  $("#bt3").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","purple");
     }); 
    
  $("#bt4").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","blue");
     }); 
    
  $("#bt5").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","aqua");
     }); 

  $("#bt6").on("click",function(){
      event.preventDefault();
      $(":checkbox").parent().css("background","yellow");
     }); 












/* function newElement() {
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
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    div.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    } 
  } */
  