const axios = require('axios');
const cheerio = require('cheerio');

module.exports = () => {

const url = 'https://tretton37.com/meet';

return axios(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const employees = $('.ninjas > .ninja-summary')
    const ninjas = [];
    
        employees.each(function () {
            const link = $(this).find('.contact-info > h1 > a').attr('href');
            const name = $(this).find('a > img').attr('alt');
            const office = $(this).find('.contact-info > h1 > a > span').text().substring(5);
            const image = $(this).find('a > img').attr('src');

            const fullName = name.split(/\s+/);
            // console.log(fullName);
            const firstName = fullName[0];
            const secondName = fullName.length === 3 ? fullName[1] : undefined;
            const lastName = fullName.length === 3 ? fullName[2] : fullName[1];

            ninjas.push({
                link,
                name,
                office,
                image,
                full: { firstName, secondName, lastName},

            });
        });
        // console.log(ninjas)
        return ninjas;
        
    }).catch(err => console.log("error", err));

}
