// from data.js
var tableData = data;

// Define page elements that will recieve actions
var filterButton = d3.select("#filter-btn");
var filterInput = d3.select("#master_form");


// Define event handler
filterButton.on("click",filterFunction);
filterInput.on("change",filterFunction);

// Define function called when event handler is triggered
function filterFunction() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select input form element
    var inputDate= d3.select("#datetime").property("value");
    var inputCity= d3.select("#city").property("value");
    var inputState= d3.select("#state").property("value");
    var inputCountry= d3.select("#country").property("value");
    var inputShape= d3.select("#shape").property("value");

    // Filter tableData based on inputFormValue
    // var tableResult = tableData.filter(element => element.datetime == inputDate)
    var tableResult = tableData.filter(element => element.datetime == inputDate && element.city == inputCity && element.state == inputState && element.country == inputCountry && element.shape == inputShape )

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
