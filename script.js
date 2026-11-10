
// ==================================
// SPENDWISE BUDGET TRACKER
// ==================================

// 1. Collect user input
let budget = Number(prompt("Enter your total budget in KSh:"));

let expenses = Number(prompt("Enter your total expenses in KSh:"));

// 2. Validate user input
if (
    !Number.isFinite(budget) ||
    !Number.isFinite(expenses) ||
    budget <= 0 ||
    expenses < 0
) {
    console.log("Invalid input. Please enter valid budget and expense amounts.");
}

// 3. Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 4. Function to display budget summary
function displaySummary(budget, expenses) {

    let balance = calculateBalance(budget, expenses);

    console.log("===== SPENDWISE BUDGET SUMMARY =====");

    console.log("Total Budget: KSh " + budget);

    console.log("Total Expenses: KSh " + expenses);

    console.log("Remaining Balance: KSh " + balance);

    if (balance > 0) {
        console.log("Status: You are within your budget.");
    } else if (balance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("====================================");
}

// 5. Execute the application
if (
    Number.isFinite(budget) &&
    Number.isFinite(expenses) &&
    budget > 0 &&
    expenses >= 0
) {
    displaySummary(budget, expenses);
}
