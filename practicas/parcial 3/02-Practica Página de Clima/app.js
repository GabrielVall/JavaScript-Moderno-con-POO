fetch('http://api.weatherapi.com/v1/current.json?key=dee77cb93ae84defa3d141838221306&q=Piedras Negras Coahuila&aqi=no&lang=es').then(response => response.json()).then(objeto => {
    document.getElementsByClassName('weather-temp')[0].innerHTML = `${objeto.current.temp_c} °C`;
    document.getElementsByClassName('weather-desc')[0].innerHTML = objeto.current.condition.text;
    document.getElementsByClassName('date-day')[0].innerHTML = objeto.location.localtime;
});