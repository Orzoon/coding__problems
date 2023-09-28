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

/**********Valid Sudoklu**********/
const sudokuInput = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// brute force way
function validSudoku__0(sudokuInput) {
  const sudokuLength = sudokuInput.length;

  // checking the row
  for (let i = 0; i < sudokuLength; i++) {
    let rowSet = new Set();
    const row = sudokuInput[0];
    for (let j = 0; j < sudokuLength; j++) {
      if (row[j] !== ".") {
        if (rowSet.has(row[j])) return false;
        rowSet.add(row[j]);
      }
    }
    rowSet.clear();
  }

  // checking the column
  for (let i = 0; i < sudokuLength; i++) {
    let columnSet = new Set();
    for (let j = 0; j < sudokuLength; j++) {
      if (sudokuInput[j][i] !== ".") {
        if (columnSet.has(sudokuInput[j][i])) return false;
        columnSet.add(sudokuInput[j][i]);
      }
    }
    columnSet.clear();
  }

  // for 3*3 boxes
  for (let i = 0; i < 3; i++) {
    // 3 * 3 row
    for (let j = 0; j < 3; j++) {
      // 3 * 3 column
      let indSet = new Set();
      for (let k = 0; k < sudokuLength; k++) {
        let n =
          sudokuInput[Math.floor(k / 3) + i * 3][
            ((sudokuLength + k) % 3) + j * 3
          ];
        if (n !== ".") {
          if (indSet.has(n)) return false;
          indSet.add(n);
        }
      }

      indSet.clear();
    }
  }
}

// refined in one main loop
function validSudoku__1(sudokuInput) {
  // Sets var
  let rowSet = new Set();
  let columnSet = new Set();
  let boxSet = new Set();

  for (let i = 0; i < sudokuInput.length; i++) {
    //looping through rows
    for (let j = 0; j < sudokuInput.length; j++) {
      // row
      const rowValue = sudokuInput[i][j];
      if (rowValue !== ".") {
        if (rowSet.has(rowValue)) return false;
        rowSet.add(rowValue);
      }

      let columnValue = sudokuInput[j][i];
      if (columnValue !== ".") {
        if (columnSet.has(columnValue)) return false;
        columnSet.add(columnValue);
      }

      //ind boxes
      const boxvalue =
        sudokuInput[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];
      if (boxvalue !== ".") {
        if (boxSet.has(boxvalue)) return false;
        boxSet.add(boxvalue);
      }
    }
    rowSet.clear();
    columnSet.clear();
    boxSet.clear();
  }

  return true;
}
