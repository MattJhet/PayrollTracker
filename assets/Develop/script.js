// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let additionalEmployee = true;
  const employeeArray = [];

  while (additionalEmployee == true) {
    const firstName = prompt("Enter first name.");
    if (firstName === "") {
      alert('Invalid input')
    }  if (firstName === null) {
          break
    }
    const lastName = prompt("Enter last name");
    if (lastName === "") {
      alert('Invalid Input')
    }   if (lastName === null) {
          break
    }
    const salary = prompt("Enter Salary");
    if (salary === "") {
      alert('Invalid Input')
    }   
    if (salary === null) {
      break
    }
    if (isNaN(salary)){
      salary = 0
    }
    
    const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  if (confirm('Do you want to add another employee?')) {
    additionalEmployee = true
  } else {
    additionalEmployee = false
  }

  employeeArray.push(employee);
  console.log(employeeArray)
  }
  
  return employeeArray;
}

// Display the average salary
const displayAverageSalary = function(employeeArray) {
  // TODO: Calculate and display the average salary
  totalSalary = 0;
  for (i = 0; i < employeeArray.length; i++) {
    const currentEmployee = employeeArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeeArray.length;
  console.log(`The average salary is $ ${averageSalary}` );
  console.log(`There are ${employeeArray.length} employees`)
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeeArray) {
  // TODO: Select and display a random employee
  let randomEmployee = Math.floor(Math.random() * employeeArray.length);
  console.log(`Congratulations to ${employeeArray[randomEmployee].firstName} ${employeeArray[randomEmployee].lastName} for being randomly selected, you win nothing:)`);
  //console.log(getRandomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
