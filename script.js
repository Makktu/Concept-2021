"use strict";

// TODO Next touch!
// TODO 1) Make the print buttons work (form and table)
// TODO 2) Spruce up the styling – less 1999, at least 2009.
// TODO
// TODO
// TODO

let lastClicked;
function allToggle() {
    if (allTasksToggle.style.display === "none") {
        allTasksToggle.style.display = "block";
        lastClicked = "allTasksOn";
    } else {
        allTasksToggle.style.display = "none";
        lastClicked = "allTasksOff";
    }
}
function porToggle() {
    if (porteringToggle.style.display === "none") {
        porteringToggle.style.display = "block";
        lastClicked = "porteringOn";
    } else {
        porteringToggle.style.display = "none";
        lastClicked = "porteringOff";
    }
}
function domToggle() {
    if (porteringToggle.style.display === "none") {
        porteringToggle.style.display = "block";
        lastClicked = "porteringOn";
    } else {
        porteringToggle.style.display = "none";
        lastClicked = "porteringOff";
    }
}
function catToggle() {
    if (porteringToggle.style.display === "none") {
        porteringToggle.style.display = "block";
        lastClicked = "porteringOn";
    } else {
        porteringToggle.style.display = "none";
        lastClicked = "porteringOff";
    }
}
function vinToggle() {
    if (porteringToggle.style.display === "none") {
        porteringToggle.style.display = "block";
        lastClicked = "porteringOn";
    } else {
        porteringToggle.style.display = "none";
        lastClicked = "porteringOff";
    }
}

// * assign all the panels to a single const variable
const panels = document.querySelectorAll(".panel");
const allTasks = document.getElementById("all-jobs");
const porteringToggle = document.querySelector(".portering");
const allTasksToggle = document.querySelector(".all-jobs");

// * loop through the panels, adding an event listener to all
// * and reacting to clicks
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.toggle("active");
        if (panel.classList.contains("new-task"))
            console.log("new-task clicked");
        if (panel.classList.contains("all-tasks")) allToggle();
        if (panel.classList.contains("domestic"))
            console.log("domestic clicked");
        if (panel.classList.contains("porters")) porToggle();
        if (panel.classList.contains("vinci")) console.log("vinci clicked");
        if (panel.classList.contains("catering"))
            console.log("catering clicked");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
    if ((lastClicked = "porteringOn")) porteringToggle.style.display = "none";
    if ((lastClicked = "allTasksOn")) allTasksToggle.style.display = "none";
};

let clearClick = false;

// * CREATE AND MAINTAIN JOBNUMBER

// ********************************************************************
// let startJobNum = Number(prompt("What's the starting job number?"));
// FOR THE FUTURE ^^^
// *******************************************************************
function maintainJobNum() {
    document.getElementById("job-number").innerHTML =
        "Job Number: " + startJobNum;
}

let startJobNum = 1001;
// let startJobNum = Number(prompt("What's the starting job number?"));
maintainJobNum();

let allJobs = [];

//*************************************
//* SHOW DATE-TIME AT TOP OF NEW FORM *
//*************************************
function tableTime() {
    const dateTimeDisplay = document.querySelector("#date-time");
    let dateX = new Date();
    let dateString = (dateX += "");
    let dateTime = dateString.substring(0, dateString.indexOf("G"));
    dateTimeDisplay.innerText = dateTime; // cuts off the returned date-time string at the start of its GMT guff
    return tableTime;
}

function timeShow() {
    const dateTimeDisplay = document.querySelector("#date-time");
    let dateX = new Date();
    let dateString = (dateX += "");
    let dateTime = dateString.substring(0, dateString.indexOf("G"));
    dateTimeDisplay.innerText = dateTime; // cuts off the returned date-time string at the start of its GMT guff
    return dateTime;
}

timeShow();

// ________________________________________________
// ________________________________________________

// ***************************
// * LIGHT/DARK MODE FLIPPER *
// ***************************

/* const changeColourScheme = () => {
    if (!isDark) {
        document.querySelector(".light-mode").classList.add("dark-mode");
        isDark = true;
    } else {
        document.querySelector(".light-mode").classList.remove("dark-mode");
        isDark = false;
    }
};

const darkFlip = document.querySelector(".mode-flipper");

let isDark = false;

darkFlip.addEventListener("click", changeColourScheme); */

// * PRINT
// ! (bugged as-is)

// document.querySelector(".btn-print").addEventListener("click", function () {
//     window.print();
// });

// **************
// * CLEAR FORM *
// **************

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("from-location").value = "";
    document.getElementById("to-location").value = "";
    document.getElementById("job-details").value = "";
    document.getElementById("contract").value = "none";
    timeShow();
    if (!clearClick) {
        startJobNum++;
        // document.getElementById("job-number").innerHTML = startJobNum;
        maintainJobNum();
    }

    // document.getElementById("operator").value = "";
    // document.getElementById("name").value = "";
}
document.querySelector(".btn-clear").addEventListener("click", function () {
    clearClick = true;
    clearForm();
});

// ********************
// *       SAVE       *
// ********************
let maxID = 0;
function getTemplateRow() {
    let x = document.getElementById("templateRow").cloneNode(true);
    x.id = "";
    x.style.display = "";
    x.innerHTML = x.innerHTML.replace(/{id}/, ++maxID);
    return x;
}
function addRow() {
    let t = document.querySelector(".printTable");
    let rows = t.getElementsByTagName("tr");
    let r = rows[rows.length - 1];
    r.parentNode.insertBefore(getTemplateRow(), r);
}

const saveClicked = () => {
    timeShow();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let fromLoc = document.getElementById("from-location").value;
    let toLoc = document.getElementById("to-location").value;
    let details = document.getElementById("job-details").value;
    let contract = document.getElementById("contract").value;
    let operator = document.getElementById("operator").value;
    let jobNumber = document.getElementById("job-number").textContent;
    // let timeDate = document.getElementById("job-number").value;

    addRow();

    document.getElementById("job-num").innerHTML = jobNumber;
    document.getElementById("con-tract").innerHTML = contract;
    document.getElementById("staff").innerHTML = name;
    document.getElementById("ext").innerHTML = phone;
    document.getElementById("from-loc").innerHTML = fromLoc;
    document.getElementById("to-loc").innerHTML = toLoc;
    document.getElementById("the-deets").innerHTML = details;
    document.getElementById("hd-op").innerHTML = operator;
    document.getElementById("time-date").innerHTML = timeShow().slice(4, 21);

    let jobStr = {};

    jobStr.jobnumber = jobNumber;
    jobStr.name = name;
    jobStr.email = email;
    jobStr.telephone = phone;
    jobStr.from = fromLoc;
    jobStr.to = toLoc;
    jobStr.details = details;
    jobStr.contract = contract;
    jobStr.operator = operator;

    allJobs.push(jobStr);

    console.log(jobStr);
    console.log(allJobs);
    clearClick = false;
    clearForm();
};

document.querySelector(".btn-save").addEventListener("click", saveClicked);

// *****************
// *  PRINT TABLE  *
// *****************
// * (IN PROGRESS) *
// *****************

function newTabTable() {
    sessionStorage.setItem("allJobs", allJobs);
    window.open("show_table.html");
    // document.write("works");
    // alert("");
    // window.close();
}

// document.querySelector(".print-table").addEventListener("click", newTabTable);
