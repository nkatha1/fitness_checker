// progressTracker.js
const fs = require('fs');
const inquirer = require('inquirer');

function saveProgress(progress) {
    const filePath = 'fitnessProgress.json';
    const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
    currentData.push(progress);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    console.log('Progress saved!');
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'weight',
            message: 'Enter your current weight (kg):',
        },
        {
            type: 'input',
            name: 'workout',
            message: 'Enter your workout for today (e.g., "Running 30 minutes"):',
        }
    ])
    .then(answers => {
        const progress = {
            date: new Date().toISOString(),
            weight: answers.weight,
            workout: answers.workout,
        };
        saveProgress(progress);
    });
