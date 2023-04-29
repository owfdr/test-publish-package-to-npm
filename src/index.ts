import chalk from "chalk";
import { version } from "../package.json";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(chalk.green("Hello World"));
} else if (args[0] === "--version") {
  console.log(chalk.green(version));
} else if (args[0] === "--help") {
  console.log(chalk.green("Usage: hello-world [--version] [--help]"));
} else {
  console.log(chalk.green("Hello", ...args));
}
