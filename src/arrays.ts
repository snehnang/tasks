/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNum = [...numbers];
    if (numbers.length > 1) {
        newNum = [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length === 1) {
        newNum = [numbers[0], numbers[0]];
    } else {
        newNum = [];
    }
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNum = [...numbers];
    newNum = numbers.map((num: number): number => 3 * num);
    return newNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNum = numbers.map((num: string): number => Number(num));
    newNum = newNum.map((num: number): number =>
        isNaN(num) ? (num = 0) : num
    );
    return newNum;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let numAmounts: number[] = [];
    amounts = amounts.map((num: string): string =>
        num.charAt(0) == "$" ? num.substring(1) : num
    );
    numAmounts = stringsToIntegers(amounts);
    return numAmounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newMsg: string[] = [];
    messages = messages.map((mes: string): string =>
        mes[mes.length - 1] === "!" ? mes.toUpperCase() : mes
    );
    newMsg = [...messages];
    newMsg = newMsg.filter(
        (mes: string): boolean => mes[mes.length - 1] !== "?"
    );
    return newMsg;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.o
 */
export function countShortWords(words: string[]): number {
    let newArray = [...words];
    newArray = newArray.filter((word: string): boolean => word.length < 4);
    return newArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let newColors = [...colors];
    newColors = newColors.filter((col: string): boolean => col !== "red");
    newColors = newColors.filter((col: string): boolean => col !== "blue");
    newColors = newColors.filter((col: string): boolean => col !== "green");
    return newColors.length === 0 ? true : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce((a, b) => a + b, 0);
        return (
            sum +
            "=" +
            addends.map((num: number): string => num.toString()).join("+")
        );
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const neg = values.findIndex((val: number): boolean => val < 0);
    if (neg === -1) {
        const sum = values.reduce((curr: number, num: number) => curr + num, 0);
        return [...values, sum];
    }
    const prev = values.filter(
        (val: number): boolean => values.indexOf(val) < neg
    );
    const next = values.filter(
        (val: number): boolean => values.indexOf(val) > neg
    );
    const total = prev.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const final = [...prev, values[neg], total, ...next];
    return final;
}
