import fs from "fs/promises";

async function sumOfDigits(filename) {
  try {
    const fileData = await fs.readFile(filename, "utf-8");

    const sum = fileData
      .trim()
      .split("\n")
      .reduce((total, item) => {
        const digits = item.match(/\d/g);
        if (digits) {
          const num = parseInt(digits[0] + digits[digits.length - 1]);
          return total + num;
        }
        return total;
      }, 0);

    console.log(`${sum}`);
    return sum;
  } catch (error) {
    console.log(error);
  }
}

sumOfDigits("input.txt");

// let finalResult = 0;
// const fileData = fs.readFileSync("input.txt", "utf-8");
//
// const fileDataArray = fileData.split("\n");
//
// const firstAndLast = (item) => {
//   let first = null;
//   let last = null;
//
//   for (let i = 0; i < item.length; i++) {
//     if (!isNaN(parseInt(item[i]))) {
//       first = parseInt(item[i]);
//       break;
//     }
//   }
//
//   for (let i = item.length - 1; i >= 0; i--) {
//     if (!isNaN(parseInt(item[i]))) {
//       last = parseInt(item[i]);
//       break;
//     }
//   }
//
//   return parseInt(`${first}${last}`);
// };
//
// fileDataArray.forEach((item) => {
//   const num = firstAndLast(item);
//   finalResult += num;
// });
//
// console.log(finalResult);
