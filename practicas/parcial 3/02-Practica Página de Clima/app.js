class WeatherAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
    }
  
    getForecast(city, days = 4, aqi = 'no', alerts = 'no') {
      return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`)
        .then(response => response.json())
        .then(data => {
          let html = '';
          let elemento = data.forecast.forecastday;
          for(let i = 0; i < elemento.length; i++){
            let fecha = convertirFecha(elemento[i].date);
            let active = '';
            if(i == 0){
              active = 'active';
            }
            html += `<li class="${active}"><img src="${elemento[i].day.condition.icon}" width="50" height="50"><span class="day-name">${fecha}</span><span class="day-temp">${elemento[i].day.avgtemp_c}°C</span></li>`;
          }
          document.getElementById('forecast').innerHTML = html;
        });
    }
  }
  const API_KEY = "4c3a769380f4494fa12185534231003";
  const weatherAPI = new WeatherAPI(API_KEY);
  weatherAPI.getForecast("Piedras Negras Coahuila");
    