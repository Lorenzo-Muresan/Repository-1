function AddNewItem() { 
//functia principala apeleaza functiile secundare
	
	addBirthDate();
	createEmailTextBox();
}

function addBirthDate() {
//functie pentrau data de nastere
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("29-08-2000");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
//cand ducem cursorul peste buton ne va aparea varsta
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
//cand il luam de pe buton va reveni data
}

function birthToYears() {
//functie care calculeaza varsta in functie de data de nastere
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() {
//functie care ne reafiseaza data dupa ce luam cursorul de pe buton

		document.getElementById("date-years").innerHTML = '29-08-2000';
	}

function createEmailTextBox() {
//functie prin care putem  introduce email-ul
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "abc@xyz.com";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
//cand ducem cursorul pe buton se verifica emeil-ul
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {
//functie de validare a email-ului
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
//verifica daca email-ul este de aceasta forma
  	if (input.value.match(validRegex)) {
//daca email-ul este de aceasta forma se va afisa "Valid email address"
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
//altfel ne va aparea alerta "Invalid email address!"
  	}
}