const second = 60;
const millisecond = 60000;
const microsecond = 60000000;
const timeUnit = ['Second','Millisecond','Microsecond'];

function convertToSecond(minutes){
    minutes=filterBelowZero(minutes);
    var result = minutes * second;
    document.getElementById('time_convertion').value=result;
    document.getElementById('time_unit').innerHTML=timeUnit[0];
    
}

function convertToMillisecond(minutes){
    minutes=filterBelowZero(minutes);
    var result = minutes * millisecond;
    document.getElementById('time_convertion').value=result;
    document.getElementById('time_unit').innerHTML=timeUnit[1];
}

function convertToMicrosecond(minutes){
    minutes=filterBelowZero(minutes);
    var result = minutes * microsecond;
    document.getElementById('time_convertion').value=result;
    document.getElementById('time_unit').innerHTML=timeUnit[2];
}