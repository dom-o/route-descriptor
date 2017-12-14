function randomInt(max) {
    return Math.floor(Math.random() * max);
}

/*generateTemplate() {
    //beginning
    //start info
    //2-5 sentences
    template = '';
    
    
    
}*/


function generateDescription() {
    /*template = template.split(' ');
    for(x in template) {
        if(words.hasOwnProperty(template[x])) {
            result += getRandomWord(template[x]);
        }
        else {
            result += template[x];
        }
        result += ' ';
    }
    return result;*/
    return 'aayyy';
}
 
document.getElementById('descriptor-gen').onclick = function() {
    document.getElementById('descriptor-space').textContent = generateDescription();
};
 
 