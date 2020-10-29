function typeWriter(i,txt,speed) {
  if (i < txt.length) {
    document.getElementById("userMSG").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed+Math.random()*50,i,txt,speed);
  }
}
window.onload=function(){
    typeWriter(0,"Welcome, I am ERR0N30US",50);
}