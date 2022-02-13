// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.
// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
export default function reCast(kelvinTemp, myLocation){
    if (myLocation == "US") return((9 / 5 * (kelvinTemp - 273.15) + 32).toFixed(2)) + "F"
        else return (kelvinTemp - 273.15).toFixed(2) + "C"
        
}



//C = K - 273 (C = K - 273.15
// F = 9/5(K - 273) + 32 or F = 1.8(K - 273) + 32.