let Username = document.getElementById('UserName');
let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let phone = document.getElementById('Phone');
let password=document.getElementById('Password');
let confirm_password=document.getElementById('Cpassword');
let msg = document.getElementsByClassName('msg');

const manoj = (e) => {
    e.preventDefault();
    let valid = true;
    for (let i = 0; i < msg.length; i++) {
        msg[i].innerHTML = "";
    }
    if (Username.value.trim() === "") {
        msg[0].innerHTML = "*Please Enter User Username";
        valid = false;
    }
    if (Name.value.trim() === "") {
        msg[1].innerHTML = "*Please Enter User Name";
        valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(Name.value)) {
        msg[1].innerHTML = "*Please Enter a valid Name";
        valid = false;
    }
    if (Email.value.trim() === "") {
        msg[2].innerHTML = "*Please Enter your Email";
        valid = false;
    }
    if (phone.value.trim() === "") {
        msg[3].innerHTML = "*Please Enter your Phone Number";
        valid = false;
    } else if (!/^[0-9]{10}$/.test(phone.value)) {
        msg[3].innerHTML = "*Please Enter a valid Phone Number";
        valid = false;
    }
    if(password.value===""){
        msg[4].innerHTML = "*Please Enter your Password";
    }
    else if (password.value.length < 8) {
        msg[4].innerHTML = "Password must be at least 8 characters.";
        valid = false;
    } 
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/.test(password.value)) {
        msg[4].innerHTML ="Password must contain at least one lowercase letter, one uppercase letter, and one special character";
        valid = false;
    }
    if(confirm_password.value!=password.value){
        msg[5].innerHTML = "*Password and Confirm Password does not match";
        valid=false;
    }
    if(valid){
        alert("Form submitted successfully");
    }
};
