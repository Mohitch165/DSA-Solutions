/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1, lmax = 0, rmax = 0, totalWater = 0;
    while(left < right){
        lmax = Math.max(lmax, height[left]); // what i'm doing here is finding and setting my left bound of the container to trap water.
        rmax = Math.max(rmax, height[right]); //same here but for right bound

        if(lmax <= rmax){ // we always have to move the smaller bound after comparing because this is where the water would overflow from when it filled, not from the bigger bound, this tracks how much we can store.
            totalWater += lmax - height[left]; //reducing the cuurent index or height of the bound from our last tracked highest bound would give us how much water we can store.
            left++;
        } else {
            totalWater += rmax - height[right]; //same process as above but when right boundary is smaller than left.
            right--;
        }
    }

    return totalWater;
};