const API_KEY = `7459e82afa1acb9b6e0775fad63893f1`;

const getSearchInput = () => {
    const cityField = document.getElementById('search-field');
    const city = cityField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));
    cityField.value = '';
}

const displayResult = (data) => {
    if (data.name) {
        const cityField = document.getElementById('city-name');
        cityField.innerText = `${data?.name}, ${data?.sys?.country}`;
        document.getElementById('temperature').innerText = `${data?.main?.temp}`;
        document.getElementById('weather').innerText = data?.weather[0]?.main;
        const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.setAttribute('src', iconURL);
    } else {
        alert('Location not found');
    }

};