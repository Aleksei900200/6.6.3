let AnyNumber = +prompt('Введите любое число (больше нуля и желательно меньше 10)');

console.log(AnyNumber);
function F1(AnyNumber) {
  const ArrayOne = [];
  for (i = AnyNumber; i >= 0; i--) {
    ArrayOne.unshift(i);
  }
  return ArrayOne;
}
const NewArray = F1(AnyNumber);
console.log(NewArray);
alert(NewArray);
