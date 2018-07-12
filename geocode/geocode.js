//Below are the constant variables for request modules
const request = require('request');

//Method takes argument as string and convert the address to encoded URI Component and passes
// it to Google Geo-location API to get the Latitude and Longitude values as a json object
var  geocodeAddress = (address,callback) => {
	var encodedAdd = encodeURIComponent(address);
	request({
		url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}&key=AIzaSyBnQHv_DPzDHL_XfaSFvgc4XgtaNt4Y8b4`,
		json:true
	},(error,response,body) => {
		if(error){
			callback('Can\'t connect to Google Service.');
		}else if(body.status === 'ZERO_RESULTS'){
			callback('Address not found.')
		}else if(body.status == 'OK'){
			callback(undefined,{
				Address: body.results[0].formatted_address,
				Lattitude: body.results[0].geometry.location.lat,
				Longitude: body.results[0].geometry.location.lng
			});
		}
	});

};

//Adding the function to exports 
module.exports={
	geocodeAddress
};