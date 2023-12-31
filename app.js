const port = 3000
const express = require('express')

const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyparser = require('body-parser')
// const flash = require('connect-flash')

const app = express()
const routes = require('./routes')
// const usePassport = require('./config/passport')

require('./config/mongoose')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(routes)
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
