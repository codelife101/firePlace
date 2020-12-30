
function weGotThis(){
    $(".contentContainer").css("display","none");
    $(".questionContainer").css("display","flex");
}



function oneSub(){
    var x = document.forms["one"]["oneSub"].value;
if (x < 1) {
  alert("come on bruv you need to enter somthing");   
} 
else if (x =="1"){
    $("#one").css("display","none");
    $("#two").css("display","block");
} else{
    alert("try again / answer must be a numeral value");
}
}

function twoSub(){
    var x = document.forms["two"]["twoSub"].value;
if (x.length < 1) {
  alert("come on bruv you need to enter somthing");   
} 
else if (x =="2"){
    $("#two").css("display","none");
    $("#three").css("display","block");
} else{
    alert("try again / answer must be a numeral value");
}
}

function threeSub(){
    var x = document.forms["three"]["threeSub"].value;
if (x.length < 1) {
  alert("come on bruv you need to enter somthing");   
} 
else if (x =="1"){
    $("#three").css("display","none");
    $("#four").css("display","block");
} else{
    alert("try again / answer must be a numeral value");
}
}

function fourSub(){
    var x = document.forms["four"]["fourSub"].value;
if (x.length < 1) {
  alert("come on bruv you need to enter somthing");   
} 
else if (x =="1"){
    $(".questionContainer").css("display","none");
    $(".directionContent").css("display","flex");
} else{
    alert("try again / answer must be a numeral value");
}
}