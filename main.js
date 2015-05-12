var no1 = document.querySelector('#num_one');
var no2 = document.querySelector('#num_two');
var answer = document.querySelector('#answer');
var button = document.querySelector('#calculateBtn');


function add(){
	var numOne = Number(no1.value);
	var numTwo = Number(no2.value);
	var sum = numOne + numTwo;
	answer.innerHTML = sum.toString();
}


button.addEventListener("click", add);
