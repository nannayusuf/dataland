const database = {
    characters: [
        { name: "Alice", level: 5, class: "Warrior" },
        { name: "Bob", level: 3, class: "Mage" },
        { name: "Charlie", level: 2, class: "Archer" }
    ]
};

function checkLevel1() {
    const sqlInput = document.getElementById('sql-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    const correctQuery = "select name from characters";
    
    if (sqlInput === correctQuery) {
        const result = database.characters.map(character => character.name).join(", ");
        feedback.innerHTML = `Correct! You've retrieved the data successfully: ${result}. Prepare for Level 2.`;
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "Incorrect! Hint: Use the SELECT statement to fetch the 'name' column from the 'characters' table.";
        feedback.className = "incorrect";
    }
}
