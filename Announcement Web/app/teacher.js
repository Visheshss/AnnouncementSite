

function login()	{
	var username = document.getElementById('username').value; 
	var password = document.getElementById('password').value; 

	if (username =='Admin' && password =='admin3412') {
		alert ("Login Successful!");
		document.location.href = "post.html";
	}

	else {
		alert('Username or password is incorrect.')
		return false;
	}

}


	var title = []
	var body = []
	var tGrade = []
	var tGender = []
	var tClub = []
	var i = 0;

function post()	{

	title[i] = document.getElementById('titles').value; 
	body[i] = document.getElementById('bodies').value;
	tGrade[i] = document.getElementById('grade').value; 
	tClub[i] = document.getElementById('club').value; 
	tGender[i] = document.getElementById('gender').value;


	localStorage.setItem('title', JSON.stringify(title));
	localStorage.setItem('body', JSON.stringify(body));
	localStorage.setItem('tGrade', JSON.stringify(tGrade));
	localStorage.setItem('tClub', JSON.stringify(tClub));
	localStorage.setItem('tGender', JSON.stringify(tGender));

	i++;
}

	var aTitle = [];
	var aBody = [];

function matcher () {

	var	sGrade = JSON.parse(localStorage.getItem('sGrade'));
	var	sGender = JSON.parse(localStorage.getItem('sGender'));
	var	sClub = JSON.parse(localStorage.getItem('sClub'));

	var	tGrade = JSON.parse(localStorage.getItem('tGrade'));
	var	tGender = JSON.parse(localStorage.getItem('tGender'));
	var	tClub = JSON.parse(localStorage.getItem('tClub'));

	var	aTitle = JSON.parse(localStorage.getItem('title'));
	var	aBody = JSON.parse(localStorage.getItem('body'));

	for (var i = 0; i < aBody.length; i++) {
	

		if ((sGrade == tGrade) && (sGender == tGender) && (sClub == tClub))	{

			
			document.getElementById("vBody").innerHTML += aBody[i];

		}else {

			alert("Sorry, No Announcements Match Your Filters");
		
		}
	}	
}

	//document.getElementById("vTitle").innerHTML += aTitle[i];
	
	/*
	var	sGrade = localStorage.getItem("sGrade");
	var	sGender = localStorage.getItem("sGender");
	var	sClub = localStorage.getItem("sClub");

	var	tGrade = localStorage.getItem("tGrade");
	var	tGender = localStorage.getItem("tGender");
	var	tClub = localStorage.getItem("tClub");

	var	aTitle = localStorage.getItem("title");
	var	aBody = localStorage.getItem("body");
	*/

