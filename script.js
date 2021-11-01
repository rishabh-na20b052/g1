let n; n = prompt("Enter Player Name"); 
document.getElementById("pr").innerHTML= "Hello"+" "+ n +"!!";
let x=document.getElementById("boy"); let tt = document.getElementById("t");
document.getElementById("0").style.background=0;
document.getElementById("10").style.background=0;
document.getElementById("20").style.background=0;
document.getElementById("30").style.background=0;
document.getElementById("40").style.background=0;
document.getElementById("50").style.background=0;
document.getElementById("60").style.background=0;
document.getElementById("70").style.background=0;
document.getElementById("80").style.background=0;
document.getElementById("5").style.background=0;
document.getElementById("15").style.background=0;
document.getElementById("25").style.background=0;
document.getElementById("35").style.background=0;
document.getElementById("45").style.background=0;
document.getElementById("55").style.background=0;
document.getElementById("65").style.background=0;
document.getElementById("75").style.background=0;
document.getElementById("85").style.background=0;
let a=[ [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,0,1,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0],
        [0,1,0,0,0,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,1,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,0,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,1,1,1,0],
        [0,1,0,1,0,0],
        [0,0,1,0,0,0],
        [0,0,0,1,0,0],
        [0,1,0,0,1,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,1,1,0,0],
        [0,1,0,0,0,0],
        [0,1,0,0,1,0],
        [0,0,1,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0],
        [0,1,0,1,0,0],
        [0,0,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,0,0],
        [0,0,1,0,0,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,1,0,0],
        [0,0,0,1,0,0],
        [0,0,0,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,1,0],
        [0,1,0,0,0,0],
        [0,0,1,0,1,0],
        [0,0,0,1,0,0],
        [0,0,0,1,0,0],
        [0,1,1,0,0,0]];

function mfn(){
document.getElementById("1").style.background=(a[0][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("11").style.background=(a[1][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("21").style.background=(a[2][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("31").style.background=(a[3][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("41").style.background=(a[4][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("51").style.background=(a[5][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("61").style.background=(a[6][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("71").style.background=(a[7][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("81").style.background=(a[8][1]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");

document.getElementById("2").style.background=(a[0][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("12").style.background=(a[1][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("22").style.background=(a[2][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("32").style.background=(a[3][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("42").style.background=(a[4][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("52").style.background=(a[5][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("62").style.background=(a[6][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("72").style.background=(a[7][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("82").style.background=(a[8][2]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");

document.getElementById("3").style.background=(a[0][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("13").style.background=(a[1][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("23").style.background=(a[2][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("33").style.background=(a[3][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("43").style.background=(a[4][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("53").style.background=(a[5][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("63").style.background=(a[6][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("73").style.background=(a[7][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("83").style.background=(a[8][3]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");

document.getElementById("4").style.background=(a[0][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("14").style.background=(a[1][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("24").style.background=(a[2][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("34").style.background=(a[3][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("44").style.background=(a[4][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("54").style.background=(a[5][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("64").style.background=(a[6][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("74").style.background=(a[7][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
document.getElementById("84").style.background=(a[8][4]?"rgb(2, 255, 255)":"rgb(0, 0, 0)");
}
function bas() {
  setTimeout(() => {
    document.getElementById("start").setAttribute("onclick","location.reload()");
    document.getElementById("start").disabled=0;
    tt.style.display="none";
    x.style.height="45%";
    x.style.left="22%";
    x.style.boxShadow = "0 0 10vw red";
  }, 600);
  setTimeout(() => {
    if(confirm(n+" and Jojo scored "+(s-1)+". Click OK to retry.")==true)location.reload();
  }, 1800);
}
function tm0() {
  tt.style.top="0%";
  x.style.bottom="33.2%";
}
function tm1() {
  tt.style.top="0.4%";
  x.style.bottom="32.8%";
}
function tm2() {
  tt.style.top="0.8%";
  x.style.bottom="32.4%";
}
function tm3() {
  tt.style.top="1.2%";
  x.style.bottom="32%";
}
function tm4() {
  tt.style.top="1.6%";
  x.style.bottom="31.6%";
}
function tm5() {
  tt.style.top="2%";
  x.style.bottom="31.2%";
}
function tm6() {
  tt.style.top="2.4%";
  x.style.bottom="30.8%";
}
function tm7() {
  tt.style.top="2.8%";
  x.style.bottom="30.4%";
}
function tm8() {
  tt.style.top="3.2%";
  x.style.height="10.7%";
  x.style.bottom="30%";
}
function tm9() {
  i=0; x.setAttribute("src","ass/upl.png");
  tt.style.top="3.6%";
  x.style.bottom="30.6%";
  x.style.height ="11.4%";
}
function tm10() {
  tt.style.top="4%";
  x.style.bottom="31.2%";
  x.style.height="12.1%";
}
function tm11() {
  tt.style.top="4.4%";
  x.style.bottom="31.8%";
  x.style.height ="12.1%";
}
function tm12() {
  tt.style.top="4.8%";
  x.style.bottom="32.4%";
  x.style.height="12.8%";
  s++;
}
function tm13() {
  if(z>0) {i=1; x.setAttribute("src","ass/up2.png");}
  if(z<0) {i=-1; x.setAttribute("src","ass/up2l.png");}
  tt.style.top="5.2%";
  x.style.bottom="33%";
  x.style.height="13.5%";
  m=parseFloat(x.style.left);
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+2.8)+"%"; break;
      case -1:x.style.left=(m-2.8)+"%"; break;
      default: break;
    }
  }, 20);
}
function tm14() {
  tt.style.top="5.6%";
  x.style.bottom="33.6%";
  x.style.height="14.2%";
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+5.7)+"%"; break;
      case -1:x.style.left=(m-5.7)+"%"; break;
      default: break;
    }
  }, 20);
}
function tm15() {
  tt.style.top="6%";
  x.style.bottom="34.2%";
  x.style.height="13.5%";
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+8.5)+"%"; break;
      case -1:x.style.left=(m-8.5)+"%"; break;
      default: break;
    }
  }, 20);
}
function tm16() {
  tt.style.top="6.4%";
  x.style.bottom="34.8%";
  x.style.height="12.7%";
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+11.3)+"%"; break;
      case -1:x.style.left=(m-11.3)+"%"; break;
      default: break;
    }
  }, 20);
}
function tm17() {
  tt.style.top="6.8%";
  x.style.bottom="35.4%";
  x.style.height="11.6%";
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+14.2)+"%"; break;
      case -1:x.style.left=(m-14.2)+"%"; break;
      default: break;
    }
  }, 20);
}
function tm18() {
  tt.style.top="7.2%";
  x.style.bottom="36%";
  x.style.height="10%";
  z=0;
  setTimeout(() => {
    switch (i) {
      case 1:x.style.left=(m+17)+"%"; break;
      case -1:x.style.left=(m-17)+"%"; break;
      default: break;
    }
    y+=i;
  }, 20);
}
function tm19() {
  tt.style.top="7.6%";
  x.style.bottom="35.6%";
  if(a[6][y]==0) {x.setAttribute("src","ass/gd.png"); clearInterval(d);clearInterval(e);clearInterval(f); bas();}
  else if(i>0) x.setAttribute("src","ass/standing.png");
  else x.setAttribute("src","ass/standingl.png");
}
function tm20() {
  tt.style.top="8%";
  x.style.bottom="35.2%";
}
function tm21() {
  tt.style.top="8.4%";
  x.style.bottom="34.8%";
}
function tm22() {
  tt.style.top="8.8%";
  x.style.bottom="34.4%";
}
function tm23() {
  tt.style.top="9.2%";
  x.style.bottom="34%";
}
function tm24() {
  tt.style.top="9.6%";
  x.style.bottom="33.6%";
}
function upd(){
  let y = a.pop();
  a.unshift(y); 
}

 function per() {
  document.getElementById("score").innerHTML= "Score: " + s;
  tm0();
  setTimeout(tm1,50);
  setTimeout(tm2,100);
  setTimeout(tm3,150);
  setTimeout(tm4,200);
  setTimeout(tm5,250);
  setTimeout(tm6,300);
  setTimeout(tm7,350);
  setTimeout(tm8,400);
  setTimeout(tm9,450);
  setTimeout(tm10,500);
  setTimeout(tm11,550);
  setTimeout(tm12,600);
  setTimeout(tm13,650);
  setTimeout(tm14,700);
  setTimeout(tm15,750);
  setTimeout(tm16,800);
  setTimeout(tm17,850);
  setTimeout(tm18,900);
  setTimeout(tm19,950);
  setTimeout(tm20,1000);
  setTimeout(tm21,1050);
  setTimeout(tm22,1100);
  setTimeout(tm23,1150);
  setTimeout(tm24,1200);
}

let y=3; let i, z=0; let m, s=0; let d,e,f;
x.style.bottom="43%";
x.style.left="33%";
x.style.height="25%";

function left(){z=-1;}
function right(){z=1;}

function main() {
  document.getElementById("start").disabled=1;
  document.getElementById("intro").style.display="none";
  mfn();
  setTimeout(() => {
    x.setAttribute("src","ass/up.png");
    x.style.bottom="42.2%";
    x.style.left="35%";
    x.style.height="24.5%";
  }, 50);
  setTimeout(() => {
    x.style.bottom="41.2%";
    x.style.left="37%";
    x.style.height="24%";
  }, 100);
  setTimeout(() => {
    x.style.bottom="40.2%";
    x.style.left="39%";
    x.style.height="23%";
  }, 150);
  setTimeout(() => {
    x.style.bottom="39.2%";
    x.style.left="41%";
    x.style.height="22%";
  }, 200);
  setTimeout(() => {
    x.style.bottom="38.2%";
    x.style.left="43%";
    x.style.height="20.5%";
  }, 250);
  setTimeout(() => {
    x.style.bottom="37.2%";
    x.style.left="45%";
    x.style.height="19%";
  }, 300);
  setTimeout(() => {
    x.style.bottom="36.2%";
    x.style.left="47%";
    x.style.height="17%";
  }, 350);
  setTimeout(() => {
    x.style.bottom="35.2%";
    x.style.left="49%";
    x.style.height="15%";
  }, 400);
  setTimeout(() => {
    x.style.bottom="34.2%";
    x.style.left="51%";
    x.style.height="12.5%";
    x.setAttribute("src","ass/standing.png");
  }, 450);
  setTimeout(() => {
    x.style.bottom="33.2%";
    x.style.left="52%";
    x.style.height="10%";
  }, 500);

  setTimeout(() => {
    d = setInterval(mfn,1250);
    e = setInterval(per,1250);
    f = setInterval(() => {
      setTimeout(upd,500);
    }, 1250);
  }, 2000);
}
