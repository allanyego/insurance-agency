module.exports = function validityPeriod(startDate) {
  startDate = new Date(startDate);
  const temp = new Date(startDate);
  temp.setFullYear(temp.getFullYear() + 1);
  return temp;
};
