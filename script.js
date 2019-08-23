$(document).ready(function() {
  //Add block with random collor and clear input
  $("#Add").click(function() {
    event.preventDefault();
    const item = $("#myInput").val();
    if (item) {
      const back = ["red", "blue", "aqua", "yellow", "purple", "pink"];
      const rand = back[Math.floor(Math.random() * back.length)];
      $("#list-items").append(
        `<div class='div ${rand}'><input class='checkbox' type='checkbox'/> <span></span> ${item}</div>`
      );
      $("#myInput").val("");
    }
  });
});

//Button for change color all checked blocks
$(".colorbt").on("click", function() {
  event.preventDefault();
  const color = $(this).attr(`id`);
  console.log(`its color ${color}`);
  if ($(".checkbox").is(":checked")) {
    $(":checked")
      .parent()
      .css("background", color);
  }
});
