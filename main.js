var no1 = document.querySelector('#num_one');
var no2 = document.querySelector('#num_two');
var answer = document.querySelector('#answer');
var addBtn = document.querySelector('#addBtn');


function add(){
	var numOne = Number(no1.value);
	var numTwo = Number(no2.value);
	var sum = numOne + numTwo;
	addBtn.innerHTML = sum.toString();
}

function multiply(){
	of = numOne * numTwo;
	answer.innerHTML = toString();
}


button.addEventListener("click", add);
