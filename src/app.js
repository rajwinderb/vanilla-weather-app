//gets the current day and time and displays it
function nowDate(){
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
  
    let hours = now.getHours();
    let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
    return `${day}, ${hours}:${minutes}`
}


//gets and changes the temperature etc of the page from the api response
function showTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;

    let temperature = Math.round(response.data.main.temp);
  
    let temp = document.querySelector("#now-temp");
    temp.innerHTML = temperature;
  
    let highTemp = document.querySelector("#high-temp");
    highTemp.innerHTML = Math.round(response.data.main.temp_max);
  
    let lowTemp = document.querySelector("#low-temp");
    lowTemp.innerHTML = Math.round(response.data.main.temp_min);
  
    let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;
  
    let wind = document.querySelector("#wind");
    wind.innerHTML = Math.round(response.data.wind.speed);

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);

    let mainIcon = document.querySelector('#main-weather-icon')
    mainIcon.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    mainIcon.setAttribute('alt', response.data.weather[0].description);
  
}

//gets api response for given city
function apiInfo(cityName){
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);
}
  
//gets the city name from the search
function changeCity(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    apiInfo(searchInput.value);
}

//gets api response for the current location
function searchLocation(position) {
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

//uses navigator to get the current location
function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

//Changes the date and time
let currentDate = document.querySelector("#now-date");
currentDate.innerHTML = nowDate();

//search for city when submit clicked
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

//searchs for current location when button clicked
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

//actuve weather for rome
apiInfo("Rome");