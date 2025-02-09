const nav=document.querySelector('.navbar');
const parser=new DOMParser();
fetch('/Html/Nav.Html').then(res=>res.text()).then(data=>{
    nav.innerHTML=data;
    const doc= parser.parseFromString(data,'text/html');
    eval(doc.querySelector('script').textContent)
})
const Footer=document.querySelector('.Footer');
fetch('/Html/Footer.html').then(res=> res.text()).then(data=>{Footer.innerHTML=data})