
//defining the fuction
function howmanydaystoBirthday(birthday) {
    //converting input string into an array 
    let birthdayArray = birthday.split("-");
    //getting the current day's values using the date object, the month,date,year,hour, minute and seconds are included
    let currentDate = new Date();
    //getting the current date out of the Date values
    let presentDate = currentDate.getDate();
    //getting present month out of the date values
    let presentMonth = currentDate.getMonth();
    //getting present year out of the date values
    let presentYear = currentDate.getFullYear();
    //adjusting date values by resetting the time to 0 hours(12am),0 minutes and 0 seconds
    let adjustedDate = new Date(presentYear, presentMonth, presentDate, 0, 0, 0);
    //the date object month is indexed on a 0-11 range, not 1-12 months so the birthmonth is adjusted to fit the index by subtracting 1
    let birthMonth = parseInt(birthdayArray[1]) - 1;

    //three initial conditions are set. In each of this conditions the output number of days to the next birthday
    // is calculated by subtracting the time to the next birthday from the present time,this is executed using 
    // the get.Time() method which gets the number of milliseconds from 1st january 1970. This is converted into 
    //days by dividing it by the number of milliseconds in a day.

    //first condition: if  the present month index is greater than the birth month index meaning the
    //next birthday occurs in the next year
    if (presentMonth > birthMonth) {
        //a year is added to the present year to get the year in the next birthday. 
        let yearAfterLastBirthday = presentYear + 1;
        //a new date object is created with values set to the day of the next birthday
        let nextBirthday = new Date(yearAfterLastBirthday, birthMonth, birthdayArray[0], 0, 0, 0);
        //subtraction between the two dates occurs using the getTime.() method to get the number of milliseconds between the two times
        let timetonextBirthday = nextBirthday.getTime() - adjustedDate.getTime();
        //the result is gotten by dividing by the number of milliseconds
        result = timetonextBirthday / 86400000;
        return result;

        //Second condition:if  the present month index is lesser than the birth month index meaning the
        //next birthday occurs in the same year.
    } else if (presentMonth < birthMonth) {
        let nextBirthday = new Date(presentYear, birthMonth, birthdayArray[0], 0, 0, 0);
        let timetonextBirthday = nextBirthday.getTime() - adjustedDate.getTime();
        result = timetonextBirthday / 86400000;
        return result;
        //third condition: if  the present month index is equal to the birth month index meaning the
        //next birthday could occur either in the same year or the next year depending on if the present date is 
        //"less than or equal to" or greater than  birth date. So two new condition are set
    } else if (presentMonth == birthMonth) {
        // if the present date is less than or equal to birthdate
        if (presentDate <= birthdayArray[0]) {
            let nextBirthday = new Date(presentYear, birthMonth, birthdayArray[0], 0, 0, 0);
            let timetonextBirthday = nextBirthday.getTime() - adjustedDate.getTime();
            result = timetonextBirthday / 86400000;
            return result;
            //if the present date is greater than the birthdate
        } else if (presentDate > birthdayArray[0]) {
            let yearAfterLastBirthday = presentYear + 1;
            let nextBirthday = new Date(yearAfterLastBirthday, birthMonth, birthdayArray[0], 0, 0, 0);
            let timetonextBirthday = nextBirthday.getTime() - adjustedDate.getTime();
            result = timetonextBirthday / 86400000;
            return result;
        };
    };

};
//testing thr function showing input tring format
howmanydaystoBirthday("09 - 06 - 1998");