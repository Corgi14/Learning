/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return "";
  if (strs.length == 1) return strs[0];
  if (strs[0].length == 0) return "";
  let template = new Map<number, string>();
  let maximum = strs[0].length;
  for (let index = 0; index < maximum; index++) {
    const char = strs[0][index];
    template.set(index, char);
  }
  let minimum = maximum
  for (let index = 1; index < strs.length; index++) {
    let str = strs[index]
    minimum = Math.min(str.length, minimum)
    for (let i = 0; i < minimum; i++) {
        const char = str[i];
        if (template.get(i) != char) {
            minimum = i
            break
        }
    }
  }
  let res = ''
  for (let index = 0; index < minimum; index++) {
    res += template.get(index)
  }
  return res
}
// @lc code=end
