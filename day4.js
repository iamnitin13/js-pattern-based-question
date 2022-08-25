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
