const fs = require('fs');
const data = fs.readFileSync(
    `Harry Potter and the Sorcerer's Stone.txt`,
    {
        encoding: 'utf8',
        flag: 'r'
    }
);
const counters = {};

for (let i = 0; i < data.length; i++) {
    if (counters[data[i]] === undefined) {
        counters[data[i]] = 0
    }
    
    counters[data[i]] += 1;
}

const entries = Object.entries(counters);
const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

console.log(`Unsorted array:`, counters);
console.log(`Sorted array:`);
console.table(sortedEntries);
