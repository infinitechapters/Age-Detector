let date= document.getElementById("date");
date.max= new Date().toISOString().split("T")[0];
let result= document.getElementById("result");
let b1=document.getElementsById("b1");
let b2=document.getElementsById("b2");
let b3=document.getElementsById("b3");

function calculateAge(){
let birthDate= new Date(date.value);
let currentDate= new Date();

let d1= birthDate.getDate();
let m1= birthDate.getMonth()+1;
let y1= birthDate.getFullYear();

let d2= currentDate.getDate();
let m2= currentDate.getMonth() +1;
let y2= currentDate.getFullYear();

let d3,m3, y3;
 y3=y2-y1;

  if(m2>=m1){
    m3=m2-m1;
  }else{
    y3--;
    m3=12+m2-m1;
  };

if(d2>=d1){
    d3=d2-d1;
}else{
    m3--;
    d3=daysMonth(y1,y2)+d1-d2;
}
if(m3<0){
    y--;
    m3=11;
}
 result.innerHTML=`The age of user is ${y3} years ${m3} months and ${d3} days`;
//  b1.innerHTML=`${y3}`
//  b2.innerHTML=`${m3}Months`
//  b3.innerHTML=`${d3}Days`
}
function daysMonth(year,month){
  return new Date(year, month,0).getDate();
}