const api = "d12d2ccf0c740a267b791efde93b5121";
const apiKey ="863242cfb2b1d357e6093d9a4df19a4b"

const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input')

const searchBtn = document.querySelector('.search button')

const weatherIcon = document.querySelector('.weather-icon')
async function checkweather(city)
{
    const response = await fetch(apiurl +city+`&appid=${apiKey}`);
    var data = await response.json()
    
    if(response.status == 404)
    {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display="none"
    }
    else{
        document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed +"km/h";


    //change icon
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main=="Wind")
    {
        weatherIcon.src = "images/wind.png"
    }
    document.querySelector('.weather').getElementsByClassName.display ="block"
    }
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed +"km/h";


    //change icon
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main=="Snow")
    {
        weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main=="Wind")
    {
        weatherIcon.src = "images/wind.png"
    }
    document.querySelector('.weather').style.display ="block"
    document.querySelector('.error').style.display = "none"
}
searchBtn.addEventListener('click' ,()=>{
    checkweather(searchBox.value);
})





