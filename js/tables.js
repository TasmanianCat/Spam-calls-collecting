const newestTable = document.getElementById("newestTable");
const tableFrom001 = document.getElementById("tableFrom001");
const btnPage0 = document.getElementById("goMainTable");
const btnPage1 = document.getElementById("goTable1");

function switchTable1() {
  btnPage1.addEventListener("click", (event) => {
    newestTable.classList.remove("show-table");
    tableFrom001.classList.add("show-table");
  });
}

function switchTableMain() {
  btnPage0.addEventListener("click", (event) => {
    tableFrom001.classList.remove("show-table");
    newestTable.classList.add("show-table");
  });
}

switchTable1();
switchTableMain();
