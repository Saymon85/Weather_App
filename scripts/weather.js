const key = "CPoLBAnl7yAuOnwi6nSgfQG5RRnJfr7l";


// Get weather for the city

const getWeather = async (cityID) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const queryString = `${cityID}?apikey=${key}`;

    const response = await fetch(baseUrl + queryString);
    const data = await response.json();

    return data[0];
}
// Get city ID 
const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryString = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + queryString);
    const data = await response.json();

    return data[0];
}

getCity('belgrade').then( data => {
    return getWeather(data.Key);
}).then(data => console.log(data))
  .catch( err => console.log(err));