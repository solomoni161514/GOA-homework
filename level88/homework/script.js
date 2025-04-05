let university = {
    name: "Tbilisi State University",
    departments: 10,
    website: "www.tsu.ge",
    ratings: {
        student1: 4.5,
        student2: 4.7,
        student3: 4.8
    }
};

console.log(university);
console.log('scholarship' in university);
university = Object.assign(university, { studentsCount: 20000 });
console.log(university);
Object.freeze(university);
university.name = "Changed University";
console.log(university);
console.log(Object.isFrozen(university));




let sportsClub = {
    clubName: "Dinamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
        title1: "Championship 1981",
        title2: "Cup 1990",
        title3: "Super Cup 2005"
    }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log('sponsors' in sportsClub);
sportsClub = Object.assign(sportsClub, { stadiumCapacity: 55000 });
console.log(sportsClub);
Object.freeze(sportsClub);
sportsClub.clubName = "Changed Club";
console.log(sportsClub);
console.log(Object.isFrozen(sportsClub));



let hotel = {
    hotelName: "Radisson Blu",
    stars: 5,
    location: "Tbilisi",
    guestReviews: {
        guest1: "Excellent",
        guest2: "Very Good",
        guest3: "Good"
    }
};

console.log(hotel);
console.log('spa' in hotel);
hotel = Object.assign(hotel, { roomsCount: 250 });
console.log(hotel);
Object.freeze(hotel);
hotel.hotelName = "Changed Hotel";
console.log(hotel);
console.log(Object.isFrozen(hotel));




let cinema = {
    cinemaName: "Amirani Cinema",
    moviesCount: 20,
    location: "Tbilisi",
    movieReviews: {
        user1: "Great",
        user2: "Good",
        user3: "Average"
    }
};

console.log(cinema);
console.log('vipSeats' in cinema);
cinema = Object.assign(cinema, { ticketPrice: 15 });
console.log(cinema);
Object.freeze(cinema);
cinema.cinemaName = "Changed Cinema";
console.log(cinema);
console.log(Object.isFrozen(cinema));