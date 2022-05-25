const express = require('express');
require('dotenv').config()
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000
const routes = require('./routes/route')


const app = express();
const hbs = exphbs.create({ defaultLayout: "main", extname: "hbs" })


app.engine("hbs", hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(routes)


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});
