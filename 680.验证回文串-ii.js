/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 *
 * https://leetcode.cn/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (40.07%)
 * Likes:    620
 * Dislikes: 0
 * Total Accepted:    141.1K
 * Total Submissions: 352.2K
 * Testcase Example:  '"aba"'
 *
 * 给你一个字符串 s，最多 可以从中删除一个字符。
 * 
 * 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aba"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abca"
 * 输出：true
 * 解释：你可以删除字符 'c' 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "abc"
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^5
 * s 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isValidPalindrome(left, right) {
        while(left<right){
            if(s[left]!==s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left=0,right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return isValidPalindrome(left+1, right) || isValidPalindrome(left,right-1);
        }
        left++;
        right--;
    }
    return true;
};
// @lc code=end

