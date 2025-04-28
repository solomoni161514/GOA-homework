let academy = {
    name: "GOA Academy",
    courses: ["Web Development", "Robotics", "AI", "Game Development"],
    socialLink: "https://www.youtube.com/@Goal_Oriented_Academy_GOA",
    reviews: {
        solomoni: "საუკეთესო აკადემია",
        giorgi: "ბავშვებისთვის კარგი აკადემია",
        nika: "ძალიან დამეხმარა"
    }
};

let solomoni = {
    name: "solomoni",
    status: "parent",
    review: "Super learning environment!"
};

let giorgi = {
    name: "gio",
    status: "child",
    review: "Great support and help."
};

let nika = {
    name: "nika",
    status: "parent",
    review: "I learned so much here!"
};

console.log(academy);
console.log(Object.keys(academy));
console.log(Object.values(academy));
console.log(Object.hasOwn(academy, "solomoni"));
console.log(Object.assign(academy, solomoni, giorgi, nika));
console.log(Object.freeze(academy));
console.log(Object.isFrozen(academy));