import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";
import { swap } from "../../shared/swap";

export default async function bubbleSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  for (let i = temp.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      temp = new Array(...temp);
      addVisitingColor(j);
      addVisitingColor(j + 1);
      if (temp[j] > temp[j + 1]) {
        swap(temp, j, j + 1);
        await setArrayValues(temp);
      }

      await delay(200);
      removeVisitingColor(j);
      removeVisitingColor(j + 1);
    }
    addSortedBarColor(i);
  }
  setArrayValues(temp);
}
