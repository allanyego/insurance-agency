module.exports = function isExpiredDate(startDateString) {
  const startDate = new Date(startDateString);
  const temp = new Date();
  temp.setFullYear(temp.getFullYear() - 1);
  return startDate <= temp;
};
