const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

btn.addEventListener('click',()=>{
    let city = input.value;
    getWeather(city)
})

function getWeather(city){
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your_apiid`)
    .then(response=>response.json())
    .then(data => {
        console.log(data);
        const iconcode = data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconcode}.png" alt="weather icon" />`;


        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;


        let weathertemp = data.main.temp; // use let instead of const
        weathertemp = weathertemp - 273.15; // use 273.15 for more accurate conversion
        const temp1 = weathertemp.toFixed(2);
        temperature.innerHTML = `${temp1}°C`;
        

        const weatherdesc=data.weather[0].description;
        description.innerHTML = `${weatherdesc}`;
    })
    

    
}

