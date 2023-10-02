//--ISBN-10 VALIDATION
function validISBN10(isbn) {
  let totalProduct = 0;
  const ISBN_ARRAY = isbn.split("");
  // checking the ISBNNO requirement
  if (
    ISBN_ARRAY.length < 10 ||
    ISBN_ARRAY.length > 10 ||
    (isNaN(ISBN_ARRAY[9]) && ISBN_ARRAY[9] !== "X") ||
    (!isNaN(ISBN_ARRAY[9]) && (ISBN_ARRAY[9] < 0 || ISBN_ARRAY[9] > 9))
  )
    return false;
  if (ISBN_ARRAY[9] === "X") {
    ISBN_ARRAY[9] = 10;
  }
  // not a number
  if (!ISBN_ARRAY.every((item) => !isNaN(item))) return false;
  for (let i = 0; i < 10; i++) {
    totalProduct = totalProduct + ISBN_ARRAY[i] * (i + 1);
  }

  if (totalProduct % 11 === 0) return true;
  else return false;
}
