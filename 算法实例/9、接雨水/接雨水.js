/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxLeft = 0;
    let totalRainwater = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            // 左侧柱子矮或者相等时，更新左侧最大高度并移动left指针
            maxLeft = Math.max(maxLeft, height[left]);
            totalRainwater += maxLeft - height[left];
            left++;
        } else {
            // 右侧柱子矮时，更新右侧组大高度并移动right指针
            maxRight = Math.max(maxRight, height[right]);
            totalRainwater += maxRight - height[right];
            right--;
        }
    }
    return totalRainwater
};