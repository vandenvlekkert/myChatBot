'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.set('port', (process.env.PORT || 3000))

//Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//process application/json
app.use(bodyParser.json())

//Index Route:
app.get('/', function(req, res) {
  res.send('Hello world, I am a chat bot')
})

//for Facebook verification
app.get('/webhook/', function(req, res) {
  if(req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
    res.send(req.query['hub.challenge'])
  }else{
  res.send('Error, wrong token')
  }
})
//to post data
app.post('webhook/', function(req, res) {
  let messaging_events = req.body.entry[0].messaging
  for(let i = 0; i < messaging_events.length; i++) {
    let event = req.body.entry[0].messaging[i]
    let sender = event.sender.id
    if(event.message && event.message.text) {
      if(text === 'Generic'){
        console.log('welcome to mychatbot')
        //sendGenericMessage(sender)
      }
    }
  }
})
//activate the server!
app.listen(app.get('port'), function() {
  console.log('running on port ', app.get('port'))
})
)
})
