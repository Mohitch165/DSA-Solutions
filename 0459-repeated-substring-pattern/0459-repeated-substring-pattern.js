/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let lps = new Array(s.length).fill(0);
    let i = 1, j = 0;
    while(i < s.length){
        if(s[i] === s[j]){
            j++;
            lps[i] = j;
            i++;
        } else if(j !== 0){
            j = lps[j - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }

    let longestPrefixSufix = lps[s.length - 1];
    let shortestRepeatingPattern = s.length - longestPrefixSufix;

    return(longestPrefixSufix > 0 && s.length % shortestRepeatingPattern === 0);
};