/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (73.48%)
 * Likes:    1742
 * Dislikes: 0
 * Total Accepted:    372.5K
 * Total Submissions: 507K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    function isHuiWen(s, left, right) {
        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return false;
            }
            
        }
        return true;
    }

    let result = [];
    let path = [];
    function dfs(i) {
        if (i === s.length) {
            result.push(path.slice()); // 复制 path
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isHuiWen(s, i, j)) {
                path.push(s.substring(i, j + 1));
                dfs(j+ 1);
                path.pop();
            }
        }
    }
    dfs(0);
    return result;
};
// @lc code=end

