/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort(sortPair);
    var max = 0;
    var lastMax = null;
    for (var i=0; i<pairs.length; i++) {
        if (lastMax===null || pairs[i][0]>lastMax) {
            max += 1;
            lastMax = pairs[i][1];
        }
    }
    return max;
};

var sortPair = function(pair1, pair2) {
    if (pair1[1]<pair2[1]) {
        return -1;
    } else if (pair1[1]>pair2[1]) {
        return 1;
    } else if (pair1[0]<pair2[0]) {
        return -1;
    } else if (pair1[0]>pair2[0]) {
        return 1;
    } 
}