// ------------------------PATTERN 1---------------------
// *****
// *****
// *****
// *****
// *****
const printPattern1 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern1(5));

// ------------------------PATTERN 2---------------------
// *
// **
// ***
// ****
// *****

const printPattern2 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern2(5));

// ------------------------PATTERN 3---------------------
// 1
// 12
// 123
// 1234
// 12345
const printPattern3 = function (n, s = "") {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      s += j;
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern3(5));

// ------------------------PATTERN 4---------------------
// 1
// 22
// 333
// 4444
// 55555
const printPattern4 = function (n, s = "") {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      s += i;
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern4(5));

// ------------------------PATTERN 5---------------------
// *****
// ****
// ***
// **
// *
const printPattern5 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (j = n - i; j > 0; j--) {
      s += "*";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern5(5));
