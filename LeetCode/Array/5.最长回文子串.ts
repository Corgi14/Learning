/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let p1 = palindrome(s, i, i);
    let p2 = palindrome(s, i, i + 1);
    res = p1.length > res.length ? p1 : res;
    res = p2.length > res.length ? p2 : res;
  }
  return res;
}
function palindrome(s: string, l: number, r: number): string {
  while (l >= 0 && r <= s.length - 1 && s.charAt(l) == s.charAt(r)) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
}
// @lc code=end
