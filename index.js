let express = require('express')
let app = express()
let port = process.env.PORT || 4000
const path = require('path')
let password = 'mopex2'
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.set('view engien', 'ejs')
app.set('views', path.join(__dirname, '/views')) 
app.listen(port, () => {
    console.log("server started")
})

app.get('/login', (req, res) => {
    res.render('codex.ejs')
})

app.get('/', (req, res) => {
    if(req.cookies.key == password){
        res.render('home.ejs')
        console.log('real')
    }else{
        res.redirect('/login')
    }
})

app.get('/login', (req, res) => {
    res.render('codex.ejs')
})

app.post('/auth', (req, res) => {
    console.log('A USER TRIED TO LOG IN...')
    if(req.body.pass == password){
        res.cookie('key', password)
        console.log('user logged in')
        res.redirect('/')
    }else{
        res.redirect('/login')
        console.log('epic fail')
    }
})