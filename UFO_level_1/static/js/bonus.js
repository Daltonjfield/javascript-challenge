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
    var input_date = d3.select("#datetime").property("value")
    var input_city = d3.select("#city").property("value")
    var input_state = d3.select("#state").property("value")
    var input_country = d3.select("#country").property("value")
    var input_shape = d3.select("#shape").property("value")
    //getting value property of input element

    console.log(date_value)
    //filtering the date
    // var filtered_date = tableData.filter(date=>date.datetime === date_value)
    if (input_date){
        filtered_data = tableData.filter(date=>date.datetime === input_date)
        console.log(input_date)
        console.log(filtered_data)
    }
    if (input_city){
        filtered_data = tableData.filter(data=>data.city === input_city)
        console.log(input_city)
        console.log(filtered_data)
    }
    if (input_country){
        filtered_data = tableData.filter(data=>data.country === input_country)
    }
    if (input_state){
        filtered_data = tableData.filter(data=>data.state === input_state)
    }
    if (input_shape){
        filtered_data = tableData.filter(data=>data.shape === input_shape)
    }
    else("Data not found")
    console.log(filtered_data)
    console.log(input_city)

    //creating table with filtered data
    table_func(filtered_data)
}


//create event handlers
d3.select("button").on("click",filter_func)
table_func(tableData)