const axios = require('axios')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const express = require('express')
const path = require('path')
const router = require('./routes/router')
const { Responses, Urls } = require('./models/Schemas')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

const PORT = process.env.PORT || 3001

const passwd = 'goopaa32'
const db = `mongodb+srv://vvsick:${passwd}@cluster0.jwoprd2.mongodb.net/`

async function getResponse(url) {
    await axios.get(url)
        .then((response) => {
            const status = response.status
            const text = response.statusText

            const result = new Responses({ url, status, text })

            result
                .save()
                .then((res) => console.log(res))
                .catch((err) => {
                    console.log(`mng error: ${err}`)
                })
        })
        .catch((error) => {
            console.log("error: ", error)
        })
}

async function start() {
    try {
        await mongoose.connect(
            db, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log('Connected to DB'))
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.warn(e)
    }
}

start()
    // .then(() => {
    //     setInterval(async() =>{
    //         const urls = await Urls.find({}).exec()
    //         urls.forEach(el => {
    //             getResponse(el.url)
    //         })
    //     }, 5000)
    // })