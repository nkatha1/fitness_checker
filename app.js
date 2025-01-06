// app.js
const inquirer = require('inquirer');

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'Calculate BMI',
                    'Calculate TDEE',
                    'Get Workout Recommendations',
                    'Track Food',
                    'Track Progress',
                    'Exit',
                ],
            },
        ])
        .then((answers) => {
            switch (answers.action) {
                case 'Calculate BMI':
                    require('./bmiCalculator');
                    break;
                case 'Calculate TDEE':
                    require('./tdeeCalculator');
                    break;
                case 'Get Workout Recommendations':
                    require('./workoutRecommendations');
                    break;
                case 'Track Food':
                    require('./foodTracker');
                    break;
                case 'Track Progress':
                    require('./progressTracker');
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    process.exit();
                    break;
            }
            mainMenu();
        });
}

mainMenu();