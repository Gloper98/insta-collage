onload = (() => {
	
	let cl = console.log;
	let c = 'click';
	let i = 'input';
	let auth = firebase.auth();
	let userLogin;
	let passwordLogin;
	let bLogin = document.getElementById('login-button');
  let userInputLogin = document.getElementById('user-input-login');
  let passwordInputLogin = document.getElementById('password-input-login');
	
	let activeBtn = (event) => {
	  userLogin = userInputLogin.value;
	  passwordLogin = passwordInputLogin.value;
		
		firebase.auth().signInWithEmailAndPassword(userLogin, passwordLogin).catch(function(error) {
    // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode) {
        $('#inputPassword').val('');
        alert(errorMessage);
      }
    });
	}
	
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in
      // var name = $('#inputName').val();
      // localStorage.setItem('userName', name);
      window.location.href = 'views/gallery.html';
    } else {
      console.log('usuario no logeado');
    }
  });
	
	bLogin.addEventListener(c,activeBtn);
	
})();
	
	
 
  

	