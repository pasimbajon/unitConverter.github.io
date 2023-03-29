const pound = 2.20462
const gram = 1000
const milligram = 1000000
const weigthUnit = ['pounds','grams','milligrams'];

function convertToPound(kilograms){
    if(kilograms>=0){
        var result = kilograms * pound;
        document.getElementById('weight_convertion').value=result;
        document.getElementById('weight_unit').innerHTML=weigthUnit[0];
    }
}

function convertToGram(kilograms){
    if(kilograms>=0){
        var result = kilograms * gram;
        document.getElementById('weight_convertion').value=result;
        document.getElementById('weight_unit').innerHTML=weigthUnit[1];
    }
}

function convertToMilligram(kilograms){
    if(kilograms>=0){
        var result = kilograms * milligram;
        document.getElementById('weight_convertion').value=result;
        document.getElementById('weight_unit').innerHTML=weigthUnit[2];
    }
}