const { Router } = require('express')
const { Responses, Urls } = require('../models/Schemas')
const router = Router()

// router.get('/', async (req, res) => {
//     const responses = await Responses.find({})
//     const urls = await Urls.find({})
//     console.log(responses.createdAt)

//     res.render('index', {
//         title: 'Main page',
//         responses: responses.map(response => response.toJSON()),
//         urls: urls.map(url => url.toJSON())
//     })
// })

// router.post('/add', async (req, res) => {
//     // const string = req.body.url
//     const url = new Urls({
//         url: req.body.url.trim()
//     })

//     await url.save()
//     res.redirect('/')
// })

// router.get('/delete', async (req, res) => {
//     await Urls.findOneAndDelete(req.body.id)
//         .then(() => res.redirect('/'))
// })

router.get('/statistics', async (req, res) => {
    const responses = await Responses.find({}).exec()
    res.send({
        responses
    })
})

router.post('/domains', async (req, res) => {
    const url = new Urls({
        url: req.body.url
    })
    await url.save()

    res.json(url)
})

router.delete('/domains/:id', async (req, res) => {
    const id = req.params.id
    await Urls.findOneAndDelete(id)
})

router.get('/domains', async (req, res) => {
    const urls = await Urls.find({}).exec()
    res.json(urls)
})

module.exports = router