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
    
    salaryData.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$<span class="aSalary">${annualSalary}</span></td>
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

let monthlyCostText = document.querySelector('#monthly-cost');
let totalText = document.querySelector('#total-text');

function deleteRow(event) {
    let salaryToSubtract = event.target.parentElement.parentElement.querySelector('.aSalary').innerHTML;
    console.log('salary to subtract:', salaryToSubtract);
    console.log('before subtraction:', totalCost);
    totalCost = totalCost - Number(salaryToSubtract);
    console.log('after subtraction:', totalCost);
    let monthlyCost = totalCost / 12;
    monthlyCostText.innerHTML = `$ ${monthlyCost}`
    if (monthlyCost < 20000) {
        totalText.classList.remove('over-budget');
    }
    event.target.parentElement.parentElement.remove();
};