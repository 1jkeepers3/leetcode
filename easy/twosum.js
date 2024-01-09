// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// My solution

// array nums, nums can repeat, only use each element once always a num, whole num, target is always a num, always one solution, whole num 
// Indicies return indices that = the target



function findIndicies(nums, target) {
    //iterate through nums
      for(let i = 0; i<nums.length; i++){
    //iterate through nums again
        for(let k =i+1; k<nums.length; k++){
    //if nums[i] + nums[k] === target
          if(nums[i]+nums[k]===target){
            return [i,k]
          }
        }
      } 
  }
  
  //nums = [2,7,11,16], target = 9 => [0,1]
  //nums = [3,2,4], target = 6 => [1,2]
  //nums = [3,3], target = 6 => [0,1]
  
  let x= findIndicies([2,7,11,16], 9)
  let y = findIndicies([3,2,4], 6)
  let z = findIndicies([3,3],6)
  
  console.log(x, [0,1])
  console.log(y, [1,2])
  console.log(z, [0,1])