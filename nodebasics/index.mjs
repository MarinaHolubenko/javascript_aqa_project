import {myFirstString, myFirstFunction, firstNumber, secondNumber} from './export.mjs';
import chalk from 'chalk';

console.log(chalk.yellow(myFirstFunction(5, 2)));
console.log(chalk.white.bgCyanBright(myFirstString));
