const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
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
     .then(data => console.log(data))
     .catch(err => console.log(err));
})