const inputBox=document.querySelector(".input-box");
const searchBtn=document.querySelector(".btn");
const weather_img=document.querySelector(".weather-pic");
const temp=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const location_not_found=document.querySelector(".location-not-found");
const weather_body=document.querySelector('.weatherbody');
async function checkWeather(city){
	const api_key="583d3ff59ede62e5189b59166f1d815e";
	const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
	const weather_data=await fetch(`${url}`).then(response=>response.json());
	/*gives the data from the specified url*/
	if(weather_data.cod===`404`){
		/*gives the status code*/
		location_not_found.style.display="flex";
		weather_body.style.display="none";
		console.log("Error")
		return;
	}
	console.log("run");
	temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
	desc.innerHTML=`${weather_data.weather[0].description}`;
	humidity.innerHTML=`${weather_data.main.humidity}%`;
	wind.innerHTML=`${weather_data.wind.speed}Kmph`;
	
switch(weather_data.weather[0].main){
	case 'Clouds':
		weather_img.src="hazy.jpg";
		break;
	case 'Thunderstorm':
		weather_img.src="thunderstorm.jpg";
		break;
	case 'Clear':
		weather_img.src="sunny.jpg";
		break;
	case 'Rain':
		weather_img.src="rain.jpg";
		break;
	case 'Mist':
		weather_img.src="hazy.jpg";
		break;
	case 'Snow':
		weather_img.src="snow.jpg";
		break;
}
console.log(weather_data);
}
searchBtn.addEventListener('click',()=>{
	checkWeather(inputBox.value);
});