var message=document.querySelector("#message");
var colorDisplay=document.querySelector("#color");
var heading=document.querySelector("h1");
var button1=document.querySelector("#b1");
var button2=document.querySelector("#b2");
var button3=document.querySelector("#b3");
var colors=generateRandomColors(6);
var picked=pickColor();
var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{	
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor==picked)
		{
			message.textContent="Correct";
			button1.textContent="Play Again?";
			colorDisplay.textContent=picked;
			heading.style.backgroundColor=picked;
			colorDisplay.style.color="black";
			truth();
		}
		else
		{
			message.textContent="Try Again";
			this.style.backgroundColor= "#121216";
		}
	});
}
function truth(){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=picked;
	}
}
button1.addEventListener("click",function(){
	colors=generateRandomColors(6);
	picked=pickColor();
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	heading.style.backgroundColor="#121216";
	colorDisplay.textContent="RGB";
	colorDisplay.style.color="white";
	message.textContent="";
});
button2.addEventListener("click",function(){
	colors=generateRandomColors(6);
	picked=pickColor();
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		if(i>=3){
			squares[i].classList.remove("square");
		}
	}
	squares[1].style.backgroundColor=picked;
	heading.style.backgroundColor="#121216";
	colorDisplay.textContent="RGB";
	colorDisplay.style.color="white";
	message.textContent="";
});
button3.addEventListener("click",function(){
	colors=generateRandomColors(6);
	picked=pickColor();
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		if(i>=3){
			squares[i].classList.add("square");
		}
	}
	heading.style.backgroundColor="#121216";
	colorDisplay.textContent="RGB";
	colorDisplay.style.color="white";
	message.textContent="";
});
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
	arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}