//ex1
const draw1 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  console.log(result);
};

draw1(3);

//ex2
const draw2 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};

draw2(3);

//ex3
const count = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= num; j++) {
      result += j;
    }
    result += "\n";
  }
  console.log(result);
};

count(3);

//ex.4

const count2 = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num; j++) {
      result += i;
    }
    result += "\n";
  }
  console.log(result);
};

count2(3);

//ex.5

const count3 = (num) => {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < num; j++) {
      result += i;
    }
    result += "\n";
  }
  console.log(result);
};

count3(3);

//ex.6

const count4 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += 1 + num * i + j;
    }
    result += "\n";
  }
  return result;
};

console.log(count4(3));

//ex.7

const count5 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += num * (num - i) - j;
    }
    result += "\n";
  }
  return result;
};

console.log(count5(4));

//ex.8

const count6 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += i * 2;
    result += "\n";
  }
  return result;
};

console.log(count6(4));

//ex.9

const count7 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += i * 2 + 2;
    result += "\n";
  }
  return result;
};

console.log(count7(4));

//ex.10

const count8 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= num; j++) {
      result += j * (i + 1);
    }
    result += "\n";
  }
  return result;
};

console.log(count8(4));

//ex.11

const star = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += j != i ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star(3));

//ex.12

const star2 = (num) => {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= num; j++) {
      result += j != i ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star2(3));

//ex.13

const star3 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += j <= i ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star3(3));

//ex.14

const star4 = (num) => {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < num; j++) {
      result += j >= i ? "-" : "*";
    }
    result += "\n";
  }
  return result;
};

console.log(star4(3));

//ex.15

const star5 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += j <= i ? "*" : "-";
    }
    result += "\n";
  }
  for (let a = num - 1; a > 0; a--) {
    for (let b = 1; b <= num; b++) {
      result += a >= b ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star5(3));

//ex.16

const star6 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += j <= i ? i + 1 : "-";
    }
    result += "\n";
  }
  for (let a = num - 1; a > 0; a--) {
    for (let b = 1; b <= num; b++) {
      result += a >= b ? a : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star6(3));

//ex.17

const star7 = (num) => {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= num; j++) {
      result += j >= i ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(star7(4));

//ex.18

const star8 = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += j < i ? "-" : "*";
    }
    result += "\n";
  }
  return result;
};

console.log(star8(4));

//ex.19

const star9 = (num) => {
  let result = "";
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= num; j++) {
      result += j >= i ? "*" : "-";
    }
    result += "\n";
  }

  for (let a = 0; a < num - 1; a++) {
    for (let b = 0; b < num; b++) {
      result += b <= a ? "-" : "*";
    }
    result += "\n";
  }
  return result;
};

console.log(star9(4));

//ex.20

const star10 = (num) => {
  let result = "";
  let count = 1;
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= num; j++) {
      if (j >= i) {
        result += count;
        count++;
      } else {
        result += "-";
      }
    }
    result += "\n";
  }

  for (let a = 0; a < num - 1; a++) {
    for (let b = 0; b < num; b++) {
      if (b <= a) {
        result += "-";
      } else {
        result += count;
        count++;
      }
    }
    result += "\n";
  }
  return result;
};

console.log(star10(4));

//ex.21

// n = 2, maxStar = 3
// n = 3, maxStar = 5
// n = 4, maxStar = 7
// n = 5, maxStar = 9

// i+num -1
const draw21 = (num) => {
  let maxLength = 2 * num - 1,
    middle = Math.round(maxLength / 2),
    range = [middle, middle],
    result = "";
  for (let i = 1; i <= num; i++, range[0]--, range[1]++) {
    for (let j = 1; j <= maxLength; j++) {
      result += j <= range[1] && j >= range[0] ? "*" : "-";
    }
    result += "\n";
  }

  return result;
};

console.log(draw21(4));

//ex.22

const draw22 = (num) => {
  let maxLength = 2 * num - 1,
    base = 0,
    range = [base, maxLength],
    result = "";
  for (let i = 1; i <= num; i++, range[0]++, range[1]--) {
    for (let j = 1; j <= maxLength; j++) {
      result += j <= range[1] && j > range[0] ? "*" : "-";
    }
    result += "\n";
  }

  return result;
};

console.log(draw22(4));

//ex.23

const draw23 = (num) => {
  let maxLength = 2 * num - 1,
    base = 1,
    middle = Math.round(maxLength / 2),
    range = [middle, middle],
    range2 = [base, maxLength - 1];
  result = "";
  for (let i = 1; i <= num; i++, range[0]--, range[1]++) {
    for (let j = 1; j <= maxLength; j++) {
      result += j <= range[1] && j >= range[0] ? "*" : "-";
    }
    result += "\n";
  }

  for (let a = 1; a < num; a++, range2[0]++, range2[1]--) {
    for (let b = 1; b <= maxLength; b++) {
      result += b <= range2[1] && b > range2[0] ? "*" : "-";
    }
    result += "\n";
  }
  return result;
};

console.log(draw23(4));

//ex.24

const draw24 = (num) => {
  let maxLength = 2 * num - 1,
    count = 1,
    base = 1,
    middle = Math.round(maxLength / 2),
    range = [middle, middle],
    range2 = [base, maxLength - 1],
    result = "";
  for (let i = 1; i <= num; i++, range[0]--, range[1]++) {
    for (let j = 1; j <= maxLength; j++) {
      if (j <= range[1] && j >= range[0]) {
        result += count;
        count++;
      } else {
        result += "-";
      }
    }
    result += "\n";
  }

  for (let a = 1; a < num; a++, range2[0]++, range2[1]--) {
    for (let b = 1; b <= maxLength; b++) {
      if (b <= range2[1] && b > range2[0]) {
        result += count;
        count++;
      } else {
        result += "-";
      }
    }
    result += "\n";
  }

  return result;
};

console.log(draw24(3));
