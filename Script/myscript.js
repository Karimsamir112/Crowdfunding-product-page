// burger
function showDiv() {
	
	document.querySelector(".inside-burger").style.display="block";
	document.querySelector(".burger").style.display="none";
	document.querySelector(".close").style.display="block";
}

function hideDiv() {
	document.querySelector(".inside-burger2").style.display="none";
}

function closeDiv() {
	
	document.querySelector(".inside-burger").style.display="none";
	document.querySelector(".inside-burger2").style.display="block";
	setTimeout(hideDiv , 400);
	document.querySelector(".burger").style.display="block";
	document.querySelector(".close").style.display="none";
	
}

// bookmark 

function bookmarked() {
	document.querySelector(".bookmark").style.display="none";
	document.querySelector(".bookmarked").style.display="block";
}


function bookmark() {
	document.querySelector(".bookmarked").style.display="none";
	document.querySelector(".bookmark").style.display="block";
}

//rewards

var sco = [100];
var sco2 = [63];

function showReward1(){
	
	document.querySelector(".reward").style.display="block";
	document.querySelector(".p101").innerHTML=sco[0]-- + "<span> left </span>";
}

function showReward2(){
	
	document.querySelector(".reward").style.display="block";
	document.querySelector(".p64").innerHTML=sco2[0]-- + "<span> left </span>";
}


function closeReward(){
	
	document.querySelector(".reward").style.display="none";
}


// back this project

function showBack() {
	document.querySelector(".backProject").style.display="block";
}

function showHideBack(id , class2 , class3 , class10 , class20 , class100 , class200) {
	
	document.getElementById(id).style.display="block";
	document.querySelector(class2).style.display="block";
	document.querySelector(class3).style.height="380px";
	document.querySelector(class3).style.border="2px solid hsl(176, 50%, 47%)";
	document.querySelector(".backProject").style.height="1610px";
	
	// other is hidden when clicked
	document.querySelector(class10).style.height="300px";
	document.querySelector(class20).style.height="300px";
	document.querySelector(class100).style.display="none";
	document.querySelector(class200).style.display="none";
}

function closeBack() {
	
	document.querySelector(".backProject").style.display="none";
}

function continueReward() {
	
	document.querySelector(".backProject").style.display="none";
	document.querySelector(".reward").style.display="block";
}

