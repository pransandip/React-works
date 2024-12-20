// closure
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer1 = magic();
const answer2 = magic();
console.log(answer1(2));
console.log(answer1(3));

// react works this way
function magic2(x) {
  function calc(x) {
    console.log(x * 2);
  }
  calc(x);
}

magic2(3);
