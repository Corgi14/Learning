function slideWindow(s: string, t: string) {
  type obj = {
    [key: string]: number;
  };
  let need: obj = {},
    win: obj = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }
  let left = 0,
    right = 0;
  let valid = 0;
  while (right < s.length) {
    let c = s[right];
    right++;

    //update window

    //shrink win or not
    while (true) {
      let d = s[left];
      left++;

      //update window
    }
  }
}
// 思考
// 1、当移动 right 扩大窗口，即加入字符时，应该更新哪些数据？

// 2、什么条件下，窗口应该暂停扩大，开始移动 left 缩小窗口？

// 3、当移动 left 缩小窗口，即移出字符时，应该更新哪些数据？

// 4、我们要的结果应该在扩大窗口时还是缩小窗口时进行更新？
