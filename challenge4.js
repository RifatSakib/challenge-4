// problem 1:

function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || expenses > income) {
        return "Invalid Input";

    }
    else {

        let difference = income - expenses;
        let tax = difference * .20;
        return tax;
    }
}

const taxtotal = calculateTax(1000, 999);

console.log(taxtotal);


//problem 2:

function sendNotification(email) {
    for (let i = 0; i < email.length; i++) {
        if (email.indexOf("@") == -1) {

            return "Invalid Email";
        }

        else {
            const newStr = email.split("@")

            const userName = newStr[0];
            const DomainName = newStr[1];

            const notificationMessage = userName + " sent you an email from " + DomainName;

            return notificationMessage;

        }

    }




}

const notification = sendNotification("zihad@gmail.com");
console.log(notification);



//problem 3

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "invalid input";
    }

    let count = 0;
    for (let i = 0; i < name.length; i++) {

        if (!isNaN(name[i])) {
            count++;

        }

    }

    if (count > 0) {
        return true;
    }

    else {
        return false;
    }



}




const check = checkDigitsInName("Raj132");
console.log(check);



//problem 4 

function calculateFinalScore(obj) {

    let scoreSum = obj.testScore + obj.schoolGrade

    if (typeof obj !== 'object') {
        return "Invalid Input";
    }

    else if (scoreSum >= 80) {
        return true;


    }

    else if (scoreSum < 80) {
        if (obj.isFFamily === true) {
            scoreSum = scoreSum + 20;
            if (scoreSum >= 80) {
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
}

const sample = {
    name: "Rajib",
    testScore: 10,
    schoolGrade: 30,
    isFFamily: true
}

console.log(calculateFinalScore(sample));

// problem 5

function waitingTime(waitingTimes, serialNumber) {
    let remSerial = serialNumber - 1;
    let remPeople = remSerial - waitingTimes.length;
    let sum = 0;
    if (typeof waitingTimes !== 'object' || typeof serialNumber !== 'number') {
        return "Invalid Input";

    }
    else {



        for (let waiting of waitingTimes) {
            sum += waiting;
        }

        let avg = Math.round(sum / (waitingTimes.length));
        let remTime = avg * remPeople;
        return remTime;


    }


}


const arr = [6];
sNumber = "4";

console.log(waitingTime(arr, sNumber));