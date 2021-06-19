const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');
const readline = require('readline-sync');

async function city() {
    try {
        const cityName = readline.question(chalk.blue.bold('\n Please Enter The City Name: '));
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e6a7e602ae9bc0a6ae24e923e6193dc6`);
        // console.log(res.data.coord);
        console.log("Temperature :", res.data.main.temp);
        console.log("Weather :", res.data.weather[0].main);
        console.log("Latitude  :", res.data.coord.lat);
        console.log("Longitude  :", res.data.coord.lon);
        let ask = readline.question("Do you want to continue (Y/N): ");
        if (ask == "y" || ask == "Y") {
            city();
        } else if (ask == 'N' || ask == 'n'){
            console.log("Adios.Bye");
        } else {
            console.log("Invalid Response");
            city();
        }
    } catch (err) {
        console.error(err);
    }
}
module.exports = city;