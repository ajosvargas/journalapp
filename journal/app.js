// Global Variables
const form = document.querySelector('.user_form');
const icons = document.querySelectorAll('.entry__icon')
// Base URL and KEY for access to the API
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '19ef85508db6bc4166420a8141a2c878';

//Date function to include in data being stored into server
const date = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('submit').addEventListener('click', getData)

let getData = (e) => {
    e.preventDefault();

    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feeling').value;

    if (zip === "" || content === "") {
        console.log('please fill out the fields in order to proceed');
    } else {
        getWeather(baseURL, zip, apiKey)
    }
}