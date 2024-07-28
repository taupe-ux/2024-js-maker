function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "5cfdb53035df2de09973dc481039e02f";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function geoError() {
  alert("you are not Geo");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
