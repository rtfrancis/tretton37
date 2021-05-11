const express = require('express');
const app = express();
const grabNinjas = require('./scraper.js')


app.get('/api/ninjas', (req, res) => {
    grabNinjas().then(data => res.json(data)).catch(err => console.log(err))
})

const port = 3001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
