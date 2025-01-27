let search = document.querySelector('#search')
let companyFilter = document.querySelector('#companyFilter')
let addedName = document.querySelector('#addedName')
let addedEmail = document.querySelector('#addedEmail')
let addedCompany = document.querySelector('#addedCompany')
let addEmployeeBtn = document.querySelector('#addEmployeeBtn')
let error = document.querySelector('#error')
let employeeList = document.querySelector('#employeeList')

let searchEmployees = []
let employees = []
let newEmployee = {}
let companies = []
let selectedCompanies = ""

async function fetchEmployees() {
    let link = await fetch("https://jsonplaceholder.typicode.com/users")
    employees = await link.json()
    searchEmployees = [...employees]
    employeeList.innerHTML = searchEmployees.map((item) => {
        return `<div class = "employeeCard"> <h2> ${item.name} </h2> <p> Email:  ${item.email}</p> <p>Company: ${item.company.name}</p></div>`

    }).join(" ")
    comaniesList()
    // companyFilter.innerHTML = `<option>Filter by Company</option>` + companies.map((item) => {
    //     return `<option value = ${item}> ${item} </option>`
    // })  rewrites the whole option section, instead of adding options
}
fetchEmployees()

function comaniesList() {
    companies = searchEmployees.map(item => item.company.name)
    companies.forEach(company => {
        const option = document.createElement('option')
        option.value = company
        option.textContent = company
        companyFilter.appendChild(option)
    })
}

function displayEmployees() {
    employeeList.innerHTML = searchEmployees.map((item) => {
        return `<div class = "employeeCard"> <h2> ${item.name} </h2> <p> Email:  ${item.email}</p> <p>Company: ${item.company.name}</p></div>`

    }).join(" ")
}

addEmployeeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let nameValue = addedName.value;
    let emailValue = addedEmail.value;
    let companyValue = addedCompany.value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    function addEmploee(nameValue, emailValue, companyValue) {
        if (!nameValue || !emailValue || !companyValue) alert("Please, fill out all fields")
        if (!regex.test(emailValue)) {
            alert("Invalid Email address");
        }
        else {
            newEmployee.name = nameValue
            newEmployee.email = emailValue
            newEmployee.company = { name: companyValue }
            searchEmployees.push(newEmployee)
            employees.push(newEmployee)
            addedName.value = ""
            addedEmail.value = ""
            addedCompany.value = ""
            if (!companies.includes(companyValue)) {
                companies.push(companyValue)
                const option = document.createElement('option')
                option.value = companyValue
                option.textContent = companyValue
                companyFilter.appendChild(option)
            }
        }
        displayEmployees()
    }
    addEmploee(nameValue, emailValue, companyValue)
})

companyFilter.addEventListener('change', () => {
    const selectedCompany = companyFilter.value
    if (selectedCompany) {
        const filteredEmployees = searchEmployees.filter((employee) => {
            return employee.company.name.toLowerCase() === selectedCompany.toLowerCase();
        })
        employeeList.innerHTML = filteredEmployees.map((employee) => {
            return `<div class="employeeCard"> <h2>${employee.name}</h2> <p>Email: ${employee.email}</p> <p>Company: ${employee.company.name}</p> </div>`
        }).join('')
    }
    else {
        displayEmployees()
    }
})

search.addEventListener('input', () => {
    const nameSearch = search.value
    if (nameSearch) {
        const filteredNames = searchEmployees.filter((element) => {
            return element.name.toLowerCase().includes(search.value.toLowerCase())
        })
        employeeList.innerHTML = filteredNames.map((employee) => {
            return `<div class="employeeCard"> <h2>${employee.name}</h2> <p>Email: ${employee.email}</p> <p>Company: ${employee.company.name}</p> </div>`
        }).join('')
    }
    else {
        displayEmployees()
    }
})