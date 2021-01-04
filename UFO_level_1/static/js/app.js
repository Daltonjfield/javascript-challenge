// from data.js
var tableData = data;

// YOUR CODE HERE!
{/* <tbody></tbody> */}
var t_body = d3.select("tbody")
function table_func(tableData){
    t_body.html("")
tableData.forEach(new_data=>{
    var t_row = t_body.append("tr")
    Object.values(new_data).forEach(value=>{
        t_row.append("td").text(value)
    })
})
}

function filter_func(){
    //selecting input element from html
    t_body.html("")
    var input_date = d3.select("input")
    //getting value property of input element
    var date_value = input_date.property("value")
    console.log(date_value)
    //filtering the date
    var filtered_date = tableData.filter(date=>date.datetime === date_value)
    console.log(filtered_date)
    //creating table with filtered data
    table_func(filtered_date)
}

//create event handlers
d3.select("button").on("click",filter_func)
table_func(tableData)