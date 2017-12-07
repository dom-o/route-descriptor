 function getDescriptionTemplate() 
 {
    
 }
 
 getSentenceTemplate()
 {
    return 
 }
 
 
 function generateDescription(template) {
    template = template.split(' ');
    for(x in template) {
        if(words.hasOwnProperty(template[x])) {
            result += getRandomWord(template[x]);
        }
        else {
            result += template[x];
        }
        result += ' ';
    }
    return result;
 }
 
 