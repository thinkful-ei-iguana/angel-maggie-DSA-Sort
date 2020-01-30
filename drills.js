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

// let listOfNums = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// console.log(sortDrill(listOfNums));


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

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
};

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};


let listOfNums = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};


function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};
// console.log(quickSort(listOfNums));


//2. The Pivot could have either been 14 or 17 because the partition function
//    puts all the values greater than the pivot value to its right
// Given: [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] show the list after second partitioning. 
//A) When using the last item on the list as a pivot
//[3,  9, 10, 12, 19, 14, 17, 16, 13, 15]
//B) When using the first item on the list as a pivot
//[9, 10, 3, 12, 13, 14, 15, 16, 19, 17]

// 3. Implementing quicksort

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}


let dataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// console.log(qSort(dataSet));

// 4. Implementing merge sort