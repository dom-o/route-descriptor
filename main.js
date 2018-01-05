function randomInt(max) {
    return Math.floor(Math.random() * max);
}

//taken from https://github.com/sebpearce/bullshit/blob/gh-pages/main.js
function replaceAWithAn(sentence) {
    return sentence.replace(/(^|\W)([Aa]) ["']?([aeiou])/g, '$1$2n $3');
}

//taken from https://github.com/sebpearce/bullshit/blob/gh-pages/main.js
function removeSpacesBeforePunctuation(sentence) {
    // remove spaces before commas/periods/semicolons
    return sentence.replace(/ +([!,\.;\?])/g, '$1');
}

//taken from https://github.com/sebpearce/bullshit/blob/gh-pages/main.js
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeLettersAfterPunctuation(sentence) {
    return sentence.replace(/[.!] +[a-z]/g, function(match) {
        return match.toUpperCase()
    });
}

function getRandomWord(type, source) {
    var rand = randomInt(source[type].length);
    return source[type][rand];
}

function addToTemplate(keyword, source) {
    if(keyword == '[' || keyword == ']') {
        return '';
    }
    else if(source.hasOwnProperty(keyword)) {
        return getRandomWord(keyword, source);
    }
    else {
        return keyword;
    }
}

function evalProbTest(template, y) {
    var bracketCount=0;
    var x = y;
    if(Math.random() >= parseFloat(template[x])) { //fail the probability test
        x++;
        if(template[x] == '[') {
            bracketCount++;
            while(bracketCount > 0) { //skip past all the failed probability tokens
                x++;
                if(template[x] == '[') { bracketCount++; }
                else if(template[x] == ']') { bracketCount--; }
            }
        }
    }
    return x;
}

function evalOrBlock(template, source, y) {
    var orResult, bracketCount=0;
    var i=0;
    var x =y;
    var numOptions = parseInt(template[x+1]);
    var selected = randomInt(numOptions);
    var keywords = '';
    
    while(i<numOptions) {
        x++;
        if(template[x] == '[') {
            bracketCount++;
            if(i == selected) {
                while(bracketCount > 0) {
                    x++;
                    if(template[x] == '?') {
                        orResult = evalOrBlock(template, source, x);
                        
                        keywords += orResult.keywords + ' ';
                        x = orResult.x;
                    }
                    else if(!isNaN(parseFloat(template[x]))) { //if we get a probability token
                        x=evalProbTest(template, x);
                    }
                    else if(template[x] == '[') { bracketCount++; }
                    else if(template[x] == ']') { bracketCount--; }
                    else {
                        keywords += addToTemplate(template[x], source) + ' ';
                    }
                }
            }
            else {
                while(bracketCount > 0) { 
                    x++; 
                    if(template[x] == '[') { bracketCount++; }
                    else if(template[x] == ']') { bracketCount--; }
                }
            }
            i++;
        }
    }
    return {
        x: x,
        keywords: keywords
    };
}

function expandTemplate(template, source) {
    var x, orResult;
    var result = '';
    console.log(template);
    
    template = template.split(' ');
    for(x=0; x<template.length; x++) {
        if(template[x] == '?') {
            orResult = evalOrBlock(template, source, x);

            result += orResult.keywords + ' ';
            x = orResult.x;
        }
        else if(!isNaN(parseFloat(template[x]))) { //if we get a probability token
            x=evalProbTest(template, x);
        }
        else {
            result += addToTemplate(template[x], source) + ' ';
        }
    }
    return result;
}

function generateTemplate() {
    //beginning
    //start info
    //2-5 sentences
    var i;
    var template = '';
    var numSentences = randomInt(1)+1;
    
    template += patterns.big.startNE[randomInt(patterns.big.startNE.length)] + ' ';
    template += patterns.big.startE[randomInt(patterns.big.startE.length)] + ' ';
    
    for(i=0; i<numSentences; i++) {
        template += patterns.big.midE[randomInt(patterns.big.midE.length)] + ' ';
    }
    
    template += patterns.big.finishNE[randomInt(patterns.big.finishNE.length)] + ' ';
    
    return template;
}


function generateDescription(template) {
    template = expandTemplate(template, patterns.little);
    template = expandTemplate(template, words);
    
    template = replaceAWithAn(template);
    template = template.trim();
    template = removeSpacesBeforePunctuation(template);
    template = capitalizeLettersAfterPunctuation(template);
    template = capitalizeFirstLetter(template);
    return template;
}
 
document.getElementById('descriptor-gen').onclick = function() {
    document.getElementById('descriptor-space').textContent = generateDescription(generateTemplate());
};
 
 