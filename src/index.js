
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = matrix.reduce((prev, cur)=> prev + cur)
  return result.sort((a,b) => a - b);
}
