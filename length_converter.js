const inch = 39.3701;
const mile = 0.000621371;
const yard = 1.09361;
const lengthUnit = ['inches','miles','yards'];

function convertToInch(meters){
    if(meters>=0){
        var result = meters * inch;
        document.getElementById('length_convertion').value=result;
        document.getElementById('length_unit').innerHTML=lengthUnit[0];
    }
}

function convertToMile(meters){
    if(meters>=0){
        var result = meters * mile;
        document.getElementById('length_convertion').value=result;
        document.getElementById('length_unit').innerHTML=lengthUnit[1];
    }
}

function convertToYard(meters){
    if(meters>=0){
        var result = meters * yard;
        document.getElementById('length_convertion').value=result;
        document.getElementById('length_unit').innerHTML=lengthUnit[2];
    }
}