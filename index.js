const express = require('express')
const config = require('./config.json')

const port = process.env.PORT || config.listenPort

const app = express()

app.disable('x-powered-by')

app.use((req, res, next) => {
  res.set('Cache-Control', `max-age=${config.cacheTime}`)
  next()
})

app.use(express.static('content'))

app.get('*', (req, res) => {
  res.status(404).send()
})

app.listen(port, () => {
  console.log(`[BrawlCDN] Web server listening at :${port}!`)
})
