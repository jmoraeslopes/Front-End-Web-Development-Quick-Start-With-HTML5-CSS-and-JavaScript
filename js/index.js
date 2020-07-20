/*

*/
"use strict"

var msg = "Hello JavaScript!";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

console.log("msg is "+ typeof(msg));
console.log("resultDiv is "+ typeof(resultsDiv));

var none;
console.log("none is "+ typeof(none));

var aNumber = 10;
console.log("aNumber is "+ typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is "+ typeof(trueFalse));

if (!none){
    console.log("none is undefined")
}

if (aNumber === "10"){
    console.log("10 is 10")
}

/*function showMsg(msg) {
console.log("showMsg: "+msg)
}*/

function showMsg(msg,more){
    if(more){
        console.log("showMsg " +msg +more)
    } else {
        console.log("showMsg: " +msg)
    }
}

var showIt = function(msg,more){
    if(more){
        console.log("showMsg " +msg +more)
    } else {
        console.log("showMsg: " +msg)
    }
}

function showItThen(msg, callback){
    showIt(msg);
    callback();
}

showItThen("show it then called", function(){
    console.log("callback called");
});

showMsg("Teste");
showMsg("Teste", " e mais teste");
showIt("showIt teste");