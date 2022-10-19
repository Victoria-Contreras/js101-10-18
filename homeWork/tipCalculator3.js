function amountPerPerson(total, quality, people) {
    if (quality === "good") {
        let entireTotal = (total * .20) + total;
        return `each person should pay $${entireTotal / people}`;

    } else if (quality === "fair") {
        let entireTotal = (total * .15) + total;
        return `each person should pay $${entireTotal / people}`;

    } else {
        let entireTotal = (total * .10) + total;
        return `each person should pay $${entireTotal / people}`;

    }
}

console.log(amountPerPerson(100, "good", 5));
console.log(amountPerPerson(40, "fair", 2));
console.log(amountPerPerson(100, "bad", 2));