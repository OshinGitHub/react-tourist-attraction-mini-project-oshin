import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import trips from './db.js'

const app = express()
const port = 4010

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // res.send("Hello World!");
  res.send("This is 'mini-project-Oshin'")
})

app.get('/trips', (req, res) => {
  const keywords = req.query.keywords
  const regexKeywords = keywords.split(' ').join('|')
  const regex = new RegExp(regexKeywords, 'ig')
  const results = trips.filter((trip) => {
    return (
      trip.title.match(regex) ||
      trip.description.match(regex) ||
      trip.tags.filter((tag) => tag.match(regex)).length
    )
  })

  return res.json({
    data: results
  })
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
