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
    wind.innerHTML = Math.round(response.data.wind.speed * 3.6);

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = Math.round(response.data.main.humidity);

    let mainIcon = document.querySelector('#main-weather-icon')
    mainIcon.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    mainIcon.setAttribute('alt', response.data.weather[0].description);
}

//change forecast
function showForecast(response){
    console.log(response)
    const weekDay1 = new Date(response.data.daily[1].dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
    let dayName1 = document.querySelector("#day-name-1");
    dayName1.innerHTML = weekDay1;

    let highTemp1 = document.querySelector("#high-temp-1")
    highTemp1.innerHTML = Math.round(response.data.daily[1].temp.max);

    let lowTemp1 = document.querySelector("#low-temp-1")
    lowTemp1.innerHTML = Math.round(response.data.daily[1].temp.min);

    let icon1 = document.querySelector("#icon-day-1")
    icon1.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`)
    icon1.setAttribute('alt', response.data.daily[1].weather[0].description);

    const weekDay2 = new Date(response.data.daily[2].dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
    let dayName2 = document.querySelector("#day-name-2");
    dayName2.innerHTML = weekDay2;

    let highTemp2 = document.querySelector("#high-temp-2")
    highTemp2.innerHTML = Math.round(response.data.daily[2].temp.max);

    let lowTemp2 = document.querySelector("#low-temp-2")
    lowTemp2.innerHTML = Math.round(response.data.daily[2].temp.min);

    let icon2 = document.querySelector("#icon-day-2")
    icon2.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`)
    icon2.setAttribute('alt', response.data.daily[2].weather[0].description);

    const weekDay3 = new Date(response.data.daily[3].dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
    let dayName3 = document.querySelector("#day-name-3");
    dayName3.innerHTML = weekDay3;

    let highTemp3 = document.querySelector("#high-temp-3")
    highTemp3.innerHTML = Math.round(response.data.daily[3].temp.max);

    let lowTemp3 = document.querySelector("#low-temp-3")
    lowTemp3.innerHTML = Math.round(response.data.daily[3].temp.min);

    let icon3 = document.querySelector("#icon-day-3")
    icon3.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`)
    icon3.setAttribute('alt', response.data.daily[3].weather[0].description);

    const weekDay4 = new Date(response.data.daily[4].dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
    let dayName4 = document.querySelector("#day-name-4");
    dayName4.innerHTML = weekDay4;

    let highTemp4 = document.querySelector("#high-temp-4")
    highTemp4.innerHTML = Math.round(response.data.daily[4].temp.max);

    let lowTemp4 = document.querySelector("#low-temp-4")
    lowTemp4.innerHTML = Math.round(response.data.daily[4].temp.min);

    let icon4 = document.querySelector("#icon-day-4")
    icon4.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`)
    icon4.setAttribute('alt', response.data.daily[4].weather[0].description);

    const weekDay5 = new Date(response.data.daily[5].dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
    let dayName5 = document.querySelector("#day-name-5");
    dayName5.innerHTML = weekDay5;

    let highTemp5 = document.querySelector("#high-temp-5")
    highTemp5.innerHTML = Math.round(response.data.daily[5].temp.max);

    let lowTemp5 = document.querySelector("#low-temp-5")
    lowTemp5.innerHTML = Math.round(response.data.daily[5].temp.min);

    let icon5 = document.querySelector("#icon-day-5")
    icon5.setAttribute('src', `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`)
    icon5.setAttribute('alt', response.data.daily[5].weather[0].description);
    
}

//get forcast info
function getForecastMetric(response){
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric"

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude={part}&appid=${apiKey}`
    axios.get(apiUrl).then(showForecast);
}

function getForecastImperial(response){
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "imperial"

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude={part}&appid=${apiKey}`
    axios.get(apiUrl).then(showForecast);
}

//gets api response for given city
function apiInfo(cityName){
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);

    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getForecastMetric);
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
}

//uses navigator to get the current location
function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

//changes temperature to fahrenheit
function showFahrenheitTemp(event){
    event.preventDefault()
    //remove active class from celsius link and add active class to fahrenheit link
    celsiusLink.classList.remove("active")
    fahrenheitLink.classList.add("active")

    let windUnits = document.querySelector("#wind-units");
    windUnits.innerHTML = "mph";

    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let city = document.querySelector("#city").textContent;
    let units = "imperial"
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);

    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getForecastMetric);
}

//changes temperatures to celsius
function showCelsiusTemp(event){
    event.preventDefault()
    //remove active class from fahrenheit and add active class to celcius 
    fahrenheitLink.classList.remove("active")
    celsiusLink.classList.add("active")

    let windUnits = document.querySelector("#wind-units");
    windUnits.innerHTML = "km/h";

    let city = document.querySelector("#city").textContent;
    apiInfo(city)
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

//click to change to fahrenheit
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

//click to change to celsius
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsiusTemp);

//actuve weather for rome
apiInfo("Rome");