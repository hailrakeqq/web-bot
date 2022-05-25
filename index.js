const express = require('express');
const cfg = require('./config.json')

const exphbs = require('express-handlebars');
const PORT = cfg.PORT || 3000
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
