// bmiCalculator.js
const inquirer = require('inquirer');

// Function to calculate BMI
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

// Function to check BMI category
function checkBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
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
      message: 'Enter your height in meters:',
    },
  ])
  .then((answers) => {
    const bmi = calculateBMI(answers.weight, answers.height);
    const category = checkBMICategory(bmi);
    console.log(`Your BMI is: ${bmi.toFixed(2)} (${category})`);
  });
