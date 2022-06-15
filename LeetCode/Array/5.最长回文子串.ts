/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let odd = palindrome(s, i, i);
    let even = palindrome(s, i, i + 1);
    res = res.length > odd.length ? res : odd;
    res = res.length > even.length ? res : even;
  }
  return res;
}
function palindrome(s: string, l: number, r: number) {
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
}
// @lc code=end
