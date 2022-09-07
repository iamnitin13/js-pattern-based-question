// ------------------------PATTERN 18---------------------
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

const printPattern18 = function (n, s = "") {
  for (let i = 0; i < 2 * n; i++) {
    if (i == n) continue;
    if (i < n) {
      var temp = 2 * i;
      for (let j = 0; j < n - i; j++) {
        s += "*";
      }
      for (let j = 0; j < temp; j++) {
        s += " ";
      }
      for (let j = 0; j < n - i; j++) {
        s += "*";
      }
    } else {
      for (let j = 0; j <= i - n; j++) {
        s += "*";
      }
      for (var k = 0; k < temp - 2; k++) {
        s += " ";
      }
      temp = k;
      for (let j = 0; j <= i - n; j++) {
        s += "*";
      }
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern18(5));

// ------------------------PATTERN 19---------------------
//     *        *
//     **      **
//     ***    ***
//     ****  ****
//     **********
//     ****  ****
//     ***    ***
//     **      **
//     *        *

const printPattern19 = function (n, s = "") {
  let temp = 2 * n;
  for (let i = 0; i < 2 * n; i++) {
    if (i < n) {
      temp -= 2;
      for (let j = 0; j <= i; j++) {
        s += "*";
      }
      for (let j = 0; j < temp; j++) {
        s += " ";
      }
      for (let j = 0; j <= i; j++) {
        s += "*";
      }
    } else {
      temp += 2;
      for (let j = 0; j <= i - temp; j++) {
        s += "*";
      }
      for (let j = temp; j > 0; j--) {
        s += " ";
      }
      for (let j = 0; j <= i - temp; j++) {
        s += "*";
      }
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern19(5));

// ------------------------PATTERN 20---------------------
// ****
// *  *
// *  *
// *  *
// ****

const printPattern20 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      for (let j = 0; j < n - 1; j++) {
        s += "*";
      }
    } else {
      for (let j = 0; j < n - 1; j++) {
        if (j == 0 || j == n - 2) {
          s += "*";
        } else {
          s += " ";
        }
      }
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern20(5));

// ------------------------PATTERN 21---------------------
// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444

const printPattern21 = function (n, s = "") {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > n - i; j--) {
      s += j;
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      s += n - i + 1;
    }
    for (let j = n - i + 1; j <= n; j++) {
      if (j == 1) continue;
      s += j;
    }
    s += "\n";
  }
  for (let i = n - 1; i > 0; i--) {
    for (let j = n; j > n - i; j--) {
      s += j;
    }
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      s += n - i + 1;
    }
    for (let j = n - i + 1; j <= n; j++) {
      s += j;
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern21(4));
