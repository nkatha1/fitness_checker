// tdeeCalculator.js
const inquirer = require('inquirer');

// Function to calculate BMR (Mifflin-St Jeor equation)
function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

// Function to calculate TDEE
function calculateTDEE(bmr, activityLevel) {
    const activityFactors = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        superActive: 1.9,
    };

    return bmr * activityFactors[activityLevel];
}

inquirer
    .prompt([
        {
            type: 'number',
            name: 'weight',
            message: 'Enter your weight in kg:',
        },
        {
            type: 'number',
            name: 'height',
            message: 'Enter your height in cm:',
        },
        {
            type: 'number',
            name: 'age',
            message: 'Enter your age in years:',
        },
        {
            type: 'list',
            name: 'gender',
            message: 'What is your gender?',
            choices: ['male', 'female'],
        },
        {
            type: 'list',
            name: 'activityLevel',
            message: 'Select your activity level:',
            choices: ['sedentary', 'lightlyActive', 'moderatelyActive', 'veryActive', 'superActive'],
        }
    ])
    .then(answers => {
        const bmr = calculateBMR(answers.weight, answers.height, answers.age, answers.gender);
        const tdee = calculateTDEE(bmr, answers.activityLevel);
        
        console.log(`Your estimated Total Daily Energy Expenditure (TDEE) is: ${tdee.toFixed(2)} calories`);
    });
