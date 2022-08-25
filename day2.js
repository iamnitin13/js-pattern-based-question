// ------------------------PATTERN 5---------------------
// 12345
// 1234
// 123
// 12
// 1
const printPattern5 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      s += j;
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern5(5));

// ------------------------PATTERN 6---------------------
//     *
//    ***
//   *****
//  *******
// *********

const printPattern6 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      s += " ";
    }
    for (let k = 2 * i + 1; k > 0; k--) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern6(5));

// ------------------------PATTERN 7---------------------

// *********
//  *******
//   *****
//    ***
//     *

const printPattern7 = function (n, s = "") {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i; j++) {
      s += " ";
    }
    for (let k = 2 * i - 1; k > 0; k--) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern7(15));

// ------------------------PATTERN 8---------------------

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

const printPattern8 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      s += " ";
    }
    for (let k = 2 * i + 1; k > 0; k--) {
      s += "*";
    }
    s += "\n";
  }
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < n - i; j++) {
      s += " ";
    }
    for (let k = 2 * i - 1; k > 0; k--) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern8(5));
