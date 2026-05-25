/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    // Approach using stack, O(n) time & space
    // const build = (str) => {
    //     const stack = [];

    //     for (let char of str) {
    //         if (char === '#') {
    //             stack.pop();
    //         } else {
    //             stack.push(char);
    //         }
    //     }

    //     return stack.join('');
    // };

    // return build(s) === build(t);

    // Approach using two pointers, O(n) time, 0(1) space

    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {

        let skipS = 0;
        let skipT = 0;

        while (i >= 0) {
            if (s[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }

        while (j >= 0) {
            if (t[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        
        if (s[i] !== t[j]) {
            return false;
        }

        i--;
        j--;
    }

    return true;
};