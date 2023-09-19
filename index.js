/*-------DUPLICATE----------*/
const testArr = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"];
function duplicateFn(arr) {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
        break;
      }
    }
  }

  return result;
}
/*********TWO-SUM*********/
let numbers = [1, 2, 3];
target = 4;
function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        if (result.length === 2) {
          break;
        }
        result.push(i);
        result.push(j);
        break;
      }
    }
  }
  return result;
}

/**********GROUPING ANARGAMS**********/
const words = ["rat", "tar", "star"];
function groupAnagrams(words) {
  const groups = {};
  words.forEach((word) => {
    const s = word.split("").sort().join("");
    groups[s] = (groups[s] || []).concat(word);
  });

  const resultArr = Object.keys(groups).reduce((acc, item) => {
    return [...acc, groups[item]];
  }, []);

  return resultArr;
}

const result = groupAnagrams(words);
