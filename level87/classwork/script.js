function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    
    this.Info = function() {
        return `ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელფოსტაა ${this.email}.`;
    };
}

let user1 = new User("solomoni", "bujiashvili", "555-555-555", "sbujiashvili@gmail.com", "123456 ", "123456");
let user2 = new User("giorgi", "kakauridze", "555-555-555", "gkakauridze@gmail.com", "123456 ", "123456");
let user3 = new User("nika", "kokorashvili", "555-555-555", "nkokorashvili@gmail.com", "123456 ", "123456");


console.log(user1.Info());
console.log(user2.Info());
console.log(user3.Info());