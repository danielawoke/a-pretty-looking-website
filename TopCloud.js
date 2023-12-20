var cloud1 = document.getElementById("cloud1");
var cloud1LeftHalf = document.getElementById("leftHalf");
var cloud1RightHalf = document.getElementById("rightHalf");
var title = document.getElementById("front");
title.style.opacity = 0;
var oc = 0;
var x1 = 50;
var x1rate = .1;
var zebra = false;
var girafe = false;
var planet;
function moveCloud1(){
	cloud1.style.left =""+x1+"px";
	x1 = x1+x1rate;
	// console.log(x1rate);
}

function speedLeft1(){
	if(girafe){
		// console.log("happened");
		x1rate = x1rate+.1;
	}
}
function speedRight1(){
	if(zebra){
		x1rate = x1rate-.1;
	}
}
function slow1(){
		if(zebra == false && girafe == false){ 
		if(x1rate>.1){
			// console.log("problem");
			x1rate = x1rate-.05;
		}
		if(x1rate<.1){
			// console.log("problem");
			x1rate = x1rate+.05;
		}
	}
}
function tit(){
	title.style.opacity = oc;
	oc = oc+.1;

}


setInterval(moveCloud1, 10);
setInterval(speedLeft1, 10);
setInterval(speedRight1, 10);
setInterval(slow1, 10);
setInterval(tit, 100);




cloud1LeftHalf.addEventListener('mouseover', e =>{
	// console.log("left");
	girafe = true;

}, true);

cloud1RightHalf.addEventListener('mouseover', e =>{
	// console.log("right");
	zebra = true;
}, true);

cloud1.addEventListener('mouseout', e =>{
	// console.log("norm");
	zebra = false;
	girafe = false;

}, true);



window.addEventListener("click", cleanStage);

let i = 0;	
let idt = .1;
var all = document.getElementById("wrapper");

function cleanStage(){
	let ammount = 0;
	var s = setInterval(moveUp,10);
}
var soup = false;
function moveUp(){
	if(i<1000){
		i = i-idt;
		all.style.top = ""+i+"px";
		idt=idt+20;
	}else {
		soup = true;
		earthComing();
	}
}

var happend = false;
function earthComing(){

	var occured = false;
	if(happend == false){
		var newWrapper = document.createElement("div");
		newWrapper.id = "wrapper2";
		newWrapper.style.width = "1000px"
		var circle = document.createElement("div");
		circle.id = "slapMe";
		circle.innerHTML = "<style type='text/css'> #slapMe{;background-color:navy;width: 500px;height: 500px;border: 1px solid black; border-radius: 50%; margin:auto;position:absolute;z-index:-1;top:0px;}</stlye>";
		var sq = document.getElementById("wrapper");
		document.body.removeChild(sq);
		var img = document.createElement("img");
		img.style.position = "absolute";
		img.style.width = "1100px";
		img.style.length = "auto";
		img.id = "earth";
		img.src = "https://imageio.forbes.com/blogs-images/jimdobson/files/2019/03/land_ocean_ice_2048.jpg?height=351&width=703&fit=bounds";

		var img2 = document.createElement("img");
		img2.style.position = "absolute";
		img2.style.width = "1100px";
		img2.style.length = "auto";
		img2.id = "earth2";
		img2.style.left = "1100px";
		img2.src = "https://imageio.forbes.com/blogs-images/jimdobson/files/2019/03/land_ocean_ice_2048.jpg?height=351&width=703&fit=bounds";

		var img3 = document.createElement("img");
		img3.style.position = "absolute";
		img3.style.width = "1100px";
		img3.style.length = "auto";
		img3.id = "earth3";
		img3.style.left = "-1100px";
		img3.src = "https://imageio.forbes.com/blogs-images/jimdobson/files/2019/03/land_ocean_ice_2048.jpg?height=351&width=703&fit=bounds";

		document.body.appendChild(newWrapper);
		document.getElementById("wrapper2").insertBefore(img3,newWrapper[0]);
		document.getElementById("wrapper2").insertBefore(img2,newWrapper[0]);
		document.getElementById("wrapper2").insertBefore(img,newWrapper[0]);
		document.getElementById("wrapper2").appendChild(circle, newWrapper[0]);
		var slash = document.createElement("div");
		slash.id = "leftCut";
		slash.innerHTML = "<style>#leftCut{position:absolute; left:-250px; width: 500px; height:500px; position:relative;overflow:hidden;} #leftCut::before{content:'';  position:absolute; left: 50%;height:100%; width: 100%; border-radius:50%; box-shadow: 0px 1200px 0px 1200px lightblue; top:0px;}</style>";
		document.getElementById("wrapper2").appendChild(slash, newWrapper[0]);
		var slash2 = document.createElement("div");
		slash2.id = "rightCut";
		slash2.innerHTML = "<style>#rightCut{position:absolute; left:250px; top:-500px; width: 500px; height:500px; position:relative;overflow:hidden; z-index:3;} #rightCut::before{content:'';  position:absolute; right: 50%;height:100%; width: 100%; border-radius:50%; box-shadow: 0px 1200px 0px 1200px lightblue; top:0px;}</style>";
		document.getElementById("wrapper2").appendChild(slash2, newWrapper[0]);

		var leftCover = document.createElement("div");
		leftCover.id = "left";
		leftCover.innerHTML = "<style> #left{left:-3000px;width: 3000px;height: 500px;background-color:lightblue; border-radius: 0%; margin:auto;position:absolute;top:0px;}</style>";
		document.getElementById("wrapper2").appendChild(leftCover, newWrapper[0]);

		var rightCover = document.createElement("div");
		rightCover.id = "right";
		rightCover.innerHTML = "<style> #right{left:600px;width: 3000px;height: 500px;background-color:lightblue; border-radius: 0%; margin:auto;position:absolute;top:0px;}</style>";
		document.getElementById("wrapper2").appendChild(rightCover, newWrapper[0]);
		var bottomCover = document.createElement("div");
		bottomCover.id = "bottom";
		bottomCover.innerHTML = "<style> #bottom{left:-2500px;width: 20000px;height: 500px;background-color:lightblue; border-radius: 0%; margin:auto;position:absolute;top:500px;}</style>";
		document.getElementById("wrapper2").appendChild(bottomCover, newWrapper[0]);



		var leftRot = document.getElementById("leftCut");
		var rightRot = document.getElementById("rightCut");

		



		


		occured = true;
	}

	if(occured){
		var x = 0;
		var y = 1100;
		var z = -1090;
		var dx = .1;
		var dy = .1;
		var dz = .1


		var LM = false;
		var RM = false;

		function RR(){
			LM = true;
		}
		function LR(){
			RM = true;
		}
		function settle(){
			LM = false;
			RM = false;
		}

		function LI(){

			if(dx>100 || dx<-100){
				rothchild();
			}

			if(RM){
				x = x+dx;
				dx= dx+.1;
				y = y+dy;
				dy = dy+.1;
				dz = dz +.1
				z=z+dz;
			}
		}

		function RI(){
			
			if(dx>100 || dx<-100){
				rothchild();
			}

			if(LM){
				x = x+dx;
				dx= dx-.1;
				y = y+dy;
				dy = dy-.1;
				dz = dz -.1
				z=z+dz;
			}
		}
		function gapTooth(){
			if(RM ==false && LM == false){
				if(dx>0){
					x = x+dx;
					dx= dx-.1;
					y = y+dy;
					dy = dy-.1;
					dz = dz-.1
					z=z+dz;
				}
				if(dx<0){
					x = x+dx;
					dx= dx+.1;
					y = y+dy;
					dy = dy+.1;
					dz = dz+.1
					z=z+dz;
				}
			}
		}
		function theOnlyThingThatMAtters(){

			if(x<-1100){
				x=0;
				y=1100;
				z=-1090;
			}
			if(x>1100){
				x=0;
				y=1100;
				z=-1090;
			}
			img3.style.left = ""+z+"px";
			img2.style.left = ""+y+"px";
			img.style.left = ""+x+"px";
		}

		leftRot.addEventListener("mouseover",LR);
		rightRot.addEventListener("mouseover",RR);
		rightRot.addEventListener("mouseout",settle);
		leftRot.addEventListener("mouseout",settle);

		planet = document.getElementById("wrapper2");
		planet.style.opacity = "0"; 
		planet.style.top = "100%";

		setInterval(brightUp,10);
		setInterval(brightUp2,10);
		zs = true;

		leftCover.addEventListener('mouseover', e =>{
			RM = true;
		}, true);

		rightCover.addEventListener('mouseover', e =>{
			LM = true;
		}, true);

		rightCover.addEventListener('mouseout', e =>{
			RM = false;
			LM = false;

		}, true);
		leftCover.addEventListener('mouseout', e =>{
			LM = false;
			RM = false;

		}, true);

		setInterval(RI,10);
		setInterval(LI,10);
		setInterval(gapTooth,10);
		setInterval(theOnlyThingThatMAtters, 10);
	}

}

var op = 0;
var bot = 100;
var zs = false;

function brightUp(){
	if(zs ){
		op = op+.01;
		bot = bot-1;
	}
}
function brightUp2(){
		planet.style.top = ""+bot+"%";
		planet.style.opacity = ""+op;
}

function rothchild(){console.log("the roths child got us");
	if(happend == false){

		happend = true;

		var damn = document.createElement("audio");
		damn.src = "song.mp3";
		damn.id = "sounds";
		damn.style.opacity = "1";
		damn.play();
		window.setTimeout(function(){

			document.body.appendChild(damn);

			document.getElementById("earth").style.filter = "grayscale(100%)";
			document.getElementById("earth2").style.filter = "grayscale(100%)";
			document.getElementById("earth3").style.filter = "grayscale(100%)";
			document.body.style.backgroundColor = "#4D2121";
			document.getElementById("leftCut").innerHTML = "<style>#leftCut{position:absolute; left:-250px; width: 500px; height:500px; position:relative;overflow:hidden;} #leftCut::before{content:'';  position:absolute; left: 50%;height:100%; width: 100%; border-radius:50%; box-shadow: 0px 1200px 0px 1200px #4D2121; top:0px;}</style>";
			document.getElementById("rightCut").innerHTML = "<style>#rightCut{position:absolute; left:250px; top:-500px; width: 500px; height:500px; position:relative;overflow:hidden; z-index:3;} #rightCut::before{content:'';  position:absolute; right: 50%;height:100%; width: 100%; border-radius:50%; box-shadow: 0px 1200px 0px 1200px #4D2121; top:0px;}</style>";
			document.getElementById("bottom").style.backgroundColor = "#4D2121";
			document.getElementById("right").style.backgroundColor = "#4D2121";
			document.getElementById("left").style.backgroundColor = "#4D2121";

			var rothchild = document.createElement("img")
			rothchild.src = "https://lh3.googleusercontent.com/Rc3jR1amNTcDfXf6aZzJ2qEIlkcrTUPY2KZYKbYrvPbmDGmMRtJFj4T4-94lrAs9TKTjoGWbiAFz_KxJGYW1Z9ge7XdnFvhxdEvdRSMnye3Mp0K5LfdV6yRIPyOv-sjSBiMH-M7YJg=w1920-h1080";
			document.getElementById("wrapper2").appendChild(rothchild);
			rothchild.style.position = "absolute";
			rothchild.style.zIndex = "100";
			rothchild.style.width = "800px";
			rothchild.style.length = "auto";
			rothchild.style.top = "50px";
			rothchild.style.left = "-130px";

			var text = document.createElement("div");
		text.innerHTML = "The Rothschilds said no again.";
		text.style.fontSize = "80px";
		text.style.position = "relative";
		text.style.top = "-300px";
		text.style.left = "-200px";
		width = "1";
		height = "1";
		text.style.margin = "auto";
		text.style.color = "red";
		document.getElementById("wrapper2").appendChild(text);

		
			
		},8500)


		




	}


}






