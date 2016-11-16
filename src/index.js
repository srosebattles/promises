// Explain what is going on here.

//p is the promise. we've set it as a function. this function will run after a delay of 1000ms (one second).
var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

//when "p" happens, THEN run the function add1. We've set up a chain so that it runs 5 times total. At the end, it console logs the final value returned.
p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }

/**
Create function `getGeo()` that returns a Promise.

This Promise will resolve to a coordinates object like:
{ lat: ..., long: ... }

You should use `navigator.geolocation.getCurrentPosition(successCallback, errorCallback);`
where successCallback and errorCallback are functions to handle the resolution or rejection of the promise.

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

**/



function getGeo(){

    return new Promise(function(resolve, reject){

        navigator.geolocation.getCurrentPosition(function(pos){
          var crd = pos.coords;
          resolve({lat: crd.latitude , long: crd.longitude})
        }, function(err) {
          console.warn('ERROR(' + err.code + err.message + 'You\'re killin\' me Smalls');
          reject()
        });
    })
}

getGeo().then(function(coords) {
  console.log('IF YOU DO NOT SEE ME IN CONSOLE, SOMETHING IS BROKEN');
  console.assert(typeof coords.lat === 'number');
  console.assert(typeof coords.long === 'number');
});
