const pound = 2.20462
const gram = 1000
const milligram = 1000000
const weigthUnit = ['Pounds','Grams','Milligrams'];

function convertToPound(kilograms){
    kilograms=filterBelowZero(kilograms);
    var result = kilograms * pound;
    document.getElementById('weight_convertion').value=result;
    document.getElementById('weight_unit').innerHTML=weigthUnit[0];
}

function convertToGram(kilograms){
    kilograms=filterBelowZero(kilograms);
    var result = kilograms * gram;
    document.getElementById('weight_convertion').value=result;
    document.getElementById('weight_unit').innerHTML=weigthUnit[1];
}

function convertToMilligram(kilograms){
    kilograms=filterBelowZero(kilograms);
    var result = kilograms * milligram;
    document.getElementById('weight_convertion').value=result;
    document.getElementById('weight_unit').innerHTML=weigthUnit[2];
}