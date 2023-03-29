const fahrenheit = 32;
const kelvin = 273.15;
const tempUnit = ['°fahrenheit','°kelvin'];

function convertToFahrenheit(celius){
    var result = (celius * 9/5) + fahrenheit;
    document.getElementById('temprature_convertion').value=result;
    document.getElementById('temprature_unit').innerHTML=tempUnit[0];
}

function convertToKelvin(celius){
    var result = celius + kelvin;
    document.getElementById('temprature_convertion').value=result;
    document.getElementById('temprature_unit').innerHTML=tempUnit[1];    
}
