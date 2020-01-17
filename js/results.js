/*eslint-env browser*/
"use strict";
var request = new XMLHttpRequest();
request.open("GET", "js/results.json", false);
request.send(null)
var jsonResults = JSON.parse(request.responseText);

var fs = require('fs');

fs.readFile('js/results.json', 'utf8', function (err, contents) {
    console.log(contents);
});




function firstMatch() {

    var overallMatch = [];
    var overallMaps = [];
    //Last object to array
    var results = jsonResults.matches;

    results = results[Object.keys(results)[Object.keys(results).length - 1]];

    var overallResult = checkMapResults(results);

    var mapResults = checkMapsAndPoints(results);

    var mapIds = document.getElementsByClassName("map1");

    var resultIds = document.getElementsByClassName("result1");

    overallMatch.push(results.team1, overallResult[0], overallResult[1], results.team2);




    for (var d = 0; d < resultIds.length; d++) {
        document.getElementById(resultIds[d].id).innerHTML = overallMatch[d];
    }

    for (var d = 0; d < mapResults.length; d++) {
        document.getElementById(mapIds[d].id).innerHTML = mapResults[d];
    }


}

function secondMatch() {

    var overallMatch = [];
    var overallMaps = [];
    //Last object to array
    var results = jsonResults.matches;
    results = results[Object.keys(results)[Object.keys(results).length - 2]];

    var overallResult = checkMapResults(results);

    var mapResults = checkMapsAndPoints(results);

    var mapIds = document.getElementsByClassName("map2");

    var resultIds = document.getElementsByClassName("result2");

    overallMatch.push(results.team1, overallResult[0], overallResult[1], results.team2);




    for (var d = 0; d < resultIds.length; d++) {
        document.getElementById(resultIds[d].id).innerHTML = overallMatch[d];
    }

    for (var d = 0; d < mapResults.length; d++) {
        document.getElementById(mapIds[d].id).innerHTML = mapResults[d];
    }


}

function thirdMatch() {

    var overallMatch = [];
    var overallMaps = [];
    //Last object to array
    var results = jsonResults.matches;
    results = results[Object.keys(results)[Object.keys(results).length - 3]];

    var overallResult = checkMapResults(results);

    var mapResults = checkMapsAndPoints(results);

    var mapIds = document.getElementsByClassName("map3");

    var resultIds = document.getElementsByClassName("result3");

    overallMatch.push(results.team1, overallResult[0], overallResult[1], results.team2);




    for (var d = 0; d < resultIds.length; d++) {
        document.getElementById(resultIds[d].id).innerHTML = overallMatch[d];
    }

    for (var d = 0; d < mapResults.length; d++) {
        document.getElementById(mapIds[d].id).innerHTML = mapResults[d];
    }


}

function fourthMatch() {

    var overallMatch = [];
    var overallMaps = [];
    //Last object to array
    var results = jsonResults.matches;
    results = results[Object.keys(results)[Object.keys(results).length - 4]];

    var overallResult = checkMapResults(results);

    var mapResults = checkMapsAndPoints(results);

    var mapIds = document.getElementsByClassName("map4");

    var resultIds = document.getElementsByClassName("result4");

    overallMatch.push(results.team1, overallResult[0], overallResult[1], results.team2);




    for (var d = 0; d < resultIds.length; d++) {
        document.getElementById(resultIds[d].id).innerHTML = overallMatch[d];
    }

    for (var d = 0; d < mapResults.length; d++) {
        document.getElementById(mapIds[d].id).innerHTML = mapResults[d];
    }


}

function checkMapResults(results) {
    var mapResults = [];
    var j = 0;
    var i = 1;

    var overallResult = [0, 0];
    for (var key in results) {
        if ($.isArray(results[key])) {
            mapResults.push(results[key]);
        }

    }

    for (var z = 0; z < mapResults.length; z++) {
        if (mapResults[z][j] > mapResults[z][i]) {
            overallResult[0]++;
        } else {
            overallResult[1]++;
        }
    }



    return overallResult;
}

function checkMapsAndPoints(results) {

    var mapResults = [];
    var sapResults = Object.keys(results).slice(2).reduce((result, key) => {
        result[key] = results[key];

        return result;
    }, {});

    mapResults.push(Object.values(sapResults));

    var z = 0;
    var g = 1;

    var map = [];
    mapResults[0].forEach((value, index) => {
        if ((index + 1) % 2 === 0) {
            map.push(mapResults[0][index][0]);
            map.push(mapResults[0][index][1]);

        }
    })

    var q = map.length / 2;


    for (var d = 0; d < q; d++) {
        map.splice(g, 0, mapResults[0][z]);
        g += 3;
        z += 2;

    }

    return map;

}


function launchMatches() {
    firstMatch();
    secondMatch();
    thirdMatch();
    fourthMatch();
}
