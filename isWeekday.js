function isWeekday(day) {
  return (
    day.startsWith("Mon") ||
    day.startsWith("Tues") ||
    day.startsWith("Wed") ||
    day.startsWith("Thurs") ||
    day.startsWith("Fri")
  );
}

module.exports = isWeekday;
