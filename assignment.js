// https://github.com/mozibrishu/basic-js-assignment


// 1
function kilometerToMeter(kilometer) {
    //Distance can not be a negative number
    if (isNonNegetiveNumber(kilometer)) {
        var meter = kilometer * 1000;
        return meter;
    }
    else {
        console.log("Invalid Input");
    }
}


// 2
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {
    // number of product can not be negative or float
    if (isNonNegetiveIntegerNumber(numOfWatch) &&
        isNonNegetiveIntegerNumber(numOfPhone) &&
        isNonNegetiveIntegerNumber(numOfLaptop)) {
        var totalCost = (numOfWatch * 50) + (numOfPhone * 100) + (numOfLaptop * 500);
        return totalCost;
    }
    else {
        console.log("Invalid Input");
    }

}


// 3
function hotelCost(numOfDay) {
    // number of day can not be negative or float.
    if (isNonNegetiveIntegerNumber(numOfDay)) {
        var totalHotelCost = 0;
        if (numOfDay <= 10) {
            totalHotelCost = numOfDay * 100;
        }
        else if (numOfDay <= 20) {
            totalHotelCost = 1000 + (numOfDay - 10) * 80;
        }
        else {
            totalHotelCost = 1800 + (numOfDay - 20) * 50;
        }
        return totalHotelCost;
    }
    else {
        console.log("Invalid Input");
    }
}


// 4
function megaFriend(arrOfFriends) {
    if (arrOfFriends.length < 1) {
        console.log("Empty Array");
    }
    else {
        var megaName = arrOfFriends[0];
        for (var i = 0; i < arrOfFriends.length; i++) {
            var checkName = arrOfFriends[i];
            if (megaName.length < checkName.length) {
                megaName = checkName;
            }
        }
        return megaName;
    }
}



// Functions for checking Edge Cases.

function isNonNegetiveNumber(input) {
    if (isNaN(input) || (input < 0)) {
        return false;
    }
    else {
        return true;
    }
}


function isNonNegetiveIntegerNumber(input) {
    if (isNonNegetiveNumber(input)) {
        if ((input % 1) == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
