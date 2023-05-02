// console.log('test of a link to HTML');
// console.log('This should appear in the console browser');

//need to grab entire Form element from HTML
document.getElementById('employee-info').addEventListener('submit', function(event){
    event.preventDefault();
});
//this should stop the Submit button from refreshing

//also need to get all form input values
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let idNumber = document.getElementById('idNumber').value;
let jobTitle = document.getElementById('jobTitle').value;
let annualSalary = parseFloat (document.getElementById('annualSalary').value);

/* create list of adjusted employee info, want to pass the
input values as a new list/table. */

let employeeList = document.createElement('li');
employeeList.textContent = `${firstName} ${lastName} (${jobTitle}) - ID: ${idNumber}
- Salary: $${annualSalary.toFixed(2)}/month`;
document.getElementById('employeeList').appendChild(employeeList);

/* The example showed a decimal spot, needed to search how
to format the 'string of numbers' to have a decimal spot in a specifc
area, thus the ".toFixed(num)".

/* set a employee list variable that creates a new list element item
when adding in all input values when clicking submit. Appending
to the DOM should enable multiple employee info to be added due
to newly created list element. */
