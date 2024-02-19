console.log('hello world');

let totalCost = 0;


function submitForm(event) {
    event.preventDefault();
    console.log('form submitted');
    let salaryData = document.querySelector('#salary-data');
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNumber = document.querySelector('#id-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;
    let monthlyCostText = document.querySelector('#monthly-cost');
    let totalText = document.querySelector('#total-text');
    salaryData.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$${annualSalary}</td>
            <td><button onclick="deleteRow(event)">Delete</button> </td>
        </tr>
    `
    totalCost = totalCost + Number(annualSalary);
    console.log(totalCost);
    let monthlyCost = totalCost / 12;
    monthlyCostText.innerHTML = `$ ${monthlyCost}`;

    if (monthlyCost >= 20000) {
        totalText.classList.add('over-budget');
    }
    clearInputs();
};

function clearInputs() {
    let allInputs = document.querySelectorAll('.input');
    allInputs.forEach(singleInput => singleInput.value = '');
};

function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
};