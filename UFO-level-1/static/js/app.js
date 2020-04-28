// from data.js
var tableData = data;

// Define page elements that will recieve actions
var filterButton = d3.select("#filter-btn");
var filterInput = d3.select("#master_form");


// Define event handler
filterButton.on("click",filterFunction);
filterInput.on("submit",filterFunction);

// Define function called when event handler is triggered
function filterFunction() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select input form element
    var inputForm = d3.select("#datetime");

    // Select value from inside input form
    var inputFormValue = inputForm.property("value");

    // Filter tableData based on inputFormValue
    var tableResult = tableData.filter(element => element.datetime == inputFormValue)

    // select the table body element on webpage
    var tbody = d3.select("tbody")

    // clear out any existing html within tboday
    tbody.html("");

    // Add data based on table result
    tableResult.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value)
        })
    })

};
