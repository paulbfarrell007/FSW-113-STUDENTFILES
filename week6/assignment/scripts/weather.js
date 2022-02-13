
// import the convertTemp.js and getDaylight.js scripts with their default export
import blueSkies from "./getDaylight.js"
import reCast from "./convertTemp.js"


// declare any variables needed
let awaitUpdate;


// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", () => fetchWeather())
async function getData() {
    let theWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.querySelector("#city").value}&appid=ea099f65a2eb14c7c63d4d10b709a887`) //my API Key
    awaitUpdate = await theWeather.json()
    return (awaitUpdate)

}



// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
function fetchWeather() {
    getData()
        .then(response => showWeather(response));
}

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

function showWeather(result) {
    let theTemperature = reCast(result.main.temp, result.sys.country)
    let theHumidity = result.main.humidity
    let theCondition = result.weather[0].main
    let dayInfo = result.dt
    let dawn = result.sys.sunrise
    let sunset = result.sys.sunset
    docuInfo(theTemperature, theHumidity, theCondition, dayInfo, dawn, sunset)
}


// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function docuInfo(temp, humidity, conditions, dayInfo, sunrise, sunset) {
    document.querySelector("#tempData").textContent = temp
    document.querySelector("#humidData").textContent = humidity
    document.querySelector("#conditionsData").textContent = conditions
    if (dayInfo >= sunrise && dayInfo < sunset) {
        document.querySelector(".weatherWrapper").style = `background-color:${blueSkies(true)}; color: white; border-radius: 8px;`
    }
    else {
        document.querySelector(".weatherWrapper").style = `background-color:${blueSkies(false)}; color: white; border-radius: 8px;`
    }
}


let signature = document.querySelector("#signature");
signature.innerText = "FSW113 Week 6 Weather App from API by Rafael Fernandez";
document.body.appendChild(signature);