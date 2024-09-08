import fs from "fs/promises";

const sumOfDigists = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath, "utf-8");

    const numberWords = {
      zero: "0",
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    };

    const regex = new RegExp(
      `(?=(\\d|${Object.keys(numberWords).join("|")}))`,
      "g"
    );

    const sum = fileData
      .trim()
      .split("\n")
      .reduce((total, line) => {
        const matches = [...line.matchAll(regex)].map((m) => m[1]);
        console.log(matches);
        if (matches.length) {
          const firstDigit = numberWords[matches[0]] || matches[0];
          const lastDigit =
            numberWords[matches[matches.length - 1]] ||
            matches[matches.length - 1];
          console.log(firstDigit, lastDigit);
          const num = parseInt(firstDigit + lastDigit);

          return total + num;
        }
        return total;
      }, 0);

    console.log(sum);

    return sum;
  } catch (error) {
    console.log(error);
  }
};

sumOfDigists("input.txt");
