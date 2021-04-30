const express = require('express');
const app = express();
const grabNinjas = require('./scraper.js')

// console.log(grabNinjas)

app.get('/api/ninjas', (req, res) => {

    // console.log(grabNinjas.grabNinjas())
    grabNinjas().then(data => res.json(data))

    // res.json(ninjas)
})

const port = 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));


// const axios = require('axios');
// const cheerio = require('cheerio');

// const grabNinjas = () => {

// const url = 'https://tretton37.com/meet';

// axios(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const employees = $('.ninjas > .ninja-summary')
//         const ninjas = [];

//         employees.each(function () {
//             const link = $(this).find('.contact-info > h1 > a').attr('href');
//             const name = $(this).find('a > img').attr('alt');
//             const office = $(this).find('.contact-info > h1 > a > span').text().substring(5);
//             const image = $(this).find('a > img').attr('src');

//             ninjas.push({
//                 link,
//                 name,
//                 office,
//                 image
//             });
//         });

//         console.log(ninjas);

//     });
// }

// grabNinjas();