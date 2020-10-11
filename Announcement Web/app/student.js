

function checker(){

	var sGrade  = document.getElementById('grades').value; 
	var sClub  = document.getElementById('clubs').value;
	var sGender = document.getElementById('genders').value;

	localStorage.setItem('sGrade', JSON.stringify(sGrade));
	localStorage.setItem('sClub', JSON.stringify(sClub));
	localStorage.setItem('sGender', JSON.stringify(sGender));

	document.location.href = 'home.html'; 

}

/*
Checker Function: 
 - Variables are created which store the student options 
 - 