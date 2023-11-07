/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode.cn/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (63.52%)
 * Likes:    1169
 * Dislikes: 0
 * Total Accepted:    331.8K
 * Total Submissions: 522.7K
 * Testcase Example:  '[1,2,2]'
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort((a, b) => a-b);
    function backTrack(start,curr){
        result.push([...curr]);
        for (let i = start; i < nums.length; i++) {
            if(i>start && nums[i] === nums[i-1]){
                continue;
            }
            curr.push(nums[i]);
            backTrack(i+1,curr);
            curr.pop()
        }
    }
    backTrack(0,[]);
    return result;
};
// @lc code=end

