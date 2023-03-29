const second = 60;
const millisecond = 60000;
const microsecond = 60000000;
const timeUnit = ['second','millisecond','microsecond'];

function convertToSecond(minutes){
    if(minutes>=0){
        var result = minutes * second;
        document.getElementById('time_convertion').value=result;
        document.getElementById('time_unit').innerHTML=timeUnit[0];
    }
}

function convertToMillisecond(minutes){
    if(minutes>=0){
        var result = minutes * millisecond;
        document.getElementById('time_convertion').value=result;
        document.getElementById('time_unit').innerHTML=timeUnit[1];
    }
}

function convertToMicrosecond(minutes){
    if(minutes>=0){
        var result = minutes * microsecond;
        document.getElementById('time_convertion').value=result;
        document.getElementById('time_unit').innerHTML=timeUnit[2];
    }
}