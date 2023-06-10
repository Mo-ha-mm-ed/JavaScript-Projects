// The purpose of this code is to calculate the 
//overtime as per Saudi law


// Part 1 getting salary info
let employeeBaseSalary = 1000;
let employeeHousingSalary = 1000;
let employeeTransportationSalary = 1000;

const employeeTotalSalary = (employeeBaseSalary + employeeHousingSalary + employeeTransportationSalary);

//Part 2 getting facts.
//Hours of working day is 8. Number of days in a month is 30
const daysOfMonth = 30;
const hoursOfTheDay = 8;


//Part 3 ==> Calculating hourly wage. 
// overtime = ((50% of hourly base salary) + (hourly wage)) * (hours employee worked)
const weWillTake50PercentofHourlyBaseSalary = ((((employeeBaseSalary/daysOfMonth))/hoursOfTheDay) * 0.5);
const hourlyRate = ((employeeTotalSalary/daysOfMonth)/hoursOfTheDay);



//Final, Create a function that calculate all that. 
const overtimeCalculating = (hoursWorked) => {
    overTime = (weWillTake50PercentofHourlyBaseSalary + hourlyRate) * hoursWorked ; 
    return overTime.toFixed(2);
}; 

// the .toFixed(2) will round the number to 2 dismals places

//Finally Output result
console.log(overtimeCalculating(1));





