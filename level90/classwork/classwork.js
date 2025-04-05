function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        console.log(this.name+ ":" + this.number);
}};

let contact1 = new contact("solomoni", "555-55-55-55");
let contact2 = new contact("gio", "555-55-55-55");

console.log(contact1.print());
console.log(contact2.print());