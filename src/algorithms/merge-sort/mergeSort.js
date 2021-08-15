import {
  addVisitingColor,
  removeVisitingColor,
  addAllSortedBarColors,
  removeAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";

const merge = async (array, start, mid, end, setArrayValues) => {
  let temp = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (array[i] < array[j]) {
      temp.push(array[i]);
      i++;
    } else {
      temp.push(array[j]);
      j++;
    }
  }

  for (let t = i; t <= mid; t++) {
    temp.push(array[t]);
  }
  for (let t = j; t <= end; t++) {
    temp.push(array[t]);
  }

  for (let i = start; i <= end; i++) {
    addVisitingColor(i);
  }

  for (let i = start; i <= end; i++) {
    array[i] = temp[i - start];
    const temp2 = new Array(...array);
    setArrayValues(temp2);
    await delay(200);
  }
  for (let i = start; i <= end; i++) {
    removeVisitingColor(i);
  }
};

const mergeSortHelper = async (array, start, end, setArrayValues) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  await mergeSortHelper(array, start, mid, setArrayValues);

  await mergeSortHelper(array, mid + 1, end, setArrayValues);

  await merge(array, start, mid, end, setArrayValues);
};

export default async function mergeSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  let arr = new Array(...arrayValues);
  await mergeSortHelper(arr, 0, arr.length - 1, setArrayValues);
  addAllSortedBarColors(arrayValues.length);
}
