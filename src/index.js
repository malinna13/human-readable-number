module.exports = function toReadable(number) {
    const onesToTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let str = number.toString();

    if ((number > 0 && number < 21) || number === 0) {
        return onesToTwenty[number];
    }

    if (number > 20 && number < 100) {
        if (+str[1] === 0) {
            return `${tens[+str[0]]}`;
        } else {
            return `${tens[+str[0]]} ${onesToTwenty[+str[1]]}`;
        }
    }

    if (number > 99 && number < 1000) {
        if (+str[1] === 0 && +str[2] === 0) {
            return `${onesToTwenty[+str[0]]} hundred`;
        } else if (+str[1] === 0) {
            return `${onesToTwenty[+str[0]]} hundred ${onesToTwenty[+str[2]]}`;
        } else if (+str[1] === 1) {
            return `${onesToTwenty[+str[0]]} hundred ${
                onesToTwenty[+str[1] + str[2]]
            }`;
        } else if (+str[2] === 0) {
            return `${onesToTwenty[+str[0]]} hundred ${tens[+str[1]]}`;
        } else {
            return `${onesToTwenty[+str[0]]} hundred ${tens[+str[1]]} ${
                onesToTwenty[+str[2]]
            }`;
        }
    }
};
