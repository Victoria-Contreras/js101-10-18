function tipAmount(total, quality) {
    if (quality === "good") {
        return `the tip should be $${total * .20}`;
    } else if (quality === "fair") {
        return `the tip should be $${total * .15}`;
    } else {
        return `the tip should be $${total * .10}`;
    }
}

console.log(tipAmount(100, "good"));
console.log(tipAmount(40, "fair"));
console.log(tipAmount(100, "bad"));