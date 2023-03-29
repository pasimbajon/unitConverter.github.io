const inch = 39.3701;
const mile = 1609;
const yard = 1.094;
const lengthUnit = ['Inches','Miles','Yards'];

function convertToInch(meters){ 
    meters=filterBelowZero(meters);
    var result = meters * inch;
    document.getElementById('length_convertion').value=result;
    document.getElementById('length_unit').innerHTML=lengthUnit[0];
}

function convertToMile(meters){  
    meters=filterBelowZero(meters);
    var result = meters / mile;
    document.getElementById('length_convertion').value=result;
    document.getElementById('length_unit').innerHTML=lengthUnit[1];
}

function convertToYard(meters){
    meters=filterBelowZero(meters);
    var result = meters * yard;
    document.getElementById('length_convertion').value=result;
    document.getElementById('length_unit').innerHTML=lengthUnit[2];
}