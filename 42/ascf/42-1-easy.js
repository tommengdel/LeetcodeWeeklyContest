/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var showups = [];
    var sum = 0;
    var results = [];
    for (var i=0; i<nums.length; i++) {
        if (showups[nums[i]] === 1) {
            results.push(nums[i]);
        }
        sum += nums[i];
        showups[nums[i]] = 1;
    }
    var x = nums.length * (nums.length + 1) / 2 - sum + results[0];
    results.push(x);
    return results;
};