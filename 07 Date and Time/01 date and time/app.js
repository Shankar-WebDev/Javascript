// year month, day , hoiurs ,seconds , millseconds

const currentDate = new Date(2024, 10, 16, 3, 10, 57);
console.log(currentDate);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const millseconds = date.getMilliseconds();

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hour: ${hours}`);
console.log(`minutes: ${minutes}`);
console.log(`millseconds: ${millseconds}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
date.setDate(date.getDate() - 1);
console.log(date);
