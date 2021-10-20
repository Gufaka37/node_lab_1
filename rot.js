const { program } = require("commander");

const actionHandler = async () => {
    let { input, output } = program.opts();



}

program
    .option("-i, --input, <inputFile>", "A input file.")
    .option("-o, --output, <outputFile>", "A output file.")
