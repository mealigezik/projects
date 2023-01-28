const data = [
  "St Nr",
  "First Name",
  "Last Name",
  "Location",
  "Path",
  "C1234",
  "John",
  "Doe",
  "London",
  "Full-Stack",
  "C1234",
  "John",
  "Doe",
  "London",
  "Full-Stack",
  "C2345",
  "Jane",
  "Doe",
  "London",
  "Data-Science",
  "C2346",
  "Mary",
  "Ann",
  "Paris",
  "AWS-Devops",
  "C2347",
  "Adam",
  "Smith",
  "Texas",
  "AWS-Devops",
  "C2444",
  "Michael",
  "Great",
  "Arizona",
  "Full-Stack",
  "C2555",
  "William",
  "Cash",
  "Manchester",
  "Data-Science",
  "C2455",
  "Patrick",
  "Jane",
  "Madrid",
  "Full-Stack",
];

const table = document.createElement("table");
(row = table.insertRow()), (perrow = 5);

for (let i = 0; i < data.length; i++) {
  const cell = row.insertCell();
  cell.innerHTML = data[i];

  const next = i + 1;
  if (next % perrow == 0 && next != data.length) {
    row = table.insertRow();
  }
}

document.querySelector(".container").appendChild(table);
