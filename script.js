console.log('hello world');

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
            <td>$${annualSalary}</td>
            <td><input type="button" value="Delete" onclick="deleteRow(event)" /></td>
        </tr>
    `
};

function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
}