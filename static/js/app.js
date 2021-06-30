// import data from data.js
const tableData = data;

// reference HTML table using d3
var tbody = d3.select("tbody");

// build table for data
function buildTable(data){
    //creates a blank canvas
    tbody.html("");

    // loop through each object in the data
    // then, append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow
        // then add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// build click function
function handleClick(){
    // find where date values are stored on the webpage
    // then grab and hold in date variable
    let date = d3.select("#datetime").property("value");
    
    // if filter button is not clicked, all data will be returned
    let filteredData = tableData;

    // apply filter to the table data and keep only the rows where 'datetime'
    // value matches the filter value
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild table using the filtered data
    // if no date entered, filteredData will be the original tableData
    buildTable(filteredData);
}

// event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);