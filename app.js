let jsMin = 0;
let jsSec = 0;
let jsMsec = 0;
let interval = null;

function format(num) {
    return num < 10 ? "0" + num : num;
}

 function start(){
    if (interval !== null) return;
    document.getElementById("start").disabled = true;
    interval = setInterval(function(){
        jsMsec++
        document.getElementById("msec").innerHTML = format(jsMsec);
        if(jsMsec == 100){
            jsMsec = 0
            jsSec++
            document.getElementById("sec").innerHTML = format(jsSec);
        }
        if(jsSec == 60){
            jsSec = 0
            jsMin++
            document.getElementById("min").innerHTML =format(jsMin);
        }

    },10);
 
}

function stop() {
    clearInterval(interval);
    interval = null;
    document.getElementById("start").disabled = false;
}
function reset(){
    clearInterval(interval)
    jsMin = 0;
    jsSec = 0;
    jsMsec = 0;
    document.getElementById("msec").innerHTML = format(jsMsec);
    document.getElementById("sec").innerHTML = format(jsSec);
    document.getElementById("min").innerHTML = format(jsMin);
    interval = null;
    document.getElementById("start").disabled = false;


    
    
}