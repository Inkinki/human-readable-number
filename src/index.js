module.exports = function toReadable (number) {
  const numbsTo10 = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numbsTo20 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const numberToString = String(number); // перевод числа в строку
  const lengthNum = numberToString.length; // длинна строки числа (1, 11, 111, 1111)
  const firstNumber = parseInt(numberToString[0], 10); // 2
  const secondNumber = parseInt(numberToString[1], 10); // 4
  const thirdNumber = parseInt(numberToString[2], 10);

    if (lengthNum === 1 ) { 
        if (number === 0) { // 0
            return 'zero';
        } else { // 1,2,3
            return numbsTo10[number - 1]; 
        }

    }  else if (lengthNum === 2) {
        if(10 < number && number < 20) { // 11,12,13
            return numbsTo20[secondNumber - 1];
        } else if (secondNumber === 0) { // 10, 20, 30
            return dozens[firstNumber - 1];      
        } else { // 21, 31, 56
            return `${dozens[firstNumber - 1]} ${numbsTo10[secondNumber - 1]}`;
        }

    } else if (lengthNum === 3) {
        if (number % 100 === 0){ // 100, 200, 300
            return `${numbsTo10[firstNumber - 1]} hundred`;

        } else if (secondNumber === 0){ // 101,205,308
            return `${numbsTo10[firstNumber - 1]} hundred ${numbsTo10[thirdNumber - 1]}`;

        } else if (number % 10 === 0){ // 110, 120, 130
            return `${numbsTo10[firstNumber - 1]} hundred ${dozens[secondNumber - 1]}`;

        } else if (secondNumber === 1) { // 111, 212, 315
            return `${numbsTo10[firstNumber - 1]} hundred ${numbsTo20[thirdNumber - 1]}`;

        } else { // 333, 124, 456
            return `${numbsTo10[firstNumber - 1]} hundred ${dozens[secondNumber - 1]} ${ numbsTo10[thirdNumber - 1]}`;
        }
    }
      
}




