/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0, j = s.length - 1, temp = 0;
    while(i < j){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};