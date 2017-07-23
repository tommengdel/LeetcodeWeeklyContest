/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s || s.length===0) return 0;
    else if (s.length===1) return s.length;
    
    var interStrings = [];
    var results = 0;
    for (var i=0; i < s.length; i++) {
        var j = 0;
        interStrings.push("");
        while (j < interStrings.length) {
            interStrings[j] += s[i];
            if (checkPalindromicString(interStrings[j])) {
                results += 1;
            } else if (interStrings[j].length + j > s.length - 1) {
                interStrings.splice(j, 1);
                continue;
            } 
            j++;
        }
        //interStrings.push(s[i]);
        //results.push(s[i]);
    }
    
    return results;
};

var checkPalindromicString = function(strings) {
    if (!strings && strings.length===0) return false;
    if (strings.length===1) return true;
    for (var i=0; i<Math.floor(strings.length/2);i++) {
        if (strings[i] !== strings[strings.length-i-1]) {
            return false;
        }
    }
    return true;
};