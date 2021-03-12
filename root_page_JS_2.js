
function myFunction() {
myFunction("http://192.168.1.107/");
delay(2);
myFunction("http://192.168.1.107/");
delay(2);
myFunction("http://192.168.1.107/");
}


function myFunction(ip) {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     return this.responseText;
    }
  };
    
  xhttp.open("GET", ip, true);
  xhttp.send();

}


var valueTest=10;
function temperature() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest=this.responseText;
  }};
  xhttp.open('GET', '/temperature', true);
  xhttp.send();
  return valueTest;
  };
  
  
 var valueTest_1=10;
function gas() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest_1=this.responseText;}};
  xhttp.open('GET', '/gas', true);
  xhttp.send();
  return valueTest_1;
};

 var valueTest_2=10;
function humidity() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest_2=this.responseText;}};
  xhttp.open('GET', '/humidity', true);
  xhttp.send();
  return valueTest_2;
};

 var valueTest_3;
function motion() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(parseFloat(this.responseText));
      valueTest_3=this.responseText;}};
  xhttp.open('GET', '/motion', true);
  xhttp.send();
  return valueTest_3;
};




setInterval(function ( ) {
    document.getElementById("temperature").innerHTML = temperature();
    document.getElementById("humidity").innerHTML = humidity();
    document.getElementById("gas").innerHTML = gas();
    document.getElementById("motion").innerHTML = motion();
}, 10000 ) ;
