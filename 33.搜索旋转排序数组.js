/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (44.13%)
 * Likes:    2876
 * Dislikes: 0
 * Total Accepted:    844.7K
 * Total Submissions: 1.9M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k],
 * nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始
 * 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        // >> 1 相当于除以2向下取整
        let mid = (start + end) >> 1;

        if (nums[mid] === target) {
            return mid;
        }

        // 如果中间数小于最右边数，则右半段是有序的
        // 如果中间数大于最右边数，则左半段是有序的
        if (nums[mid] < nums[end]) {
            // 判断target是否在(mid, end]之间
            if (nums[mid] < target && target <= nums[end]) {
                // 如果在，则中间数右移即start增大
                start = mid + 1;
            } else {
                // 如果不在，则中间数左移即end减小
                end = mid - 1;
            }
        } else {
            // [start, mid)
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;

};
// @lc code=end

