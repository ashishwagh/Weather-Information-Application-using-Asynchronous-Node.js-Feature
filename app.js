//Below are the constant variables for request and yargs modules
const request = require('request');
const yargs = require('yargs');

//Constant variable for importing the functions from geocode.js file
const geocode = require('./geocode/geocode.js');
//Constant variable for importing the functions from weather.js file
const weather = require('./weather/weather.js');

//Constant variable for more information about the command line parameters and help options	
argv =  yargs.options({
	address:{
			demand:true,
			alias:'a',
			describe:'Address for Weather information',
			string:true
		}
	})
	.help()
	.alias('help','h')
	.argv

//Method for getting the Latitude and Longitude of given address and sending it to getWeather function
geocode.geocodeAddress(argv.address,(errorMessage,results) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log('Address:'+ results.Address);
		//Method for getting the weather information for specified Latitude and Longitude
		weather.getWeather(results,(errorMsg,weatherReport) => {
			if(errorMsg){
				console.log(errorMsg);
			}else{
				console.log('Weather Information:');
				console.log('Temperature:'+weatherReport.temperature+' degree celcius');
				console.log('Feels Like:',weatherReport.feelsLike+' degree celcius');
				console.log('Wind Speed:',weatherReport.windSpeed+' km/h');
				console.log('Humidity:',weatherReport.humidity+' %');	
			}
		});
	}
});





