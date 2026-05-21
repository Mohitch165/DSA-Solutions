/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = strs[0]
    let l = prefix.length

    for (let i = 1; i < strs.length; i++) {

        let current = strs[i].slice(0, l)
        console.log(current);

        while (current !== prefix) {
            l--
            prefix = prefix.slice(0, l)
            current = current.slice(0, l)

        }

        prefix = current

    }

    return prefix

};