let anyNumber = +prompt('Введите любое число (больше нуля и желательно меньше 10)');

console.log(anyNumber);
function F1(anyNumber) {
  let array = [];
  for (i = anyNumber; i >= 0; i--) {
    array.unshift(i);
  }
  return array;
}
let newArray = F1(anyNumber);
console.log(newArray);
alert(newArray);
