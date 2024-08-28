// levels/level2.js

const characters = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const classes = [
    { id: 1, class_name: "Warrior" },
    { id: 2, class_name: "Mage" },
    { id: 3, class_name: "Archer" }
];

function runLevel2() {
    const gameText = document.getElementById('game-text');
    const gameOptions = document.getElementById('game-options');
    
    gameText.innerHTML = `
        <p>Level 2: Mastering Joins</p>
        <p>Your mission: Use an INNER JOIN to retrieve the names and classes of all adventurers.</p>
        <pre>
            characters
            -----------
            id | name
            -----------
            1  | Alice
            2  | Bob
            3  | Charlie

            classes
            -----------
            id | class_name
            -----------
            1  | Warrior
            2  | Mage
            3  | Archer
        </pre>
    `;
    
    gameOptions.innerHTML = `
        <textarea id="sql-input" rows="4" cols="50" placeholder="Type your SQL query here..."></textarea>
        <button onclick="checkLevel2()">Run Query</button>
        <div id="feedback"></div>
    `;
}

function checkLevel2() {
    const sqlInput = document.getElementById('sql-input').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    const correctQuery = "select characters.name, classes.class_name from characters inner join classes on characters.id = classes.id";
    
    if (sqlInput === correctQuery) {
        const result = characters.map(character => {
            const characterClass = classes.find(cls => cls.id === character.id);
            return `${character.name} - ${characterClass.class_name}`;
        }).join(", ");
        
        feedback.innerHTML = `Correct! You've successfully joined the tables: ${result}. Prepare for Level 3.`;
        feedback.className = "correct";
    } else {
        feedback.innerHTML = "Incorrect! Hint: You need to use an INNER JOIN to combine data from both tables.";
        feedback.className = "incorrect";
    }
}

runLevel2();
