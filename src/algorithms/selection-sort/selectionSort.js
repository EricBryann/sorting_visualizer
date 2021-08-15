import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
  addAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";
import { swap } from "../../shared/swap";

export default async function selectionSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  for (let i = temp.length - 1; i >= 0; i--) {
    let max = 0;
    for (let j = 0; j <= i; j++) {
      addVisitingColor(max);
      temp = new Array(...temp);
      addVisitingColor(j);
      if (temp[j] > temp[max]) {
        removeVisitingColor(max);
        max = j;
        await setArrayValues(temp);
      }

      await delay(200);
      removeVisitingColor(j);
    }
    swap(temp, i, max);
    removeVisitingColor(max);
    await setArrayValues(temp);

    addSortedBarColor(i);
  }
  setArrayValues(temp);
}
