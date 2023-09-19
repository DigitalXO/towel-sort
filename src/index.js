
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, row, index) => {
    if (index % 2 === 0) {
      // Если индекс строки четный, просто объединяем с текущим аккумулятором.
      return acc.concat(row);
    } else {
      // Если индекс строки нечетный, объединяем с текущим аккумулятором, но в обратном порядке.
      return acc.concat(row.reverse());
    }
  }, []);
};
