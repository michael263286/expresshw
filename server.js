const http = require('http');
const express = require('express');
const data = require('./data');

const hostname = '127.0.0.1';
const port = 3000;

// create express app
const app = express()

// create http server and handle requests with express app
const server = http.createServer(app)

// load static files from "public" folder before other routes
app.use(express.static('./public'))


app.get('/api/v1/episodes',(req,res)=> {
  res.json(data.episodes)
})
app.get('/api/v1/characters',(req,res)=> {
  res.json(data.characters)
})


app.get('/api/v1/episodes/:episodeID',(req,res)=>{
  const episodeID = req.params.episodeID
  let episode = null
  for (let currentEpisode of data.episodes){
    if(currentEpisode.id == episodeID){
      episode = currentEpisode
    }
  }
    if(episode!==null){
      res.json(episode)
    }
    else{
      res.status(404).json({error: 'could not find episode with id: ' + episodeID})
    }
})




app.get('/api/v1/characters/:characterID',(req,res)=>{
  const characterID = req.params.characterID
  let character = null
  for (let currentCharacter of data.characters){
    if(currentCharacter.id == characterID){
      character = currentCharacter
    }
  }
    if(character!==null){
      res.json(character)
    }
    else{
      res.status(404).json({error: 'could not find episode with id: ' + characterID})
    }
})



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});