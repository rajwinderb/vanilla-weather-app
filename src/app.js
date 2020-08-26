function nowDate(){
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
  
    let hours = now.getHours();
    let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
    return `${day}, ${hours}:${minutes}`
}


//Changes the temperature etc of the page
function showTemperature(response) {
    console.log(response)
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
  
}

//gets api for city
function apiInfo(cityName){
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);
}
  
//gets the city name
function changeCity(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    apiInfo(searchInput.value);
}

function searchLocation(position) {
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentDate = document.querySelector("#now-date");
currentDate.innerHTML = nowDate();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

apiInfo("Rome");