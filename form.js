// EMAIL VALIDATION
const form =document.getElementsByTagName('form')[0];
let email=document.getElementById("email");
let error=document.getElementById("error");
function validate()
{
   let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/ 
   if(regexp.test(email.value))
   {
   error.innerHTML = "Valid";
   error.style.color = "green";
   return true;
   }
   else if(email.value.trim() === " ")
   {
     return false;
   }
   else
   {
   error.innerHTML = "Invaid";
   error.style.color = "red";
   return false;
   }
}
form.addEventListener('submit', function(event){
   if(!validate()){
      event.preventDefault();
   }
});

// PHONE NUMBER VAIDATION
let phnnumber = document.getElementById("phonenumber");
let err=document.getElementById("err");
function phonenumber()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phoneno.test(phnnumber.value))
  {
   err.innerHTML = "Valid";
   err.style.color = "green";
   return true;
  }
  else if(phnnumber.value.trim() === " ")
   {
     return false;
   }
  else
  {
   err.innerHTML = "Invaid";
   err.style.color = "red";
   return false;
  }
}
form.addEventListener('submit', function(event){
   if(!phonenumber()){
      event.preventDefault();
   }
});

// PASSWORD VALIDATION
function checkForm(form)
{
  if(form.pwd1.value != "" ) 
  {
    if(form.pwd1.value.length < 8) {
      alert("Error: Password must contain at least eight characters!");
      form.pwd1.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one number (0-9)!");
      form.pwd1.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one lowercase letter (a-z)!");
      form.pwd1.focus();
      return false;
    }
    re = /[!@#$%^&*.(){}:;<>,~_=-]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one special symbol!");
      form.pwd1.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form.pwd1.value)) {
      alert("Error: password must contain at least one uppercase letter (A-Z)!");
      form.pwd1.focus();
      return false;
    }
  } 
  else
    {
    alert("Password field cannot be empty");
    return false;
    }
  if ((form.pwd1.value && form.pwd2.value != "")&&(form.pwd1.value == form.pwd2.value))
  {
    return true;
  }
  else
  {
    return false;
  }
}
form.addEventListener('submit', function(event){
  if(!checkForm(form)){
     event.preventDefault();
  }
});

// PASSWORD STRENGTH INDICATOR
let state = false;
let password = document.getElementById("password");
let passwordStrength = document.getElementById("password-strength");
let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

password.addEventListener("keyup", function(){
    let pass = document.getElementById("password").value;
    checkStrength(pass);
});

function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        state = false;
    }else{
        document.getElementById("password").setAttribute("type","text")
        state = true;
    }
}

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    //If password is greater than 7
    if (password.length > 7) {
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }

    // If value is less than 2
    if (strength < 2) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
    }
}
