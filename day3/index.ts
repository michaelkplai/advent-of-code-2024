import fs from "fs";
import path from "path";

function mulSum(input: string) {
  const matches = [...input.matchAll(/mul\(([\d]{1,3}),([\d]{1,3})\)/g)];

  let sum = 0;

  for (const match of matches) {
    const prod = Number(match[1]) * Number(match[2]);
    sum += prod;
  }

  console.log({ sum });
}

function toggleMulSum(input: string) {
  const matches = [
    ...input.matchAll(/mul\(([\d]{1,3}),([\d]{1,3})\)|(do\(\))|(don't\(\))/g),
  ];

  let enable = true;
  let sum = 0;

  for (const match of matches) {
    if (match[3] === `do()`) {
      enable = true;
    } else if (match[4] === `don't()`) {
      enable = false;
    } else if (enable) {
      sum += Number(match[1]) * Number(match[2]);
    }
  }

  console.log({ sum });
}

const DEMO_INPUT = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const TOGGLE_DEMO_INPUT = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const PUZZLE_INPUT = fs
  .readFileSync(path.join(__dirname, "./input.txt"))
  .toString();

mulSum(PUZZLE_INPUT);
toggleMulSum(PUZZLE_INPUT);
