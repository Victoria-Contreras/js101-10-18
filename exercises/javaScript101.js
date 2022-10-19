function madlib(name, subject) {
    return `${name}\'s favorite subject in school is ${subject}.`
}
// console.log(madlib("John", "science"));


function tipAmount(total, quality) {
    if (quality === "good") {
        return `the tip should be ${total * .20}`;
    } else if (quality === "fair") {
        return `the tip should be ${total * .15}`;
    } else {
        return `the tip should be ${total * .10}`;
    }
}

// console.log(tipAmount(100, "good"));
// console.log(tipAmount(40, "fair"));
// console.log(tipAmount(100, "bad"));

function totalAmount(total, quality) {
    if (quality === "good") {
        return `the total amount is ${(total * .20) + total}`;
    } else if (quality === "fair") {
        return `the total amount is ${(total * .15) + total}`;
    } else {
        return `the total amount is ${(total * .10) + total}`;
    }
}

// console.log(totalAmount(100, "good"));
// console.log(totalAmount(40, "fair"));
// console.log(totalAmount(100, "bad"));


function printNumbers(start, end) {
    let i = start;
    while (i <=  end) {
        console.log(i);
        i++;
    }
}
// printNumbers(1, 10);

function printSquare(size) {
    let i = 0
    while (i < size) {
        console.log("***");
        i++;
    }
}
// printSquare(5);

