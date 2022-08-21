let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('../../test.txt').toString().trim().split('\n');
const [n, m] = input.shift().split(' ');

input = input.map((row) => row.split(' '));

const sharks = [];
const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        input[i][j] = Number(input[i][j]);
        if (input[i][j] === 1) {
            sharks.push([i, j]);
        }
    }
}

while (sharks.length > 0) {
    const tmp = [];
    while (sharks.length > 0) {
        const [x, y] = sharks.shift();
        const num = input[x][y];
        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || input[nx][ny] !== 0) continue;
            input[nx][ny] = num + 1;
            tmp.push([nx, ny]);
        }
    }
    sharks.push(...tmp);
}

let _max = 0;
input.forEach((row) => (_max = Math.max(_max, Math.max(...row))));
console.log(_max - 1);