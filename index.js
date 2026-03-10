require('dotenv').config();
const port = process.env.PORT;
const app = require('./app');

app.listen(port, () => {
    console.log(`Fruits API listening on port ${port}`)
})
