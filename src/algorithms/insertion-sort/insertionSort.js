import {
  addVisitingColor,
  removeVisitingColor,
  removeAllSortedBarColors,
  addAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";

export default async function insertionSort(
  arrayValues,
  setArrayValues,
  speed
) {
  const time = Math.floor(1000 / speed);
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  for (let i = 1; i < arrayValues.length; i++) {
    let j = i;
    const current = temp[i];
    addVisitingColor(i);
    await delay(time);
    while (j > 0 && current < temp[j - 1]) {
      addVisitingColor(j);
      await delay(time);
      temp[j] = temp[j - 1];
      temp = new Array(...temp);
      setArrayValues(temp);
      await delay(time);
      if (j !== i) {
        removeVisitingColor(j);
        await delay(time);
      }
      j--;
    }

    temp[j] = current;
    temp = new Array(...temp);
    setArrayValues(temp);
    await delay(time);
    removeVisitingColor(i);
  }

  addAllSortedBarColors(arrayValues.length);
}
