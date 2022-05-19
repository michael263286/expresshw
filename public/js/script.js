fetch('/api/v1/episodes')
  .then(res=> res.json())
  .then(data => {
    console.log(data)
  })



  function renderEpisodes(episodes){
    const episodes = document.querySelector('#episodesList')
    const episodesHtml = episodes.map(episode =>{
      return `<li>${episode.season}(${episode.episode})(${episode.name})(${episode.description})</li>`
    })
    .join("")
    episodes.innerHTML = episodesHtml
  }

