// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);

};
/**
 * Sebelumnya, fungsi filterOddNumber menggunakan kondisi num % 2 !== 0 untuk mengecek angka ganjil, yang seharusnya sebaliknya.
 * Seharusnya digunakan kondisi num % 2 === 0 untuk memeriksa apakah suatu angka adalah angka genap.
 * Dengan demikian, filter tersebut seharusnya menyaring angka-angka genap, bukan ganjil. Setelah diperbarui, fungsi tersebut kini menggunakan kondisi yang benar, yaitu num % 2 === 0, sehingga hanya angka genap yang akan tersisa dalam array setelah proses filtering.
 * Kesalahan utamanya terletak pada logika kondisi yang digunakan sebelumnya dalam fungsi, dan perbaikan tersebut sesuai dengan tujuan untuk mengembalikan array yang berisi angka-angka genap dari array input.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
