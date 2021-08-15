import {
  addVisitingColor,
  removeVisitingColor,
  removeAllSortedBarColors,
  addAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";

export default async function insertionSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  for (let i = 1; i < arrayValues.length; i++) {
    let j = i;
    const current = temp[i];
    addVisitingColor(i);
    await delay(300);
    while (j > 0 && current < temp[j - 1]) {
      addVisitingColor(j);
      await delay(300);
      temp[j] = temp[j - 1];
      temp = new Array(...temp);
      setArrayValues(temp);
      await delay(300);
      if (j != i) {
        removeVisitingColor(j);
        await delay(300);
      }
      j--;
    }

    temp[j] = current;
    temp = new Array(...temp);
    setArrayValues(temp);
    await delay(300);
    removeVisitingColor(i);
  }

  addAllSortedBarColors(arrayValues.length);
}
