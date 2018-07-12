console.log('This is a starting');

setTimeout(() => {
	console.log('This is a timeout');
},2000);

setTimeout(() =>{
	console.log('This is a zero timeout.');
},0);

console.log('This is a ending');

