const NUMBER_OF_DAYS = 20;
const MAx_HRS_IN_MONTH = 160;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const IS_PRESENT = 1;
let employeehours = 0;
let employeeMonthlyHours = 0
let monthlywage = 0;
let wage = 0;
let employeecheck = Math.floor(Math.random() * 10) % 2;
switch (employeecheck) {
    case IS_PART_TIME:
        employeehours = partTimeEmployee();
        monthlywage = employeeMonthlyWage(employeehours);
        break;
    case IS_FULL_TIME:
        employeehours = fullTimeEmployee();
        monthlywage = employeeMonthlyWage(employeehours);
        break;
}


function partTimeEmployee() {
    return PART_TIME_HOURS;
}
function fullTimeEmployee() {
    return FULL_TIME_HOURS;
}

function employeeMonthlyWage(hours) {
    let DailyWageandTotalWageArray = new Array();
    let total_Wage = 0;
    let totalhrs = 0;
    let totalworkingdays = 0;
    while (totalhrs < MAx_HRS_IN_MONTH && totalworkingdays < NUMBER_OF_DAYS) {
        let employee_check = Math.floor(Math.random() * 10) % 2;
        if (employee_check == IS_PRESENT)
            employeeMonthlyHours = hours;
        else
            employeeMonthlyHours = 0;
        DailyWageandTotalWageArray.push(calculatewage(employeeMonthlyHours));
        totalhrs += employeeMonthlyHours;
        totalworkingdays++;
    }
    total_Wage = calculateTotalWage(totalhrs);
    wage = totalhrs * WAGE_PER_HOUR;
    console.log("Total Working days: " + totalworkingdays + " days\nTotal Working Hours: " + totalhrs +" hrs");
    console.log("The Daily Wage is " + DailyWageandTotalWageArray + " and The total wage is " + total_Wage);
    return wage;
}

function calculateTotalWage(emp_Total_Hours) {
    return emp_Total_Hours * WAGE_PER_HOUR;
}

function calculatewage(emp_Hours) {
    return emp_Hours * WAGE_PER_HOUR;
}

