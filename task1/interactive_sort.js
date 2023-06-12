const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Hello. Enter some words or digits deviding them in spaces:  ', (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    const values = input.split(' ');

    var numbers = [];
    var words = [];

    for(let i = 0; i < values.length; i++) {
      if(!isNaN(values[i])) {
        numbers.push(parseFloat(values[i]))
      } else {
        words.push(values[i]);
      }
    }

    rl.question('How would you like to sort values: \n' +
      '1. Words by name (from A to Z).\n' +
      '2. Show digits from the smallest.\n' +
      '3. Show digits from the biggest\n' +
      '4. Words by quantity of leters\n' +
      '5. Only unique words\n' +
      '6. Only unique numbers\n' +
      'Select (1 - 5) and press ENTER: ', (choise) => {
        switch (choise) {
          case '1':
            const sortedWords = words.sort((a, b) => a.localeCompare(b));
            console.log(sortedWords);
            break;
          case '2':
            const sortedNumbersAsc = numbers.sort((a, b) => a - b);
            console.log(sortedNumbersAsc);
            break;
          case '3':
            const sortedNumbersDesc = numbers.sort((a, b) => b - a );
            console.log(sortedNumbersDesc);
            break;
          case '4':
            const sortedWordsByQuantityLetters = words.sort((a, b) => b.length - a.length );
            console.log(sortedWordsByQuantityLetters);
            break;
          case '5':
            const uniqueWords = [...new Set(words)];
            console.log(uniqueWords);
            break;
          case '6':
            const uniqueNumbers = [...new Set(numbers)];
            console.log(uniqueNumbers);
            break;
          default:
            console.log('Invalid choice. Please try again.');
            break;
        }
      promptUser();
      });
    });
  }

promptUser();