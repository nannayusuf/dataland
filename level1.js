
function checkLevel1() {
    const sqlInput = document.getElementById('sql-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    const correctQuery = "select name from characters";
    
    if (sqlInput === correctQuery) {
        feedback.innerHTML = "Correct! You've retrieved the data successfully! Prepare for Level 2.";
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "Incorrect! Hint: Use the SELECT statement to fetch the 'name' column from the 'characters' table.";
        feedback.className = "incorrect";
    }
}
