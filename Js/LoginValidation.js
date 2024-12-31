let Name=document.getElementById('Name');
let Email=document.getElementById('Email');
let Password=document.getElementById('Password');
let cpassword=document.getElementById('cpassword');
let phone=document.getElementById('phone');
let msg=document.getElementsByClassName('msg');
function manoj(e){
    e.preventDefault();
    valid=true;
    for (let i = 0; i < msg.length; i++) {
        msg[i].innerHTML = "";
    }
    if((Name.value.trim()==="")){
        msg[0].innerHTML="*Please Enter your name";
        valid=false;
    }
    else if (!/^[a-zA-z\s]+$/.test(Name.value)){
        msg[0].innerHTML="*Please Enter valid Name";
        valid=false;
    }
    if(Email.value.trim()===""){
        msg[1].innerHTML="*Please Enter your Email";
        valid=false;
    } 
    if (Password.value.trim() === "") {
        msg[2].innerHTML = "Please enter your password.";
        valid = false;
    } else if (Password.value.length < 8) {
        msg[2].innerHTML = "Password must be at least 8 characters.";
        valid = false;
    } 
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(Password.value)) {
        msg[2].innerHTML ="Password must contain at least one lowercase letter, one uppercase letter, and one special character";
        valid = false;
    }
    if(valid){
        alert("Form submitted successfully");
    }
}
