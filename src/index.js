import readlineSync from 'readline-sync';

const askForName = () => {
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`)
  return;
};

export default askForName;
