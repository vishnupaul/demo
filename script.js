$(".submit-btn").click(function (e) {
  var roll = $("#roll").val();
  var name = $("#name").val();
  var marks = $("#marks").val();
  e.preventDefault();
  if (roll === "" || name === "" || marks === "") {
    alert("Please fill all the fields");
  } else {
    let text =
      "<li>Roll no - <span>" +
      roll +
      "</span>. <span>" +
      name +
      "</span> has scored <span>" +
      marks +
      "</span> marks.</li>";
    $("ul").append(text);
    $("#roll").val("");
    $("#name").val("");
    $("#marks").val("");
  }
});
