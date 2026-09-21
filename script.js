function createTable() {
  // 1. Prompt for number of rows and columns with exact text
  const rowsInput = prompt("Input number of rows");
  const colsInput = prompt("Input number of columns");

  // 2. Parse input values
  const rn = parseInt(rowsInput);
  const cn = parseInt(colsInput);

  // 3. Handle non-numeric values (ignore and do not create table)
  if (isNaN(rn) || isNaN(cn)) {
    return;
  }

  // 4. Handle 0 or negative values (alert and do not create table)
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0");
    return;
  }

  // 5. Get the table element and clear any existing content
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // 6. Dynamically build the table rows and cells
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}