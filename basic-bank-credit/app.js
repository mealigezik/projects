const income = +prompt('your income?');
const out = +prompt('your out?');
const minSal = 5500;

income >= minSal + out
? alert('Credit okay')
: alert(`Sorry`);