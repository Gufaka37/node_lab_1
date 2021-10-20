const { program } = require("commander");
const chalk = require("chalk");
const pckg = require("./package.json");

const { log, info } = console;
const codeMessage = chalk.yellow.bold("Code");

const actionHandler = async () => {
    let { input, output } = program.opts();

    console.log('start app')

}

process.stdin.setEncoding("utf8");
process.on("exit", (code) => log(`${codeMessage} ${code}`));
process.on("SIGINT", () => {
    process.exit(0);
});

program.storeOptionsAsProperties(false).version(pckg.version);

program
    .requiredOption("-a, --action <action>", "An action array/string")
    .option("-i, --input, <inputFile>", "An input file.")
    .option("-o, --output, <outputFile>", "An output file.")
    .action(actionHandler);

program.parse(process.argv);
