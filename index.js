let express = require('express')
let app = express()
let port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("server started")
})

app.get('/', (req, res) => {
    res.send('codex')
})