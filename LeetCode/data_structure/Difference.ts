class Difference {
  private diff: number[];

  constructor(nums: number[]) {
    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }

  increament(i: number, j: number, val: number) {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  result(): number[] {
    let res = new Array(this.diff.length);
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = this.diff[i] + res[i - 1];
    }
    return res;
  }
}

export default Difference;
