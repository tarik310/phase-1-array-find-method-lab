function superbowlWin(arr) {
    const winObj = arr.find(obj => obj.result === "W");
    return winObj ? winObj.year : undefined;
  }
