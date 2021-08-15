import "./sth.css";
import {
  addVisitingColor,
  removeVisitingColor,
  addSortedBarColor,
  removeAllSortedBarColors,
} from "../../shared/barColors";
import { delay } from "../../shared/delay";

export default async function bubbleSort(arrayValues, setArrayValues) {
  removeAllSortedBarColors(arrayValues.length);
  let temp = new Array(...arrayValues);
  for (let i = temp.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      temp = new Array(...temp);
      addVisitingColor(j);
      addVisitingColor(j + 1);
      if (temp[j] > temp[j + 1]) {
        const x = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = x;
        await setArrayValues(temp);
      }

      await delay(300);
      removeVisitingColor(j);
      removeVisitingColor(j + 1);
    }
    addSortedBarColor(i);
  }
  setArrayValues(temp);
}
