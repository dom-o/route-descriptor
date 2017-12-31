function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomWord(type, source) {
    rand = randomInt(source[type].length);
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

function evalProbTest(template, x) {
    rand = Math.random();
    if(rand >= parseFloat(template[x])) { //fail the probability test
        if(template[x+1] == '[') {
            while(template[x] != ']') { //skip past all the failed probability tokens
                x++;
            }
        }
        else { x++; }
    }
    return x;
}

function expandTemplate(template, source) {
    result = '';
    i=0;
    console.log(template);
    template = template.split(' ');
    for(x=0; x<template.length; x++) {
        if(template[x] == '?') {
            i=0;
            numOptions = parseInt(template[x+1]);
            selected = randomInt(numOptions);

            while(i<numOptions) {
                x++;
                if(template[x] == '[') {
                    if(i == selected) {
                        while(template[x] != ']') {
                            x++;
                            if(!isNaN(parseFloat(template[x]))) { //if we get a probability token
                                x=evalProbTest(template, x);
                            }
                            else {
                                result += addToTemplate(template[x], source) + ' ';
                            }
                        }
                    }
                    else {
                        while(template[x] != ']') { x++; }
                    }
                    i++;
                }
            }            
        }
        if(!isNaN(parseFloat(template[x]))) //if we get a probability token
        {
            x=evalProbTest(template, x);
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
    template += patterns.big.startNE[randomInt(patterns.big.startNE.length)] + ' ';
    template += patterns.big.startE[randomInt(patterns.big.startE.length)] + ' ';
    
    for(i=0; i<numSentences; i++) {
        template += patterns.big.midE[randomInt(patterns.big.midE.length)] + ' ';
    }
    
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
 
 