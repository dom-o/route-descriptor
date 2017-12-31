function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomWord(type, source) {
    rand = randomInt(source[type].length);
    return source[type][rand];
}

function addToTemplate(keyword, source) {
    if(source.hasOwnProperty(keyword)) {
        return getRandomWord(keyword, source);
    }
    else {
        return keyword;
    }
}

function expandTemplate(template, source) {
    result = '';
    i=0;
    template = template.split(' ');
    for(x=0; x<template.length; x++) {
        /*if(template[x] == '?') {
            x++;
            console.log(template[x]);
            numOptions = parseInt(template[x]);
            selected = randomInt(numOptions);
            while(i<numOptions) {
                if(i==selected) {
                    while(template[x] != '[') { x++; }
                    while(template[x] != ']') {
                        x++;
                        result += addToTemplate(template[x], source);
                    }
                }
                if(template[x] == '[') {i++;}
            }
            //while(template[x] != ']') { x++; }
        }*/
        if(!isNaN(parseFloat(template[x]))) //if we get a probability token
        {
            rand = Math.random();
            if(rand >= parseFloat(template[x])) { //fail the probability test
                if(template[x+1] == '[') {
                    while(template[x] != ']') { //skip past all the failed probability tokens
                        x++;
                    }
                }
            }
        }
        else if(template[x] == '[' || template[x] == ']') {
            //do nothing
        }
        else {
            result += addToTemplate(template[x], source);
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
    numSentences = randomInt(1)+1;
    console.log(numSentences);
    template += patterns.big.startNE[randomInt(patterns.big.startNE.length)] + ' ';
    template += patterns.big.startE[randomInt(patterns.big.startE.length)] + ' ';
    
    for(i=0; i<numSentences; i++) {
        template += patterns.big.midE[randomInt(patterns.big.midE.length)] + ' ';
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
 
 