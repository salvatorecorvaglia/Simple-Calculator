function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function getFormattedNumber(num){
	if(num==="-"){
		return "";
	}
	const n = Number(num);
	return n.toLocaleString("en");
}
function printOutput(num){
	if(num===""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
let i;
for(i = 0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		let output;
		if(this.id==="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id==="backspace"){
			output = reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			output = getOutput();
			let history = getHistory();
			if(output===""&&history!==""){
				if(isNaN(history.length-1)){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!=="" || history!==""){
				output= output===""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id==="="){
					const result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
const number = document.getElementsByClassName("number");
for(i = 0; i<number.length; i++){
	number[i].addEventListener('click',function(){
		let output = reverseNumberFormat(getOutput());
		if(!isNaN(output)){
			output=output+this.id;
			printOutput(output);
		}
	});
}
