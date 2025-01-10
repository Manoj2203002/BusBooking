const From = document.getElementById('From');
const To = document.getElementById('To');
const date = document.getElementById('Date');
const cityList = document.getElementById('cityList');
const msg=document.getElementById('msg');
const Citys = {
    "Bangalore": "Karnataka",
    "Chennai": "Tamil Nadu",
    "Hyderabad": "Telangana",
    "Kochi": "Kerala",
    "Thiruvananthapuram": "Kerala",
    "Coimbatore": "Tamil Nadu",
    "Mysore": "Karnataka",
    "Visakhapatnam": "Andhra Pradesh",
    "Tiruchirappalli": "Tamil Nadu",
    "Madurai": "Tamil Nadu",
    "Kozhikode": "Kerala",
    "Warangal": "Telangana",
    "Vijayawada": "Andhra Pradesh",
    "Guntur": "Andhra Pradesh",
    "Nellore": "Andhra Pradesh",
    "Kurnool": "Andhra Pradesh",
    "Rajahmundry": "Andhra Pradesh",
    "Tirupati": "Andhra Pradesh",
    "Salem": "Tamil Nadu",
    "Erode": "Tamil Nadu"
};
function Addcitys(datalistElement) {
    for (let city in Citys) {
        let option = document.createElement('option');
        option.value = city;
        datalistElement.appendChild(option);
    }
}

Addcitys(cityList);

function swap(e){
    e.preventDefault();
   const frominput=document.getElementById('From');
   const toinput=document.getElementById('To');
   const temp=frominput.value;
   frominput.value=toinput.value;
   toinput.value=temp;
}
function HandleClick(e) {
    e.preventDefault();
    valid=true;
    msg.innerHTML="";
    const dateinput = date.value;
    const selectdate = new Date(dateinput);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if(From.value===""){
        msg.innerHTML+="<p>*Please select the Bording City</p>";
        valid=false;
    }
    else if(To.value===""){
    msg.innerHTML+="<p>*Please select the Destination City</p>";
        valid=false;
   }
  else if(From.value===To.value|| To.value===From.value){
    msg.innerHTML="<p>*Destination and Bording City can't be same</p>";
    valid=false;
   }
  else if (dateinput === "") {
    msg.innerHTML += "<p>*Please Enter the Date</p>";
    valid = false;
    } 
    else if (selectdate <= today) {
    msg.innerHTML += "<p>*Please Enter a Correct Date</p>";
    valid = false;
    }
}
