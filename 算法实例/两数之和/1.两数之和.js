// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]


// 两层遍历 大概次数是n*n   时间o(n^2)也就是n*n  空间复杂度o（1）
// 一次遍历循环 时间复杂度是O(n)  空间复杂度O(n)

// 一次遍历循环
var twoSum = function(nums,target){
    let obj = {};
    for(let i = 0, length = nums.length; i < length; i++){
        const num = nums[i]
        if(num in obj){
            return [obj[num],i]
        }else{
            obj[target - num] = i;
        }
    }
}

// 两层遍历
var twoSum1 = function(nums,target){
    let length = nums.length
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
          if(nums[i]+nums[j] === target && i !== j){
              return [i,j]
          }
        }
    }
}