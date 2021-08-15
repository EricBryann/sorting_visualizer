import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";
import { swap } from "../../shared/swap";

export default async function selectionSort(
  arrayValues,
  setArrayValues,
  speed
) {
  const time = Math.floor(2000 / speed);
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

      await delay(time);
      removeVisitingColor(j);
    }
    swap(temp, i, max);
    removeVisitingColor(max);
    await setArrayValues(temp);

    addSortedBarColor(i);
  }
  setArrayValues(temp);
}
