let row = null;
function formSubmit(event) {
  event.preventDefault();
  let data = readData();
  // Validation checks
  if (data.name === "" || data.age === "") {
    alert("All fields are mandatory!");
    return;
  } else if (data.age < 20 || data.age > 60) {
    alert("Employee age must be between 20 and 60!");
    return;
  }
  if (row == null) {
    getData(data);
  } else {
    updateData(data);
  }

  clearForm();
}

function readData() {
  let formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["age"] = document.getElementById("age").value;
  formData["gmail"] = document.getElementById("gmail").value;
  formData["designations"] = document.getElementById("designations").value;
  return formData;
}

function getData(data) {
  let table = document.getElementById("tbody");

  let row = table.insertRow();

  let cellOne = row.insertCell(0);
  cellOne.innerHTML = data.name;

  let cellTwo = row.insertCell(1);
  cellTwo.innerHTML = data.age;

  let cellThree = row.insertCell(2);
  cellThree.innerHTML = data.gmail;

  let cellFour = row.insertCell(3);
  cellFour.innerHTML = data.designations;

  let cellFive = row.insertCell(4);
  cellFive.innerHTML = `
      <button onclick="editData(this)">Edit</button>
      <button onclick="deleteData(this)">Delete</button>
    `;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gmail").value = "";
  document.getElementById("designations").value = "";
}
function deleteData(btn) {
  let row = btn.parentElement.parentElement;
  document.getElementById("tbody").deleteRow(row.rowIndex - 1);
}
function editData(tableData) {
  row = tableData.parentElement.parentElement;
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("age").value = row.cells[1].innerHTML;
  document.getElementById("gmail").value = row.cells[2].innerHTML;
  document.getElementById("designations").value = row.cells[3].innerHTML;
}
function updateData(data) {
  row.cells[0].innerHTML = data.name;
  row.cells[1].innerHTML = data.age;
  row.cells[2].innerHTML = data.gmail;
  row.cells[3].innerHTML = data.designations;
}
