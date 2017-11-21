import readlineSync from 'readline-sync';

let name = '';

const askForName = () => {
  name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`)
  return name;
};


const brainEven = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  let number = getRandomNumber();
  let attempt = 0;

  while (attempt < 3) {
    console.log(`Question: ${number}`);
    let answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);
    if (
      (answer === 'yes' && number % 2 === 0) ||
      (answer === 'no' && number % 2 !== 0)
    ) {
      console.log('Correct!');
      number = getRandomNumber();
      attempt += 1;
    } else {
      console.log(`'${answer}' is wrong. Correct is ${(number % 2 === 0) ? "'yes'" : "'no'"}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { askForName, brainEven };
