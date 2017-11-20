import readlineSync from 'readline-sync';

export const askForName = () => {
  const name = readlineSync.question('What is your name: ');

  return `Hello, ${name}!`;
};
