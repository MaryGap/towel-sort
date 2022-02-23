
// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
      return [];
  } 
  else {
      let array = [];
      if (matrix.length === 0) return array;
      matrix.map((element, ind) => {
          ind % 2 === 1 ? array.push(element.reverse()) : array.push(element);
      });
      return array.flat();
  }
};
