// 7. Create a human readable time format using the Date time object
// a. YYYY-MM-DD HH:mm
const date = new Date();
console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay(),date.getHours()+':'+date.getMinutes());

// b. DD-MM-YYYY HH:mm

const date1 = new Date();
console.log(date1.getDay()+'-'+date1.getMonth()+'-'+date1.getFullYear(),date1.getHours()+':'+date1.getMinutes());

// c. DD/MM/YYYY HH:mm


const date2 = new Date();
console.log(date2.getDay()+'/'+date2.getMonth()+'/'+date2.getFullYear(),date2.getHours()+':'+date2.getMinutes());