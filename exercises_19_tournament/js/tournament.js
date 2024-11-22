function createForms(){
    const teamsDiv = document.getElementById('teams-div');

    // Function to create a team form with 5 player name inputs
    function createTeamForm(teamNumber) {
        const form = document.createElement('form');
        form.id = `team${teamNumber}-form`;

        const heading = document.createElement('h2');
        heading.textContent = `Team ${teamNumber}`;
        form.appendChild(heading);

        for(let i = 1; i <= 5; i++) {
            const label = document.createElement('label');
            label.htmlFor = `team${teamNumber}-player${i}`;
            label.textContent = `Player ${i}: `;
            form.appendChild(label);

            const input = document.createElement('input');
            input.type = 'text';
            input.id = `team${teamNumber}-player${i}`;
            input.name = `team${teamNumber}-player${i}`;
            input.placeholder = `Enter name for Player ${i}`;
            input.required = true;
            form.appendChild(input);

            form.appendChild(document.createElement('br'));
        }

        return form;
    }

    // Create and append two team forms to teams-div
    for(let team = 1; team <= 2; team++) {
        const teamForm = createTeamForm(team);
        teamsDiv.appendChild(teamForm);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // select a casual index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortTeamsMembers(){
    const team1 = [];
    const team2 = [];

    for(let i = 1; i <= 5; i++) {
        const player1 = document.getElementById(`team1-player${i}`).value;
        const player2 = document.getElementById(`team2-player${i}`).value;

        team1.push(player1);
        team2.push(player2);
    }

    shuffleArray(team1);
    shuffleArray(team2);

    return [team1, team2];
}

function drawTeams() {
    const [team1, team2] = sortTeamsMembers();
    let drawDiv = document.getElementById('draw-div');

    for(let i = 1; i <= 5; i++) {
        let p = document.createElement('p');
        p.textContent = `Match ${i}: ${team1[i-1]} vs ${team2[i-1]}`;
        drawDiv.appendChild(p);
    }
}

window.onload = function() {
    createForms();
    document.getElementById('draw').onclick = drawTeams;
};