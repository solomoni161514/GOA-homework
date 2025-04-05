function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "ორშაბათი";
        case 2:
            return "სამშაბათი";
        case 3:
            return "ოთხშაბათი";
        case 4:
            return "ხუთშაბათი";
        case 5:
            return "პარასკევი";
        case 6:
            return "შაბათი";
        case 7:
            return "კვირა";
        default:
            return "არასწორი დღე";
    }
}




function isEvenOrOdd(number) {
    return number % 2 === 0 ? "ლუწი" : "კენტი";
}




function getWeatherType(weatherNumber) {
    switch (weatherNumber) {
        case 1:
            return "მზიანი";
        case 2:
            return "წვიმიანი";
        case 3:
            return "მოღრუბლული";
        case 4:
            return "ქარიანი";
        default:
            return "არ არის დადგენილი";
    }
}




function getMonthAndHalf(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1:
            monthName = "იანვარი";
            break;
        case 2:
            monthName = "თებერვალი";
            break;
        case 3:
            monthName = "მარტი";
            break;
        case 4:
            monthName = "აპრილი";
            break;
        case 5:
            monthName = "მაისი";
            break;
        case 6:
            monthName = "ივნისი";
            break;
        case 7:
            monthName = "ივლისი";
            break;
        case 8:
            monthName = "აგვისტო";
            break;
        case 9:
            monthName = "სექტემბერი";
            break;
        case 10:
            monthName = "ოქტომბერი";
            break;
        case 11:
            monthName = "ნოემბერი";
            break;
        case 12:
            monthName = "დეკემბერი";
            break;
        default:
            return "არასწორი თვე";
    }
    let halfOfYear = monthNumber <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი";
    return `${monthName} - ${halfOfYear}`;
}