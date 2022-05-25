const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: "Kayami | Bot"
    })
})
router.get('/command', (req, res) => {
    res.render('command', {
        title: "Kayami | Команды"
    })
})



module.exports = router