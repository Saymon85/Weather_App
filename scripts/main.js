const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

const updateDOM = (data) => {
    
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    // update DOM with data fetched from API

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
        `
    // remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }    
}


cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
     
    // get city value from input field
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city 
    updateCity(city)
     .then(data => updateDOM(data))
     .catch(err => console.log(err));
})