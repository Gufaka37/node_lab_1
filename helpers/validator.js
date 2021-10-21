class Validator{
    static isEmpty(value) {
        if (value === undefined) return true;

        if (
            typeof value == "function" ||
            typeof value == "number" ||
            typeof value == "boolean" ||
            Object.prototype.toString.call.value === "[object Date]"
        ) return false;

        if (value === null || value.length === 0) return true;

        return false;
    }

    static isInteger(value) {
        return (value ^ 0) === value;
    }

    static isIn(value, array) {
        return array.includes(value);
    }
}

module.exports = Validator;