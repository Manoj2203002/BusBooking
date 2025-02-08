const list = document.querySelector('.BusList');
const nav=document.querySelector('.navbar');
fetch('/Html/Nav.Html').then(res=>res.text()).then(data=>{
    nav.innerHTML=data;
    const doc= parser.parseFromString(data,'text/html');
    eval(doc.querySelector('script').textContent)
});
const Footer=document.querySelector('.Footer');
fetch('/Html/Footer.html').then(res=> res.text()).then(data=>{Footer.innerHTML=data});
fetch('/bus_details.json')
    .then((res) => res.json())
    .then((data) => {
        list.innerHTML = data.map((item, index) => `
            <div class="bus-card" id="bus-${index}">
                <h1>${item.operator}</h1>
                <p class="bus-details">
                    <span>From:</span> ${item.source} &nbsp; | &nbsp;
                    <span>To:</span> ${item.destination} &nbsp; | &nbsp;
                    <span>Departure:</span> ${item.departure_time} &nbsp; | &nbsp;
                    <span>Arrival:</span> ${item.arrival_time} &nbsp; | &nbsp;
                    <span>Type:</span> ${item.bus_type}
                </p>
            </div>
        `).join('');
    })
    .catch((error) => console.error('Error fetching data:', error));
