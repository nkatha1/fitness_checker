// foodTracker.js
const axios = require('axios');
const inquirer = require('inquirer');

// Replace with your actual Nutritionix API credentials
const NUTRITIONIX_API_KEY = 'YOUR_API_KEY';
const NUTRITIONIX_API_ID = 'YOUR_API_ID';

async function getFoodInfo(food) {
    const url = `https://api.nutritionix.com/v1_1/search/${food}?results=0:5&fields=food:item_name,food:calories,food:fat&appId=${NUTRITIONIX_API_ID}&appKey=${NUTRITIONIX_API_KEY}`;
    try {
        const response = await axios.get(url);
        const foodData = response.data.hits[0].fields;
        return {
            name: foodData['item_name'],
            calories: foodData['calories'],
            fat: foodData['fat'],
        };
    } catch (error) {
        console.log('Error fetching food data:', error);
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'food',
            message: 'Enter a food item to get its nutritional information:',
        }
    ])
    .then(async (answers) => {
        const foodInfo = await getFoodInfo(answers.food);
        console.log(`Nutrition info for ${foodInfo.name}:`);
        console.log(`Calories: ${foodInfo.calories}`);
        console.log(`Fat: ${foodInfo.fat}g`);
    });
