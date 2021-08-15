import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";
import { swap } from "../../shared/swap";

const helper = async (array, start, end, setArrayValues) => {
  if (start > end) return;
  let pivot = start;
  let left = start + 1;
  let right = end;
  addVisitingColor(pivot);

  while (right >= left) {
    addVisitingColor(left);
    addVisitingColor(right);
    await delay(200);
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(array, left, right);
      const temp = new Array(...array);
      setArrayValues(temp);
      await delay(200);
    }

    if (array[left] <= array[pivot]) {
      removeVisitingColor(left);
      left++;
      if (left < array.length) addVisitingColor(left);
      await delay(200);
    }
    if (array[right] >= array[pivot]) {
      removeVisitingColor(right);
      right--;
      if (right > 0) addVisitingColor(right);
      await delay(200);
    }

    if (left < array.length) removeVisitingColor(left);
    if (right > 0) removeVisitingColor(right);
  }

  swap(array, pivot, right);
  const temp = new Array(...array);
  addSortedBarColor(right);
  setArrayValues(temp);
  removeVisitingColor(pivot);
  await delay(200);

  await helper(array, start, right - 1, setArrayValues);
  await helper(array, right + 1, end, setArrayValues);
};

export default async function quickSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  const temp = new Array(...arrayValues);
  await helper(temp, 0, arrayValues.length - 1, setArrayValues);
  setArrayValues(temp);
}
