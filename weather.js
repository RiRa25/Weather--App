const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30deee0822msh173992a0b7486f4p1a459fjsn89e18e31a2fe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => 
{
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct  
    temp.innerHTML = response.temp 
    feels_like.innerHTML = response.feels_like 
    humidity.innerHTML = response.humidity 
    min_temp.innerHTML = response.min_temp 
    max_temp.innerHTML = response.max_temp 
    wind_speed.innerHTML = response.wind_speed       
})
.catch(err => console.error(err));
}

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30deee0822msh173992a0b7486f4p1a459fjsn89e18e31a2fe',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};

const gettime = (city) => {
cityName.innerHTML=city
fetch('https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=' + city, options1)
.then(response => response.json())
.then((response) =>
{
	console.log(response)
	datetime.innerHTML = response.datetime 
	day_of_week.innerHTML = response.day_of_week
	timezone.innerHTML = response.timezone 
})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
    gettime(city.value)
})
getweather("Delhi")
gettime("Delhi")