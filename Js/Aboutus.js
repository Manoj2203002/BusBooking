const nav=document.querySelector('.navbar');
fetch('/Html/Nav.Html').then(res=>res.text()).then(data=>{
    nav.innerHTML=data;
});
const Footer=document.querySelector('.Footer');
fetch('/Html/Footer.html').then(res=> res.text()).then(data=>{Footer.innerHTML=data});