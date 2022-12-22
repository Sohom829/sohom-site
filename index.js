const app = require("./app");
let PORT = 3000;
const chalk = require("chalk");
// const idkColor = chalk.hex("#00ff80");

app.listen(PORT, () => {
  console.log(
    chalk.bold.red("[ ") +
      chalk.bold.yellow("SITE MANAGER") +
      chalk.bold.red(" ] ") +
      chalk.magenta.bold(": ") +
      chalk.bold.dim("SERVER STARTED ") +
      chalk.bold.cyan("LISTENING TO ") +
      chalk.magenta.bold(": ") +
      chalk.bold.underline.greenBright("http://localhost") +
      chalk.magenta.underline.bold(":") +
      chalk.bold.underline.redBright(`${PORT}`)
  );
});
