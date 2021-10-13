const NUMBER_OF_DAYS = 20;
const MAx_HRS_IN_MONTH = 160;
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const IS_PRESENT = 1;
let employeehours = 0;
let employeeMonthlyHours = 0
let monthlywage = 0;
let wage = 0;
let DailyWageArr = new Array();
let mapDailyWageandTotalWageArr = new Array();
let total_Wage_from_Array;
let day = 0;
let days = 0;
let mapdaywithdailyWage = new Map();


let employeecheck = Math.floor(Math.random() * 10) % 2;
switch (employeecheck) {
    case IS_PART_TIME:
        employeehours = partTimeEmployee();
        monthlywage = employeeMonthlyWage(employeehours);
        mapDailyWageandTotalWageArr = DailyWageArr.map(mapwithwage);
        console.log(mapDailyWageandTotalWageArr);
        break;

    case IS_FULL_TIME:
        employeehours = fullTimeEmployee();
        monthlywage = employeeMonthlyWage(employeehours);
        mapDailyWageandTotalWageArr = DailyWageArr.map(mapwithwage);
        console.log(mapDailyWageandTotalWageArr);
        let fullday = mapDailyWageandTotalWageArr.filter(fulltimemonthlywage);
        console.log(fullday);
        let findfullday = mapDailyWageandTotalWageArr.find(fulltimemonthlywage);
        console.log(findfullday);
        let everyfullday = mapDailyWageandTotalWageArr.every(fulltimemonthlywage);
        console.log(everyfullday);
        let anyparttime = mapDailyWageandTotalWageArr.some(isAnyPartTime);
        console.log(anyparttime);
        break;
}



function partTimeEmployee() {
    return PART_TIME_HOURS;
}
function fullTimeEmployee() {
    return FULL_TIME_HOURS;
}

function employeeMonthlyWage(hours) {
    let totalhrs = 0;
    let totalworkingdays = 0;
    while (totalhrs < MAx_HRS_IN_MONTH && totalworkingdays < NUMBER_OF_DAYS) {
        let employee_check = Math.floor(Math.random() * 10) % 2;
        if (employee_check == IS_PRESENT)
            employeeMonthlyHours = hours;
        else
            employeeMonthlyHours = 0;
            totalworkingdays++;
        DailyWageArr.push(calculatewage(employeeMonthlyHours));
        mapdaywithdailyWage.set(totalworkingdays, calculateTotalWage(employeeMonthlyHours));
        totalhrs += employeeMonthlyHours;
    }
    wage = totalhrs * WAGE_PER_HOUR;
    console.log("Total Working Hours: " + totalhrs + " hrs");
    console.log("The total wage is " + DailyWageArr.reduce((a, b) => a + b));
    console.log("Number of working days:" + DailyWageArr.reduce(totalNoofDays, 0));
    console.log(mapdaywithdailyWage);
    return wage;
}


function calculateTotalWage(emp_Total_Hours) {
    return emp_Total_Hours * WAGE_PER_HOUR;
}


function calculatewage(emp_Hours) {
    return emp_Hours * WAGE_PER_HOUR;
}

let empwage = 0;
function sum(dailyhours) {
    return empwage += dailyhours;
}

function mapwithwage(DailyWageArr) {
    day++;
    return "Day: " + day + " wage is " + DailyWageArr;
}

function fulltimemonthlywage(DailyWageArr) {
    return DailyWageArr.includes("160");
}

function isAnyPartTime(DailyWageArr) {
    return DailyWageArr.includes("80");
}

function totalNoofDays(numberofdays, DailyWageArr) {
    if (DailyWageArr > 0) return numberofdays + 1;
    return numberofdays;
}