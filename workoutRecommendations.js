// workoutRecommendations.js
const inquirer = require('inquirer');

function getWorkoutRecommendations(goal) {
    const workouts = {
        loseWeight: [
            'High-Intensity Interval Training (HIIT)',
            'Running or cycling',
            'Jump rope',
        ],
        buildMuscle: [
            'Strength training (e.g., squats, deadlifts)',
            'Bodyweight exercises (e.g., push-ups, pull-ups)',
            'Resistance band workouts',
        ],
        improveEndurance: [
            'Running',
            'Swimming',
            'Cycling',
        ],
        maintainFitness: [
            'Yoga',
            'Swimming',
            'Moderate walking or jogging',
        ],
    };

    return workouts[goal];
}

inquirer
    .prompt([
        {
            type: 'list',
            name: 'goal',
            message: 'What is your fitness goal?',
            choices: ['loseWeight', 'buildMuscle', 'improveEndurance', 'maintainFitness'],
        }
    ])
    .then(answers => {
        const recommendations = getWorkoutRecommendations(answers.goal);
        console.log('Here are some recommended workouts for you:');
        recommendations.forEach((workout, index) => {
            console.log(`${index + 1}. ${workout}`);
        });
    });
