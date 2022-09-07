// ------------------------PATTERN 15---------------------
// A
// BB
// CCC
// DDDD
// EEEEE

const printPattern15 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    const str = String.fromCharCode(65 + i);
    for (let j = 0; j <= i; j++) {
      s += str;
    }
    s += "\n";
  }
  return s;
};

// console.log(printPattern15(5));

// ------------------------PATTERN 16---------------------
//    A
//   ABA
//  ABCBA
// ABCDCBA

const printPattern16 = function (n, s = "") {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      s += " ";
    }
    let ss = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j > i) {
        ss += String.fromCharCode(ss.charCodeAt(ss.length - 1) - 1);
      } else {
        ss += String.fromCharCode(65 + j);
      }
    }
    s += ss + "\n";
  }
  return s;
};
// console.log(printPattern16(6));

// ------------------------PATTERN 17---------------------
// E
// D E
// C D E
// B C D E
// A B C D E

const printPattern17 = function (n, s = "") {
  for (let i = n; i > 0; i--) {
    for (let j = i; j <= n; j++) {
      s += String.fromCharCode(65 + j - 1) + " ";
    }
    s += "\n";
  }
  return s;
};
// console.log(printPattern17(5));
