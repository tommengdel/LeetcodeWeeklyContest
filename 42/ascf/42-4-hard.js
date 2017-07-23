/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var i=0;
    var startIndex = -2;
    while(i<dict.length) {
        var keyword = dict[i];
        startIndex = sentence.indexOf(keyword, startIndex);
        if (startIndex === -1)  {
            i++;
            continue;
        } else if (startIndex !== 0 && sentence[startIndex-1]!==" ") {
            startIndex += 1;
            continue;
        }
        var endIndex = sentence.indexOf(" ", startIndex);
        if (endIndex === -1) {
            endIndex = sentence.length;
        }
        var newSentence = sentence.slice(0,startIndex) + keyword + sentence.slice(endIndex);
        if (sentence.length === newSentence.length) {
            startIndex += 1;
        } else {
            startIndex = 0;
            sentence = newSentence;
        }
    }
    return sentence;
};
