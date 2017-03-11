function draw() {
  var c = document.getElementById("mycanvas");
  var ctx = c.getContext("2d");
  var textBox = document.getElementById("myText");
  var text = textBox.value;
  ctx.font = "30px Arial";
  ctx.fillText(text,10,30);
}
