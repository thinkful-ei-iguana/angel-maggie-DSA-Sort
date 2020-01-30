function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  console.log('array being merged is', array);
  return array;
};

/////////////////////////

function sortDrill(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  // console.log('changed array is', array, left, right);

  left = sortDrill(left);
  right = sortDrill(right);
  return merge(left, right, array);
};

let listOfNums = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

console.log(sortDrill(listOfNums));

// What is the resulting list that will be sorted after 4 recursive calls? Sequence below:
// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
// changed array is [ 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 ] [ 21, 1, 26, 45, 29, 28, 2, 9 ] [ 16, 49, 39, 27, 43, 34, 46, 40 ]
// changed array is [ 21, 1, 26, 45, 29, 28, 2, 9 ] [ 21, 1, 26, 45 ] [ 29, 28, 2, 9 ]
// changed array is [ 21, 1, 26, 45 ] [ 21, 1 ] [ 26, 45 ]
// changed array is [ 21, 1 ] [ 21 ] [ 1 ] ((((THIS IS THE THIRD RECURSIVE CALL))))
// changed array is [ 26, 45 ] [ 26 ] [ 45 ]
// changed array is [ 29, 28, 2, 9 ] [ 29, 28 ] [ 2, 9 ]
// changed array is [ 29, 28 ] [ 29 ] [ 28 ]
// changed array is [ 2, 9 ] [ 2 ] [ 9 ]
// changed array is [ 16, 49, 39, 27, 43, 34, 46, 40 ] [ 16, 49, 39, 27 ] [ 43, 34, 46, 40 ]
// changed array is [ 16, 49, 39, 27 ] [ 16, 49 ] [ 39, 27 ]
// changed array is [ 16, 49 ] [ 16 ] [ 49 ]
// changed array is [ 39, 27 ] [ 39 ] [ 27 ]
// changed array is [ 43, 34, 46, 40 ] [ 43, 34 ] [ 46, 40 ]
// changed array is [ 43, 34 ] [ 43 ] [ 34 ]
// changed array is [ 46, 40 ] [ 46 ] [ 40 ]
// [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]

// What is the resulting list that will be sorted after 16 recursive calls? 
// the list has been sorted after 16 recursive calls
// [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]

// What are the first 2 lists to be merged?
// array being merged is [ 1, 21 ]
// array being merged is [ 26, 45 ]
// array being merged is [ 1, 21, 26, 45 ]  ((((FIRST TWO LISTS TO BE MERGED))))
// array being merged is [ 28, 29 ]
// array being merged is [ 2, 9 ]
// array being merged is [ 2, 9, 28, 29 ]
// array being merged is [ 1, 2, 9, 21, 26, 28, 29, 45 ]
// array being merged is [ 16, 49 ]
// array being merged is [ 27, 39 ]
// array being merged is [ 16, 27, 39, 49 ]
// array being merged is [ 34, 43 ]
// array being merged is [ 40, 46 ]
// array being merged is [ 34, 40, 43, 46 ]
// array being merged is [ 16, 27, 34, 39, 40, 43, 46, 49 ]

// Which two lists would be merged on the 7th merge?
// array being merged is [ 1, 21, 26, 45 ]
// array being merged is [ 2, 9, 28, 29 ]

// 2. Understanding quicksort

