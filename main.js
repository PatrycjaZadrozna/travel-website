const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const wrapper = document.querySelector('.wrapper');

function changeToggle () {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    wrapper.classList.toggle('show');
}

menuToggle.addEventListener('click', changeToggle)

// Slider
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

  function reset(){
      for(let i = 0; i < sliderImages.length; i++){
          sliderImages[i].style.display = 'none';
      }
  }

 function startSlide(){
     reset();
     sliderImages[0].style.display = 'block';

 }

 function sideLeft(){
     reset();
     sliderImages[current - 1].style.display = 'block';
     current--;
 }

 function slideRight(){
     reset();
     sliderImages[current + 1].style.display = 'block';
     current++;
 }

 arrowLeft.addEventListener('click', ()=>{
     if(current === 0){
         current = sliderImages.length;
     }
     sideLeft();
 });

 arrowRight.addEventListener('click', ()=>{
     if(current === sliderImages.length -1){
         current = -1
     }
     slideRight();
 })

 startSlide();

 // Form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', checkInputs)

function checkInputs(e){
    e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, "username cannot be blank");
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, "email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}


    if(passwordValue2 === ''){
        setErrorFor(password2, "passport cannot be empty")
    } else if(passwordValue !== passwordValue2){
        setErrorFor(password2, 'passwords does not match')
    }else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const singleContainer = input.parentElement;
    const small = singleContainer.querySelector('small');

    small.innerText = message;

    singleContainer.className = 'singleContainer error';
}

function setSuccessFor(input){
    const singleContainer = input.parentElement;
    singleContainer.className = 'singleContainer success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(password);
}

