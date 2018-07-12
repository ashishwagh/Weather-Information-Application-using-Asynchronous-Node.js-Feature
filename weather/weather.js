//Below are the constant variables for request modules
const request = require('request');

//Method takes the arguments Latitude and Longitude and then get the weather information for that location using the Dark Sky API
var getWeather = (results,callback) => {
	request({
		url:`https://api.darksky.net/forecast/a029a5c1a8292d9097951814a1809336/${results.Lattitude},${results.Longitude}?units=si`,
		json:true
	},(error,response,body) => {
		if(error){
			callback('Can\'t connect to for Service.');
		}else if(response.statusCode === 400){
			callback('Weather for the location not found.')
		}else if(!error && response.statusCode === 200){
			callback(undefined,{
				temperature: body.currently.temperature,
				feelsLike: body.currently.apparentTemperature,
				windSpeed: body.currently.windSpeed,
				humidity: body.currently.humidity
			});
		}else{
			console.log('Unable to fetch weather.');
		}
	});
};

//Adding the function to exports
module.exports = {
	getWeather
}