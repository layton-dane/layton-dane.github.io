function testParseJSON() {
  var json = document.getElementById("jsonDemo").innerHTML;
  var myobj = JSON.parse(json);
  document.getElementById("parseDemo").innerHTML = myobj.JSONKey;
  var btn = document.getElementById("stringifyBtn");
  btn.disabled = false;
}

function testStringify() {
  var myobj = document.getElementById("parseDemo").innerHTML;
  myobj = '{ JSONKey : ' + myobj + '}';
  var json = JSON.stringify(myobj);
  document.getElementById("stringifyDemo").innerHTML = json;
}
