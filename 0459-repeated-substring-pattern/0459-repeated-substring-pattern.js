/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const lps = new Array(s.length).fill(0);

    let len = 0;
    let i = 1;

    while (i < s.length) {

        if (s[i] === s[len]) {
            len++;
            lps[i] = len;
            i++;
        }

        else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    
    let l = lps[s.length - 1];
    let patternLength = s.length - l;

    return(l > 0 && s.length % patternLength === 0);
};