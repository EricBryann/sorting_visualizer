import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
  addAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";
import { swap } from "../../shared/swap";

export default async function bubbleSort(arrayValues, setArrayValues, speed) {
  const time = Math.floor(1000 / speed);
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  let change = false;
  for (let i = temp.length - 1; i >= 0; i--) {
    change = false;
    for (let j = 0; j < i; j++) {
      temp = new Array(...temp);
      addVisitingColor(j);
      addVisitingColor(j + 1);
      if (temp[j] > temp[j + 1]) {
        swap(temp, j, j + 1);
        change = true;
        await setArrayValues(temp);
      }

      await delay(time);
      removeVisitingColor(j);
      removeVisitingColor(j + 1);
    }
    if (!change) break;
    addSortedBarColor(i);
  }

  if (!change) addAllSortedBarColors(arrayValues.length);
  setArrayValues(temp);
}
