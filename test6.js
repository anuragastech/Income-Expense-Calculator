var incomeData = [];
var expenseData = [];



// income *****
function addincome() {
    var cat = document.sample.catogary.value;
    var income = parseFloat(document.sample.incomes.value);
    


    var table = document.getElementById("incomeTable");
    table.style.display="block"
    var newRow = table.insertRow(table.rows.length);

    var categoryCell = newRow.insertCell(0);
    categoryCell.innerHTML = cat;

    var incomeCell = newRow.insertCell(1);
    incomeCell.innerHTML = income;

    incomeData.push(income);

    var sumIncome = incomeData.reduce(function (total, current) {
        return total + current;
    }, 0);

    document.sample.catogary.value = "";
    document.sample.incomes.value = "";

    document.getElementById('incomeTotal').innerHTML = 'Total Income is: ' + sumIncome + '/-';

    updatePieChart();
    return;
    

}


// Expense ****





function addexpense() {
    var cat = document.sample1.catogary1.value;
    var expense = parseFloat(document.sample1.expense.value);


    var table = document.getElementById("expenseTable");
    // table.style.cssText=" height: 300px;  width: 250px;  margin-left: 15px ;  text-align: center  ; font-size:16px;     display: flex; align-items: center;     justify-content: space-between; " 
    // table.style.textAlign="center"

    table.style.display="block";
    var newRow = table.insertRow(table.rows.length);

    var categoryCell = newRow.insertCell(0);
    categoryCell.innerHTML = cat;
    

    var expenseCell = newRow.insertCell(1);
    expenseCell.innerHTML = expense;
    // expenseCell.style.textAlign="center"



    expenseData.push(expense);

    var sumExpense = expenseData.reduce(function (total, current) {
        return total + current;
    }, 0);

    document.sample1.catogary1.value = "";
    document.sample1.expense.value = "";

    document.getElementById('expenseTotal').innerHTML = 'Total Expense is: ' + sumExpense + '/-';

    updatePieChart();
    return;
    
}






// piechart***

var pieChartCanvas = document.getElementById("pieChart").getContext("2d")

var newChart = new Chart(pieChartCanvas, {

    type: 'pie',
    data: {
        labels: ["Income", "Expense"],
        datasets: [{
            label: "status",
            backgroundColor: ["#e63927", "#25692d"],
            data: [0,0],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart for Income and Expense'
        },
        responsive: true,
    }
});





function updatePieChart() {

   
    
    var incomeTotal = incomeData.reduce(function (total, current) {
        return total + current;
    }, 0);
    
    var expenseTotal = expenseData.reduce(function (total, current) {
        return total + current;
    }, 0);

    var xvalues = [incomeTotal, expenseTotal];



    newChart.data.datasets[0].data = xvalues;
    newChart.update();
}

// *****
    

    




