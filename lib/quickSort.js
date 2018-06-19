let quickSort = (array, first = 0, last = array.length - 1) => {

  if(first < last) {

    let pivot = array[last]

    for(i=-1, j=0; j < last; j++) {
      if(compareNumbers(array[j], pivot)) {
        i++;
        swapElements(array, i, j)
      }
    }

    swapElements(array, i + 1, j)

    quickSort(array, first, i - 1)
    quickSort(array, i + 1, last)
  }

  return array
}

let compareNumbers = (num1, num2) => num1 < num2;

let swapElements = (array, index1, index2) => {
    [ array[index1], array[index2] ] = [ array[index2], array[index1] ];
    return array;
  }

module.exports = {
  quickSort: quickSort,
  swapElements: swapElements,
  compareNumbers: compareNumbers
}
