let form = document.querySelector('#addForm');
let countAddEmp = 0;
let countDelEmp = 0;

// CREATE AN ARRAY OF EMPLOYEES
let employeesArray = [
    ["01","Alejandro Lopez","123","alelopez@hotmail.com","Administrative Assistant"],
    ["02","Erika Burrola","231","erikanurrola@hotmail.com","Engenering"],
    ["03","Demian Lopez","321","demianlopez@hotmail.com","Software Engineer"],
    ["04","Dara Lopez","132","daralopez@hotmail.com","Administrative Assistant"],
    ["05","Maria Reyes","213","mariareyes@hotmail.com","Quality"]
]


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
function checkStorage() {


    if (typeof(Storage) !== "undefined") {

        // Comprobar si hay datos en localStorage
        let storedData = localStorage.getItem("employeesTable");
        let storedDatJson = JSON.parse(storedData);
        if (storedDatJson && storedDatJson.length > 0 && storedDatJson.some(subArray => subArray.length > 0)) {
            console.log("Date recovered localStorage:");
            employeesArray = JSON.parse(storedData);
        } else {

            console.log("No information localStorage.");
        }
    } 

}


// GET DOM ELEMENTS
document.addEventListener("DOMContentLoaded",function() {
    checkStorage();
    buildEmployeesTable();
    
});


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function buildEmployeesTable(){
    const tbody = document.getElementById('empTbody');
    let filasHTML = "";
    for(let x in employeesArray ){
        filasHTML += `
         <tr>
           <td>${employeesArray[x][0]}</td>
           <td>${employeesArray[x][1]}</td>
           <td>${employeesArray[x][2]}</td>
           <td>${employeesArray[x][3]}</td>
           <td>${employeesArray[x][4]}</td>
           <td><button  style="background-color: red;" >X</button></td> <!-- Botón en cada fila -->
         </tr>
        `
    }
   
    tbody.innerHTML = filasHTML;

  

}



// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id= document.querySelector('#id').value
    let name= document.querySelector('#name').value
    let ext= document.querySelector('#extension').value
    let email= document.querySelector('#email').value
    let depa= document.querySelector('#department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const tableBody = document.getElementById('empTbody');
    const newRow = tableBody.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0)
    let cellName = newRow.insertCell(1)
    let cellExt = newRow.insertCell(2)
    let cellEmail = newRow.insertCell(3)
    let cellDeparment =newRow.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));;
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDeparment.appendChild(document.createTextNode(depa));

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let employeesNew = [id, name, ext, email, depa];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeesArray.push(employeesNew);

    countAddEmp ++;
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    let inputId = document.getElementById("id")
    inputId.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    const confirmation = confirm("Are you sure you want to delete this employee?");

        if (confirmation) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const row = e.target.parentNode.parentNode;
            const rowIndex = Array.from(row.parentNode.children).indexOf(row);
            // REMOVE EMPLOYEE FROM ARRAY
            employeesArray.splice(rowIndex, 1); 
            // BUILD THE GRID
            countDelEmp ++;
            buildGrid();
            
            localStorage.setItem('employeesTable', JSON.stringify(employeesArray));
            
        }


       

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = document.getElementById('empTbody');
    tbody.innerHTML = "";

    // REBUILD THE TBODY FROM SCRATCH
    employeesArray.forEach(employee=>{
        const tr = document.createElement("tr");

        const tdId = document.createElement("td")
        tdId.textContent = employee[0];
        tr.appendChild(tdId)

        const tdName = document.createElement("td")
        tdName.textContent = employee[1];
        tr.appendChild(tdName)

        const tdExtension = document.createElement("td")
        tdExtension.textContent = employee[2];
        tr.appendChild(tdExtension)

        const tdEmail = document.createElement("td")
        tdEmail.textContent = employee[3];
        tr.appendChild(tdEmail)

        const tdDepartment = document.createElement("td")
        tdDepartment.textContent = employee[4]
        tr.appendChild(tdDepartment)

        const buttonDelete =document.createElement('button');
        const tdButtonDelete = document.createElement("td")
        buttonDelete.textContent = 'X';
        buttonDelete.type = 'click'
        buttonDelete.style.backgroundColor = 'red'
        tdButtonDelete.appendChild(buttonDelete);
        tr.appendChild(tdButtonDelete);

        //tr.appendChild(td);
        tbody.appendChild(tr)
     
    })
 
   
      
    // UPDATE EMPLOYEE COUNT
    updateCountDisplay();
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employeesTable', JSON.stringify(employeesArray));
    JSON.parse(localStorage.getItem('employeesTable'))

};

function updateCountDisplay() {
    let div = document.querySelector('#count');
    div.innerHTML = '';

    const addedText = document.createTextNode("Total Added Employees: " + countAddEmp);
    const deletedText = document.createTextNode("Total Deleted Employees: " + countDelEmp);

    div.appendChild(addedText);
    div.appendChild(document.createElement('br')); 
    div.appendChild(deletedText);

}
