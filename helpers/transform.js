const chalk = require("chalk");
const { Transform } = require("stream");
const {stringOperation} = require("./mainOperations");

class DataTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(chunk, encoding, callback) {
        let operation = ""

        switch (this.action) {
            case "array":
                break;
            case "string":
                operation = stringOperation(chunk.toString());
                break;
            default:
                process.stderr.write(chalk.red("✘ Error") + ' "Action not found :("\n');
                process.exit(1);
        }

        this.push(operation);
        callback();
    }
}

module.exports = DataTransform;