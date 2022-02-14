var ss=0;
var mn=0;
var hr=0;
var timer;

function f_start(){
    document.getElementById("start_button").style.display="none";
    document.getElementById("plpa_button").style.display="inline";
    document.getElementById("reset_button").style.display="inline";

    startTimer();
}

function f_plpa(){
    var pp = document.getElementById("plpa_button");
    if(pp.innerHTML=="Pause"){
        pp.innerHTML="Play";
        stopTimer();
    }
    else{
        pp.innerHTML="Pause";
        startTimer();
    }
}

function f_reset(){
    document.getElementById("reset_button").style.display="none";
    document.getElementById("plpa_button").style.display="none";
    document.getElementById("start_button").style.display="inline";

    clearTimeout(timer);
    mn=0;
    ss=0;

    document.getElementById("min").innerText="00";
    document.getElementById("sec").innerText="00";
}

function startTimer(){

    ss=ss+1;

    if(ss>=60){
        mn=mn+1;
        ss=0;
    }
    document.getElementById("min").innerText=doubleDigit(mn);
    document.getElementById("sec").innerText=doubleDigit(ss);

    timer=setTimeout("startTimer()", 1000);
}

function stopTimer(){

    clearTimeout(timer);

    document.getElementById("min").innerText=doubleDigit(mn);
    document.getElementById("sec").innerText=doubleDigit(ss);
}

function doubleDigit(x){
    if(x<10)
        return 0+""+x
    else
        return x;
}