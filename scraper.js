const axios = require('axios');
const cheerio = require('cheerio');

module.exports = () => {

const url = 'https://tretton37.com/meet';

return axios(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const employees = $('.ninjas > .ninja-summary');
    const ninjas = [];
    
        employees.each(function () {
            const link = $(this).find('.contact-info > h1 > a').attr('href');
            const name = $(this).find('a > img').attr('alt');
            const flag = $(this).find('.contact-info > h1 > a > span').text().slice(0,5);
            const office = $(this).find('.contact-info > h1 > a > span').text().substring(5);
            const image = $(this).find('a > img').attr('src');

            const fullName = name.split(/\s+/);

            const first = fullName[0];
            const second = fullName.length === 3 ? `${fullName[1]} ${fullName[2]}` : fullName[1];

            ninjas.push({
                link,
                name,
                office,
                image,
                full: { first, second },
                flag
            });
        });

        return ninjas;
        
    }).catch(err => console.log("error", err));

}
