import chalk from "chalk";

const args = process.argv.slice(2);

console.log(chalk.green("Hello", ...args));
