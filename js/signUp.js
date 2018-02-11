onload = (() => {
	
	let cl = console.log;
	let c = 'click';
	let i = 'input';
	let auth = firebase.auth();
	let userSignup;
	let passwordSignup;
	let emailSignup;
	let codeToValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let bSignUp = document.getElementById('signup-button');
  let userInputSignUp = document.getElementById('user-input-signup');
  let emailInputSignUp = document.getElementById('email-input-signup');
  let passwordInputSignUp = document.getElementById('password-input-signup');
	
	let userValidation = (event) => {
		userSignup = userInputSignUp.value;
		return (userSignup.length >= 3);
	};
	
	let emailValidation = (event) => {
		emailSignup = emailInputSignUp.value;
		return codeToValidateEmail.test(emailSignup);
	};
	
	let passwordValidation = (event) => {
		passwordSignup = passwordInputSignUp.value;
		return passwordSignup.length >=6;
	};
	
	let totalValidation = (event) => {
		return userValidation() && emailValidation() && passwordValidation();
	}
	
	let activeBtn = (event) => {
		if(totalValidation()){
			let prom = auth.createUserWithEmailAndPassword(emailSignup,passwordSignup);
			prom.catch(event => alert(event.message));
			document.getElementById('signsec').setAttribute('class', 'first-section hide');
			document.getElementById('loadsec').setAttribute('class','loading-section text-center show')
			setTimeout(function() {
       window.location.href = 'gallery.html';
      }, 3000);
	  } else {
			alert('Something went wrong!!!')
		}
	}
	

	
	userInputSignUp.addEventListener(i,userValidation);
	emailInputSignUp.addEventListener(i,emailValidation);
	passwordInputSignUp.addEventListener(i,passwordValidation);
	bSignUp.addEventListener(c,activeBtn);
	
})();
	
	
 
  

	