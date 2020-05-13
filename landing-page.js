
const express = require('express');

const app = express();

const port = 5500

app.get('/', (req, res) => {
    res.sendFile('./home.html', { root: __dirname });
});

app.get('/member', (req, res) => {
    res.sendFile('./member.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));

