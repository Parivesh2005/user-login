// USER LOGIN / SIGNUP
let users

if (localStorage.getItem("users") === null){
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');



// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  let userName = document.getElementById('usernameId').value;
  let password = document.getElementById('pswdId').value;
  let confirmPswd = document.getElementById('confirmPswdId').value;
  if (password === confirmPswd) {
    let userAlreadyExists = false;
    for (let i = 0; i < users.length; i++){
      if (userName == users[i].name) {
        userAlreadyExists = true;
      }

    }
    if (userAlreadyExists == false){
      users.push({'name': userName, 'password': password});
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup Success");
    } if (userAlreadyExists == true){
      alert("Username already exists");
    }
  } else {
    alert("Passwords don't match");
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let userSignin = document.getElementById("signinUser").value;
  let passSignin = document.getElementById("signinPass").value;
  let success = false;
  for (let i = 0; i < users.length; i++){
    if (userSignin === users[i].name && users[i].password === passSignin){
      alert("VALID LOGIN!");
      success = true;
    } 
  } 
  if (success == false) {
    alert("Invalid Login.");
  }
}
