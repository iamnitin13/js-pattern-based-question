// ------------------------PATTERN 9---------------------

//     *
//     **
//     ***
//     ****
//     *****
//     ****
//     ***
//     **
//     *

const printPattern9 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s += "*";
    }
    s += "\n";
  }
  for (let i = n - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern9(5));

// ------------------------PATTERN 10---------------------
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

const printPattern10 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        s += "1 ";
      } else {
        s += "0 ";
      }
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern10(5));

// ------------------------PATTERN 11---------------------
// 1      1
// 12    21
// 123  321
// 12344321

const printPattern11 = function (n, s = "") {
  for (let i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      s += j;
    }
    for (let k = j; k <= 2 * n - i; k++) {
      s += " ";
    }
    for (let j = i; j >= 1; j--) {
      s += j;
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern11(4));

// ------------------------PATTERN 12---------------------
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const printPattern12 = function (n, s = "") {
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s += count + " ";
      count++;
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern12(5));

// ------------------------PATTERN 13---------------------
// A
// AB
// ABC
// ABCD
// ABCDE

const printPattern13 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s += String.fromCharCode(65 + j);
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern13(5));

// ------------------------PATTERN 14---------------------
// ABCDE
// ABCD
// ABC
// AB
// A

const printPattern14 = function (n, s = "") {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      s += String.fromCharCode(65 + j);
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern14(5));
