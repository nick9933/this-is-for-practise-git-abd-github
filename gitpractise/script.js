const input= document.getElementById("username");
const input2= document.getElementById("password");
const button= document.getElementById("login");
const heading= document.getElementById("heading");
const heading2= document.getElementById("heading2");

button.onclick=function(){
    heading.innerHTML = input.value;
    heading2.innerHTML = input2.value;


};
