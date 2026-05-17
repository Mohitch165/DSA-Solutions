/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1, j = 1;
    while(j < nums.length){
        if(nums[j] !== nums[i - 1]){
            nums[i] = nums[j];
            i++;
        }
        j++;
    }

    return i;
};