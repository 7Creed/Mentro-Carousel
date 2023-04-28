// 1. create a function to get Stars in an array 
// in terms of 1 (full) and 1/2 (half)

const getstars = (num) => {
  // 5 || 5.0 - [1, 1, 1, 1, 1]
  // 4.5 - [1, 1, 1, 1, 0.5]
  // 3.9 - [1, 1, 1, 0.5]

  const starsArr = [];
  while (num > 0) {
    if (num >= 1) {
      starsArr.push(1);
      num--;
    } else {
      starsArr.push(0.5);
      num = 0;
    }
  }
  return starsArr;
};
console.log(getstars(5));
