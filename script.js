function getWeather() {
    const apiKey = 'b20f162d1ee864df6d69f51f34c31b78';
    const cityInput = document.getElementById('cityInput').value;

    // Check if the city input is not empty
    if (cityInput.trim() === '') {
        show.innerHTML= `Please enter a city name.`
        setTimeout(() => {
            show.innerHTML=``
        }, 5000);
        // alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            show.innerHTML= `The city is not found`
            setTimeout(() => {
                show.innerHTML=``
                cityInput.value = ''
            }, 5000);
        }
        
        );
    }

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const show = document.getElementById("shower")
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const cityName = data.name;
    const temperature = data.main.temp;
    const temperatureCel = (temperature - 273.15).toFixed(1); 
    const description = data.weather[0].description;
    const long = data.coord.lon;
    const lati = data.coord.lat;
    console.log(icon);
    
        weatherInfo.innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperatureCel} ⁰C</p>
            <p>Description: ${description}</p>
        `;
        shower.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Temperature: ${temperatureCel} ⁰C</p>
        <p>Description: ${description}</p>
        <img src=${icon} alt="weather icon" />
        <p> Longitude: ${long}</p>
        <p> Latitude: ${lati}</p>`
    
        cityInput.value = ``

}
