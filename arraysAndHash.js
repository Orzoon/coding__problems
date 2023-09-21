//*********//?
//==========ARRAY AND HASHING===========//
//*********//?

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
let words = ["rat", "tar", "star"];
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
//? const result = groupAnagrams(words);

/**********Top K Frequent Elements**********/
let topkNums = [1, 1, 1, 2, 2, 3],
  k = 2;
function frequentElements__1(arr, k) {
  let uniqueSetObject = [...new Set(topkNums)].reduce((acc, item) => {
    let obj = structuredClone(acc);
    obj[item] = 0;
    return obj;
  }, {});

  arr.forEach((n) => {
    const uniqueSetObjectCopy = structuredClone(uniqueSetObject);
    uniqueSetObjectCopy[n] = uniqueSetObjectCopy[n] + 1;
    uniqueSetObject = uniqueSetObjectCopy;
  });

  let result = Object.keys(uniqueSetObject).reduce((acc, item) => {
    return uniqueSetObject[item] >= k ? [...acc, parseInt(item)] : acc;
  }, []);

  return result;
}
//?frequentElements__1(topkNums, k);

/**********Product except self**********/
function productArrayExceptSelf(arr) {
  const totalProduct = arr.reduce((acc, item) => {
    return acc * item;
  }, 1);

  const result = arr.map((item) => {
    return totalProduct / item;
  });
}

productArrayExceptSelf([1, 2, 3]);
