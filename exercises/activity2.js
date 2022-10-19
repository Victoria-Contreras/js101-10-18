function sumOfIntergers(num1, num2) {
    let sum = num1 + num2;
    if (sum > 50 && sum < 80) {
        return 65;
    } else {
        return 80;
    }
}
console.log(sumOfIntergers(20, 20));
console.log(sumOfIntergers(40, 20));
console.log(sumOfIntergers(50, 50));