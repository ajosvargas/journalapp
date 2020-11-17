// Global Variables
const form = document.querySelector('.user_form');
const icons = document.querySelectorAll('.entry__icon')
// Base URL and KEY for access to the API
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '19ef85508db6bc4166420a8141a2c878';

//Date function to include in data being stored into server
const date = new Date();
let newDate = date.getMonth() + '.' + date.getDate() + '.' + date.getFullYear();

// Function to display text

let formMessage = (id) => {
    let message = document.querySelector(id);
    message.style.display = 'block';

    setTimeout(() => {
        message.style.display = 'none';
    }, 3000)
} 

document.getElementById('submit').addEventListener('click', getData)

function getData (e) {
    e.preventDefault();

    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;

    if (zip === "" || content === "") {
        formMessage('.fail-messg');
    } else {
        getWeather(baseURL, zip, apiKey)
    }
}