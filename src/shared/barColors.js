import "./barColors.css";

export const addVisitingColor = (index) => {
  for (let i = 0; i < 5; i++) {
    document
      .getElementsByClassName(`add-color-${index}`)
      [i].classList.add("visiting");
  }
};

export const removeVisitingColor = (index) => {
  for (let i = 0; i < 5; i++) {
    document
      .getElementsByClassName(`add-color-${index}`)
      [i].classList.remove("visiting");
  }
};

export const addSortedBarColor = (index) => {
  for (let i = 0; i < 5; i++) {
    document
      .getElementsByClassName(`add-color-${index}`)
      [i].classList.add("sorted");
  }
};

export const removeSortedBarColor = (index) => {
  for (let i = 0; i < 5; i++) {
    document
      .getElementsByClassName(`add-color-${index}`)
      [i].classList.remove("sorted");
  }
};

export const removeAllSortedBarColors = (len) => {
  for (let index = 0; index < len; index++)
    for (let i = 0; i < 5; i++) {
      document
        .getElementsByClassName(`add-color-${index}`)
        [i].classList.remove("sorted");
    }
};

export const addAllSortedBarColors = (len) => {
  for (let index = 0; index < len; index++)
    for (let i = 0; i < 5; i++) {
      document
        .getElementsByClassName(`add-color-${index}`)
        [i].classList.add("sorted");
    }
};
