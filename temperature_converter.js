const fahrenheit = 32;
const kelvin = 273.15;
const tempUnit = ['°Fahrenheit','°Kelvin'];

function convertToFahrenheit(celsius){
    var result = (celsius * 9/5) + fahrenheit;
    document.getElementById('temprature_convertion').value=result;
    document.getElementById('temprature_unit').innerHTML=tempUnit[0];
}

function convertToKelvin(celsius){
    var result = celsius + kelvin;
    document.getElementById('temprature_convertion').value=result;
    document.getElementById('temprature_unit').innerHTML=tempUnit[1];    
}
