function nowDate(){
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
  
    let hours = now.getHours();
    let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
    return `${day}, ${hours}:${minutes}`
  }


  function showTemperature(response) {
    console.log(response)
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
  
  }
  
  function changeInfo(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityHeader = document.querySelector("#city");
    cityHeader.innerHTML = `${searchInput.value}`
  
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let city = searchInput.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemperature);
  }

  function searchLocation(position) {
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let currentDate = document.querySelector("#now-date");
  currentDate.innerHTML = nowDate();

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", changeInfo);

  let currentLocation = document.querySelector("#current-location");
  currentLocationButton.addEventListener("click", getCurrentLocation);