var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log(`Sebelumnya : ${angka}`);

var hasil = angka.sort();
console.log(`Ascending :  ${hasil}`);

var result2 = angka.reverse();
console.log(`Descending :  ${result2}`);

var filtered = result2.filter((item) => {
  return item > 10;
});

console.log(`Filter > 10 : ${filtered}`);
