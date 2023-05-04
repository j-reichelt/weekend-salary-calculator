// console.log('test of a link to HTML');
// console.log('This should appear in the console browser');

//need to grab entire Form element from HTML
let form = document.getElementById('employee-info');

let employees = [];
//document.getElementById('employee-info').addEventListener('submit', function(event){
  //event.preventDefault();

form.addEventListener('submit', function(event){
    event.preventDefault();


  
//this should stop the Submit button from refreshing

//also need to get all form input values

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let idNumber = document.getElementById('idNumber').value;
let jobTitle = document.getElementById('jobTitle').value;
let annualSalary = document.getElementById('annualSalary').value;
//let totalMonthly = document.getElementById('totalMonthly');
/* create list of adjusted employee info, want to pass the
input values as a new list/table. */


//Employee Object list/array

let employee = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSalary: annualSalary
};

//Adding employees to the array
employees.push(employee);

// generate employee list
generateEmployeeList();

//calculate total annual
calculatedTotalAnnualSalary();

// calculate total monthly 
totalMonthlyEmployeeSalary();


//rest input fields
form.reset();
});



//function to show the employee list

function generateEmployeeList() {
    let employeeList = document.getElementById('generateEmployeeList');
        employeeList.innerHTML = '';

// showing each employee on console browser
/* set a employee list variable that creates a new list element item
when adding in all input values when clicking submit. Appending
to the DOM should enable multiple employee info to be added due
to newly created list element. */

employees.forEach(function(employee){
    let listItem = document.createElement('li');
        listItem.textContent = `${employee.firstName} ${employee.lastName}
            (${employee.jobTitle}) - ID: ${employee.idNumber} - Salary: $${employee.annualSalary}`;

// need a delete button that removes input values

let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function(){
    deleteEmployee(employee);
});

// forgot to append the button to the html doc

listItem.appendChild(deleteButton);
employeeList.appendChild(listItem);
});
}


//figure out a function to sum up all employee annual salary total cost
function calculatedTotalAnnualSalary(){
    let totalMonthly = document.getElementById('totalMonthly');
    let totalSalary = 0;
    employees.forEach(function(employee) {
        totalSalary += parseFloat(employee.annualSalary)
    });

 function totalMonthlyEmployeeSalary() {
        let totalMonthlySalary = 0;
        employees.forEach(function(employee) {
          let monthlySalary = parseFloat(employee.annualSalary) / 12;
          totalMonthlySalary += monthlySalary ;
        });
        return totalMonthlySalary.toFixed(2);
      }  
let totalMonthlySalary = totalMonthlyEmployeeSalary(); 
//Need to add a red background color to Total Monthly if it exceeds $20,000.


if (totalSalary > 20000) {
    totalMonthly.classList.add('red-background'); 
}
    else {
        totalMonthly.classList.remove('red-background');
    }
totalMonthly.textContent = `Total Monthly Cost: $${totalMonthlySalary.toFixed(2)}`;
}
//extra $ was a bit confusing but had to understand that part of it was for the 'string of numbers' and
// the other was to part of a template literal...to call the monthly salary.
// had to search a way to get the decimal point formatted in our passed in values, thus
// the .fixed[i] method formats a number to have a certain amount of decimals.





// deleting the employee information
function deleteEmployee(employee) {
    let index = employees.indexOf(employee);
    if (index > -1) {
        employees.splice(index, 1);
        generateEmployeeList();
        calculatedTotalAnnualSalary();
    }
}
//remembered that we could 'remove' values within our array and
//utilized built-in array method .indexOf to search a specific object
// and removed with the splice method.

document.getElementById('firstName').value = '';
document.getElementById('lastName').value = '';
document.getElementById('jobTitle').value = '';
document.getElementById('annualSalary').value = '';

// });