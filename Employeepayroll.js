const CHECK_EMPLOYEE_ABSENT = 0;
let employee_check = Math.floor(Math.random() * 10) % 2;
if (employee_check == CHECK_EMPLOYEE_ABSENT) {
    console.log("Employee is absent...");
    return;
}
else
    console.log("Employee is present...");