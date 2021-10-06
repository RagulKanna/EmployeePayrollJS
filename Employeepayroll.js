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
let employeecheck = Math.floor(Math.random() * 10) % 3;
switch (employeecheck) {
    case IS_PART_TIME:
        employeehours = partTimeEmployee();
        monthlywage = employeeMonthlyWage(PART_TIME_HOURS);
        break;
    case IS_FULL_TIME:
        employeehours = fullTimeEmployee();
        monthlywage = employeeMonthlyWage(FULL_TIME_HOURS);
        break;
    default:
        employeehours = 0;
}

let employeewage = employeehours * WAGE_PER_HOUR;
console.log("Employee daily wage is " + employeewage + " and monthly wage is " + monthlywage);

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
        totalhrs += employeeMonthlyHours;
        totalworkingdays++;
    }
    if (totalhrs < MAx_HRS_IN_MONTH) {
        wage = totalhrs * WAGE_PER_HOUR;
        console.log("Total Working days: " + totalworkingdays + " Total Working Hours: " + totalhrs);
    }
    else {
        wage = MAx_HRS_IN_MONTH * WAGE_PER_HOUR;
        console.log("Total Working days: " + totalworkingdays + " Total Working Hours: " + MAx_HRS_IN_MONTH);
    }
    return wage;
}