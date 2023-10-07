function honey(){
let h =document.getElementById('height').value; 
let w =document.getElementById('weight').value;
let bmi=w/(h/100*h/100);
let res=bmi  
document.getElementById('btn1').innerHTML="YOUR BMI IS " + res
}