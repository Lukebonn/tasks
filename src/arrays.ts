/* eslint-disable indent */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length = numbers.length;
    if (length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((price: number): number => price * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((val: string): number =>
        isNaN(parseInt(val)) ? 0 : parseInt(val)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number =>
        amount.indexOf("$") > -1
            ? parseInt(amount.slice(1)) || 0
            : parseInt(amount) || 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message: string): string =>
            // eslint-disable-next-line prettier/prettier
            message.endsWith("!")
                ? message.toUpperCase()
                : message.endsWith("?")
                ? ""
                : message
        )
        .filter(Boolean);
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allowedColors = ["red", "blue", "green"];
    return (
        colors.length === 0 ||
        colors.every((color) => allowedColors.includes(color))
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, num) => acc + num, 0);
    const representation = addends.join("+");

    return `${sum}=${representation || "0"}`;
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
    //splice pricesInside.splice(2, 0, 499) (index, deletions, number)
    // `findIndex` gives you the index of the element matching a condition
    // const firstLowPriceIndex = prices.findIndex(
    //     (price: number): boolean => price < 10
    // );
    // eslint-disable-next-line prefer-const
    let firstNeg: number = values.findIndex((num: number): boolean => num < 0);
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let i: number = 0;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let check: boolean = true;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let sum: number = 0;
    if (firstNeg >= 0) {
        while (check) {
            sum += values[i];
            i++;

            if (i === firstNeg || values.length) {
                check = false;
            }
        }
    } else {
        // If no negative number is found, sum all elements
        sum = values.reduce((acc, curr) => acc + curr, 0);
    }
    // eslint-disable-next-line prefer-const
    let newValues: number[] = [...values];
    if (firstNeg >= 0) {
        newValues.splice(firstNeg + 1, 0, sum);
    } else {
        newValues.push(sum);
    }
    return newValues;

    // let sum = 0;
    // let foundNegative = false;
    // const result = values.map((value: number): number => {
    //     if (foundNegative) {
    //         sum += value;
    //         return value;
    //     }
    //     if (value < 0) {
    //         foundNegative = true;
    //         return value;
    //     }
    //     return value;
    // });
    // // Check if the last element is positive and add it to the result without including in sum
    // if (!foundNegative && values.length > 0 && values[values.length - 1] >= 0) {
    //     result.push(values[values.length - 1]);
    // } else if (foundNegative) {
    //     result.push(sum);
    // }
    // return result;
}
