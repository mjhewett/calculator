var no1 = document.querySelector('#num_one');
var no2 = document.querySelector('#num_two');
var answer = document.querySelector('#answer');
var addBtn = document.querySelector('#addBtn');
var subBtn = document.querySelector('#subBtn');
var multBtn = document.querySelector('#multBtn');
var divBtn = document.querySelector('#divBtn');


function add(){
	var numOne = Number(no1.value);
	var numTwo = Number(no2.value);
	var sum = numOne + numTwo;
	answer.innerHTML = sum.toString();
}


function subtract(){
  var numOne = Number(no1.value);
  var numTwo = Number(no2.value);
  var subtract = numOne - numTwo;
  answer.innerHTML = subtract.toString();
}

function multiply(){

  var numOne = Number(no1.value);
  var numTwo = Number(no2.value);
  var multiply = numOne * numTwo;
	answer.innerHTML = multiply.toString();
}

function divide() {
 var numOne = Number(no1.value);
 var numTwo = Number(no2.value);
 var divide = numOne / numTwo;
 answer.innerHTML = divide.toString();
}


addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
multBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);








// var add = document.getElementById('add');
// var subtract = document.getElementById('subtract');
// var divide = document.getElementById('divide');
// var multiply = document.getElementById('multiply');
// var clear = document.getElementById('clear');
// var submit = document.getElementById('submit');

// var one = document.querySelector('#one');
// var two = document.querySelector('#two');
// var three = document.querySelector('#three');
// var four = document.querySelector('#four');
// var five = document.querySelector('#five');
// var six = document.querySelector('#six');
// var seven = document.querySelector('#seven');


