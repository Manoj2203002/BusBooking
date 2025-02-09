const From = document.getElementById('From');
const To = document.getElementById('To');
const date = document.getElementById('Date');
const cityList = document.getElementById('cityList');
const msg = document.getElementById('msg');
const list = document.querySelector('.BusList');
const allbus = [];

// Fetch bus details from JSON file
fetch('/bus_details.json')
    .then((res) => res.json())
    .then((data) => { allbus.push(...data); })
    .catch((error) => console.error('Error fetching data:', error));

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
    "Thoothukudi": "Tamil Nadu",x
    "Tenkasi": "Tamil Nadu",
    "Kanyakumari": "Tamil Nadu",
    "Ariyalur": "Tamil Nadu",
    "Perambalur": "Tamil Nadu"
};

// Add city names to datalist
function Addcitys(datalistElement) {
    for (let city in Citys) {
        let option = document.createElement('option');
        option.value = city;
        datalistElement.appendChild(option);
    }
}

Addcitys(cityList);

// Swap function for From & To input fields
function swap(e) {
    e.preventDefault();
    const temp = From.value;
    From.value = To.value;
    To.value = temp;
}

// Function to handle form submission
function HandleClick(e) {
    e.preventDefault();
    let valid = true;
    msg.innerHTML = "";

    const dateInputValue = date.value;
    const selectedDate = new Date(dateInputValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (From.value === "") {
        msg.innerHTML += "<p>* Please select the Boarding City</p>";
        valid = false;
    } else if (To.value === "") {
        msg.innerHTML += "<p>* Please select the Destination City</p>";
        valid = false;
    } else if (From.value === To.value) {
        msg.innerHTML = "<p>* Boarding and Destination cities cannot be the same</p>";
        valid = false;
    } else if (dateInputValue === "") {
        msg.innerHTML += "<p>* Please enter a date</p>";
        valid = false;
    } else if (selectedDate < today) {
        msg.innerHTML += "<p>* Please enter a valid date</p>";
        valid = false;
    }

    if (valid) {
        const filteredBuses = allbus.filter(bus =>
            bus.source.toLowerCase() === From.value.toLowerCase() &&
            bus.destination.toLowerCase() === To.value.toLowerCase()
        )
        if (filteredBuses.length > 0) {
            list.innerHTML = filteredBuses.map((bus, index) => `
                <div class="bus-card" id="bus-${index}">
                    <h1>${bus.operator}</h1>
                    <p class="bus-details">
                        <span>From:</span> ${bus.source} &nbsp; | &nbsp;
                        <span>To:</span> ${bus.destination} &nbsp; | &nbsp;
                        <span>Departure:</span> ${bus.departure_time} &nbsp; | &nbsp;
                        <span>Arrival:</span> ${bus.arrival_time} &nbsp; | &nbsp;
                        <span>Type:</span> ${bus.bus_type}
                    </p>
                </div>
            `).join('');
        } else {
            msg.innerHTML = `<p>*No buses found for the selected route.</p>`;
        }
    }
}

// Function to set default date to today
function setDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
    const day = String(today.getDate()).padStart(2, '0'); // Ensure 2-digit day
    date.value = `${year}-${month}-${day}`;
}

// Set default date when the page loads
window.onload = setDefaultDate;