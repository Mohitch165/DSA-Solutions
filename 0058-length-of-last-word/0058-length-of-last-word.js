/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = [];
    arr = s.split(" ");
    let j = arr.length - 1;
    while(arr[j] == ''){
        j--;
    }

    let result = arr[j];
    return result.length;
};