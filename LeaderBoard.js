const leaderboardTable = document.querySelector('.leaderboard table tbody');

// example data, replace with your own data source
const leaderboardData = [
  { position: 1, name: 'John Doe', score: 1000 },
  { position: 2, name: 'NewMan', score: 950 },
  { position: 3, name: 'GoodMan', score: 850 },
  { position: 4, name: 'HighMan', score: 654 },
  { position: 5, name: 'Euler', score: 557 },
  // add more objects for positions 3 to 100
];

// loop through data and create table rows
leaderboardData.forEach(entry => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${entry.position}</td>
    <td>${entry.name}</td>
    <td>${entry.score}</td>
  `;
  leaderboardTable.appendChild(row);
});