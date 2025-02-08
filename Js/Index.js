
const From = document.getElementById('From');
const To = document.getElementById('To');
const date = document.getElementById('Date');
const cityList = document.getElementById('cityList');
const msg=document.getElementById('msg');
const nav=document.querySelector('.navbar');
fetch('/Html/Nav.Html').then(res=>res.text()).then(data=>{nav.innerHTML=data
    const parser=new DOMParser();
    const doc= parser.parseFromString(data,'text/html');
    eval(doc.querySelector('script').textContent)
});
const Footer=document.querySelector('.Footer');
fetch('/Html/Footer.html').then(res=> res.text()).then(data=>{Footer.innerHTML=data});
const Citys = {
    "Chennai": "Tamil Nadu",
    "Coimbatore": "Tamil Nadu",
    "Tiruchirappalli": "Tamil Nadu",
    "Madurai": "Tamil Nadu",
    "Salem": "Tamil Nadu",
    "Erode": "Tamil Nadu",
    "Tirunelveli": "Tamil Nadu",
    "Vellore": "Tamil Nadu",
    "Dindigul": "Tamil Nadu",
    "Thanjavur": "Tamil Nadu",
    "Namakkal": "Tamil Nadu",
    "Karur": "Tamil Nadu",
    "Dharmapuri": "Tamil Nadu",
    "Krishnagiri": "Tamil Nadu",
    "Cuddalore": "Tamil Nadu",
    "Nagapattinam": "Tamil Nadu",
    "Ramanathapuram": "Tamil Nadu",
    "Sivaganga": "Tamil Nadu",
    "Pudukkottai": "Tamil Nadu",
    "Theni": "Tamil Nadu",
    "Virudhunagar": "Tamil Nadu",
    "Thoothukudi": "Tamil Nadu",
    "Tenkasi": "Tamil Nadu",
    "Kanyakumari": "Tamil Nadu",
    "Ariyalur": "Tamil Nadu",
    "Perambalur": "Tamil Nadu"
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
  else   if (dateinput === "") {
    msg.innerHTML += "<p>*Please Enter the Date</p>";
    valid = false;
    } 
    else if (selectdate <= today) {
    msg.innerHTML += "<p>*Please Enter a Correct Date</p>";
    valid = false;
    }
}
