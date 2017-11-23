import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { greetings, getRandomNumber, randomSymbol, getNewRandoms, showResults } from './src/index';

const brainCalc = () => {
  const name = greetings('What is the result of the expression?');
  let randomMathSymbol = randomSymbol();
  let pair = cons(getRandomNumber(), getRandomNumber());
  const question = `Question: ${car(pair)} ${randomMathSymbol} ${cdr(pair)}`

  const game = (randomMathSymbol, pair) =>{
      let correctAnswer = 0;

      switch (randomMathSymbol) {
      case '+':
        correctAnswer = car(pair) + cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;;
      case '-':
        correctAnswer = car(pair) - cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;;
      case '*':
        correctAnswer = car(pair) * cdr(pair);
        randomMathSymbol = randomSymbol();
        pair = cons(getRandomNumber(), getRandomNumber());
        return correctAnswer;;
    }
  }

  const startGame = (question, game, pair) => {
    let attempt = 0;

    while (attempt < 3) {
    let correctAnswer = game();
    console.log(question);
    const answer = readlineSync.prompt();
    console.log(`Your answer: ${answer}`);

    if (correctAnswer === Number(answer)){
      console.log("Correct!");
      attempt += 1;
    } else {
        console.log(`${answer} is wrong! Correct answer is ${correctAnswer}`)
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  }

  startGame(question, game, pair);
};

brainCalc();
