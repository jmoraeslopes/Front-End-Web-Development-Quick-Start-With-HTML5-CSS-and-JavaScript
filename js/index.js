/*

*/
"use strict"

var msg = "Hello JavaScript!";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

/* var result = {
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function(){

    },
    owner: {
        login: "jmlopes"
        id: 123456
    }
}; */

/* result.phoneNumber = "123-456-7890";
console.log(result.phoneNumber); */

var results = [{
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function(){

    },
    owner: {
        login: "jmlopes",
        id: 123456
    }
},{
    name: "jQuery UI",
    language: "JavaScript",
    score: 3.5,
    showLog: function(){

    },
    owner: {
        login: "jmlopes",
        id: 123456
    }

}];

console.log(results.length);
console.log(results[0].owner);

/* results.push(result);
results.push({
    name: "dummy Project"
}) */

/* console.log("msg is "+ typeof(msg));
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

var inGlboal = true;

function testMe(){
    console.log("testMe(): " +inGlboal);

    var someMsg = "some Message";
    console.log("testMe(): " +someMsg)

    showItThen("with Closure ", function (){
        showIt("testMe With Closure(): " +someMsg);
    });
}

testMe(); */
