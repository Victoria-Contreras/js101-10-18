function totalAmount(total, quality) {
    if (quality === "good") {
        return `the total amount is $${(total * .20) + total}`;
    } else if (quality === "fair") {
        return `the total amount is $${(total * .15) + total}`;
    } else {
        return `the total amount is $${(total * .10) + total}`;
    }
}

console.log(totalAmount(100, "good"));
console.log(totalAmount(40, "fair"));
console.log(totalAmount(100, "bad"));