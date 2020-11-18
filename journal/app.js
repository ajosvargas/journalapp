// Universal Variables
const form = document.querySelector('.userForm');

// Base URL and KEY for access to the API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=19ef85508db6bc4166420a8141a2c878&units=imperial';

//Date function to include in data being stored into server
let date = new Date();
let newDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();

// Function to display text

let formMessage = (id) => {
    let message = document.querySelector(id);
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 3000)
} 

// Aysnc function that populates data

document.getElementById('submit').addEventListener('click', getData)

function getData (e) {
    e.preventDefault();

    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    if (zip === "" || content === "") {
        formMessage('.fail-messg');
    } else {
        getWeather(baseURL, zip, apiKey)

        .then(function (data) {
            postData('/add', {date: newDate, temp: data.main.temp, content: content})
        }).then(function (newData){
            updateUI()
        })
        form.reset();
    }
}

/* 


Function to get data from API


*/

const getWeather = async (baseURL, info, key)=>{
    const res = await fetch(baseURL+info+key)
    try {
      const data = await res.json();
      return data;
    }  catch(err) {
      if (err.reponse) {
        } else if (err.request) {
        } else if ("Notvalid") {
        } else {
        console.log(err);
        }
    }
}

  /* 
  
  
 Post data Function 
  
  
  */

const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),     
});

    try {

      const newData = await response.json();
      return newData;
    }catch(error) {

    console.log("error", error);
    }
};

/* 


Function to update the UI with server data


*/

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();

        let tempConversion = (temprature) => {
        let farenheit = temprature
        let conversion = Math.round(farenheit);
        
        allData[0].temp = conversion;
    }

      tempConversion(allData[0].temp);
      document.getElementById('date').innerHTML = 'Date: ' + allData[0].date;
      document.getElementById('temp').innerHTML = 'Temp: ' + allData[0].temp+'&#8457;';
      document.getElementById('content').innerHTML = 'How are you feeling: ' + allData[0].content;
  
    }catch(err){
      console.log("error", err);
    }
}