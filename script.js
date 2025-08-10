//your JS code here. If required.
let count=0;
let btn=document.getElementById("increment");
let counterElement=document.getElementById(countter);
btn.addEventListner("click",()=>{
	// show alert
	alert("Current Value : "+count);
	//increse counter
	count++;
	counterElement.textContent=count;
	
})