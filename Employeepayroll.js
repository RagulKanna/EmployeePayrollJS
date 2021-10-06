const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let employeehours = 0;
let employeecheck = Math.floor(Math.random() * 10) % 3;
switch (employeecheck) {
    case IS_PART_TIME:
        employeehours = partTimeEmployee();
        break;
    case IS_FULL_TIME:
        employeehours = fullTimeEmployee();
        break;
    default:
        employeehours = 0;
}
function partTimeEmployee() {
    return PART_TIME_HOURS;
}
function fullTimeEmployee() {
return FULL_TIME_HOURS;
}
let employeewage = employeehours * WAGE_PER_HOUR;
console.log("Employee wage is " + employeewage);