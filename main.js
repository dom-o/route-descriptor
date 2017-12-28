function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomWord(type, source) {
    rand = randomInt(source[type].length);
    return source[type][rand];
}

function expandTemplate(template, source) {
    result = '';
    template = template.split(' ');
    console.log(template);
    for(x=0; x<template.length; x++) {
        //if we get a probability token
        if(!isNaN(parseFloat(template[x])))
        {
            if(Math.random() >= parseFloat(x)) { //fail the probability test

                if(template[x+1] == '[') {
                    while(template[x] != ']') { //skip past all the failed probability tokens
                        x++; 
                    }
                }
                x++; //skip past closing bracket or single failed prob token
                //THIS MIGHT BE OFF BY ONE
            }
        }
        else if(template[x] == '[' || template[x] == ']') {
            //do nothing
        }
        else if(source.hasOwnProperty(template[x])) {
            result += getRandomWord(template[x], source);
        }
        else {
            result += template[x];
        }
        result += ' ';
    }
    return result;
}

function generateTemplate() {
    //beginning
    //start info
    //2-5 sentences
    template = '';
    numSentences = randomInt(3);
    template += patterns.big.startNE[randomInt(patterns.big.startNE.length)];
    template += ' ';
    template += patterns.big.startE[randomInt(patterns.big.startE.length)];
    template += ' ';
    console.log(template);
    for(i=1; i<numSentences; i++) {
        template += patterns.big.midE[randomInt(patterns.big.midE.length)];
        template += ' ';
    }
    
    console.log(template);
    return template;
}


function generateDescription(template) {
    template = expandTemplate(template, patterns.little);
    template = expandTemplate(template, words);
    return template;
}
 
document.getElementById('descriptor-gen').onclick = function() {
    document.getElementById('descriptor-space').textContent = generateDescription(generateTemplate());
};
 
 