 const form = document.getElementById("form");
 const username = document.getElementById("username");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const repassword = document.getElementById("repassword");
 const phone = document.getElementById("phone");

 const error = (input, message) => {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
 }
 const success = (input) => {
    input.className = "form-control is-valid";
 }


 const checkRequired = (inputs) => {
    inputs.forEach((input) => {
        if(input.value === "") {
            error(input, `${input.id} is required.`);
        }else{
            success(input);
        }
    });
  }


 const checkEmail = (input) => {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value)) {
        success(input);
    }else{
        error(input, "geçersiz mail adresi");
    }
}

const checkLength = (input, min, max) => {
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter olabilir.`)
    }else if(input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter olabilir.`)
    }else{
        success(input);
    }
}

const checkPasswords = (input1, input2) => {
    if(input1.value !== input2.value){
        error(input2, "Parolalar uyumsuz.")
    }
}
const checkPhone = (input) => {
    const re = /^\d{10}$/;
    if(!re.test(input.value)){
        error(input, "10 rakamlı telefon numaranızı girin.")
    }
}

 form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(username, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);
 });