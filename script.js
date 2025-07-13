function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonob = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonob);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "eqField", "mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonob = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonob);
}

function generateCV() {
  // Name
  let name = document.getElementById("nameField").value;
  document.getElementById("nameT1").innerText = name;
  document.getElementById("nameT2").innerText = name;

  // Contact Info
  document.getElementById("contactT").innerText = document.getElementById("contactField").value;
  document.getElementById("addressT").innerText = document.getElementById("addressField").value;

  // Social Links
  document.getElementById("fbT").innerText = document.getElementById("fbField").value;
  document.getElementById("instaT").innerText = document.getElementById("instaField").value;
  document.getElementById("linkedT").innerText = document.getElementById("linkedField").value;

  // Objective (FIXED HERE)
  let objectiveValue = document.getElementById("objectiveField").value;
  document.getElementById("objectiveT").innerText = objectiveValue;

  // Work Experience
  let wes = document.getElementsByClassName("weField");
  let weList = "";
  for (let e of wes) {
    if (e.value.trim() !== "") {
      weList += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("weT").innerHTML = weList || "<li>No experience added</li>";

  // Academic Qualification
  let aqs = document.getElementsByClassName("eqField");
  let aqList = "";
  for (let e of aqs) {
    if (e.value.trim() !== "") {
      aqList += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("aqT").innerHTML = aqList || "<li>No qualification added</li>";

  // Show CV Page
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  window.print();
}
