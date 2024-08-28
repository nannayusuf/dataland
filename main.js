// script.js ou main.js

const database = {
    characters: [
        { name: "Alice", level: 5, class: "Warrior" },
        { name: "Bob", level: 3, class: "Mage" },
        { name: "Charlie", level: 2, class: "Archer" }
    ]
};

function startGame() {
    const gameText = document.getElementById('game-text');
    const gameOptions = document.getElementById('game-options');

    gameText.innerHTML = "You're about to enter Level 1: The Basics of SQL. Your first mission is to retrieve data from a corrupted table. Are you ready?";
    gameOptions.innerHTML = `
        <button onclick="loadLevel1()">Start Level 1</button>
        <button onclick="quitGame()">Quit</button>
    `;
}

function loadLevel1() {
    const gameText = document.getElementById('game-text');
    const gameOptions = document.getElementById('game-options');

    gameText.innerHTML = "Level 1: Basics of SQL. <br> Use the SELECT statement to find the name of the character.";
    gameOptions.innerHTML = `
        <textarea id="sql-input" rows="4" cols="50" placeholder="Type your SQL query here..."></textarea>
        <button onclick="checkLevel1()">Run Query</button>
        <div id="feedback"></div>
    `;
}

function checkLevel1() {
    const sqlInput = document.getElementById('sql-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    const correctQuery = "select name from characters";
    
    if (sqlInput === correctQuery) {
        const result = database.characters.map(character => character.name).join(", ");
        feedback.innerHTML = `Correct! You've retrieved the data successfully: ${result}. Prepare for Level 2.`;
        feedback.className = "correct";
        setTimeout(loadLevel2, 2000);  // Espera 2 segundos antes de carregar o próximo nível
    } else {
        feedback.innerHTML = "Incorrect! Hint: Use the SELECT statement to fetch the 'name' column from the 'characters' table.";
        feedback.className = "incorrect";
    }
}

function loadLevel2() {
    const script = document.createElement('script');
    script.src = 'levels/level2.js';
    document.body.appendChild(script);
}

function quitGame() {
    const gameText = document.getElementById('game-text');
    const gameOptions = document.getElementById('game-options');

    gameText.innerHTML = "Thank you for playing SQL Adventure!";
    gameOptions.innerHTML = `<button onclick="startGame()">Start Again</button>`;
}
