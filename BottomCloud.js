var cloud2 = document.getElementById("cloud2");
var cloud2LeftHalf = document.getElementById("leftHalf2");
var cloud2RightHalf = document.getElementById("rightHalf2");
var x2 = 1500;
var x2rate = -.1;
var we = false;
var qw = false;
function moveCloud2(){
	cloud2.style.left =""+x2+"px";
	x2 = x2+x2rate;
}

function speedLeft2(){
	if(qw){
		console.log("happened");
		x2rate = x2rate+.1;
	}
}
function speedRight2(){
	if(we){
		x2rate = x2rate-.1;
	}
}
function slow2(){
		if(we == false && qw == false){ 
		if(x2rate<-.1){
			console.log("problem");
			x2rate = x2rate+.05;
		}
		if(x2rate>-.1){
			console.log("problem");
			x2rate = x2rate-.05;
		}
	}
}


setInterval(moveCloud2, 10);
setInterval(speedLeft2, 10);
setInterval(speedRight2, 10);
setInterval(slow2, 10);


cloud2LeftHalf.addEventListener('mouseover', e =>{
	console.log("left");
	qw = true;

}, true);

cloud2RightHalf.addEventListener('mouseover', e =>{
	console.log("right");
	we = true;
}, true);

cloud2.addEventListener('mouseout', e =>{
	console.log("norm");
	we = false;
	qw = false;

}, true);
