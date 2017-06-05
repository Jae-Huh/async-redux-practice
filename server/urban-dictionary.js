const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/:term', (req, res) => {
  request
    .get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${req.params.term}`)
    .set('X-Mashape-Key', 'ZMJzgwcAscmshawAmUX4cX74S9eRp1cNhTwjsne44SVA72j5LC')
    .set('Accept','text/plain')
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.list[0].definition)
      }
    })
})

module.exports = router
