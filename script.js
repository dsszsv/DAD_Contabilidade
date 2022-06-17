const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

console.log(`Today's date (m/dd/yyyy): ${currentMonth}/${currentDay}/${currentYear}`);
console.log(currentDate)