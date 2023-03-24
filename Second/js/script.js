// [x] Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// [x] Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// [x] Generare numeri random al posto degli 0 nelle proprietà:
// [x] Punti fatti e falli subiti.
// [] Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ******************************************************************************************************************************* //

// Array
const teams = [
    {
        name: "Juventus",
        gol: "0",
        foulsSuffered: "0",
    },
    {
        name: "Milan",
        gol: "0",
        foulsSuffered: "0",
    },
    {
        name: "Inter",
        gol: "0",
        foulsSuffered: "0",
    },
    {
        name: "P.S.G.",
        gol: "0",
        foulsSuffered: "0",
    },
    {
        name: "Lazio",
        gol: "0",
        foulsSuffered: "0",
    },
    {
        name: "Napoli",
        gol: "0",
        foulsSuffered: "0",
    },
];

// Create a random number from 0 to 100
const getRandomNumber = () => Math.floor(Math.random() * 101);

// Update gol and foulsSuffered properties
const updateStats = (teams) => {
    teams.forEach((team) => {
        team.gol = getRandomNumber();
        team.foulsSuffered = getRandomNumber();
    });
};

updateStats(teams);
console.log(teams);

// Create a new array with names and fouls
const teamNamesAndFouls = teams.map(({ name, foulsSuffered }) => ({
    name,
    foulsSuffered,
}));

console.log(teamNamesAndFouls);
