function hello(name) {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return `Hello, World!`;
    }
    
}
console.log(hello("Mustache"));
console.log(hello());
