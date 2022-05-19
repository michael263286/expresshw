const episodes = [
  {
    id: 1,
    season: 1,
    episode:1,
    name:'Death Has a Shadow',
    description:'After drinking too much at a stag party and falling asleep at work, Peter loses his job, signs up for welfare, and gets more money than expected.',
    characters: [1,2,3,4,5,6]
    
  },
  {
    id: 2,
    season: 1,
    episode:2,
    name:'I Never Met the Dead Man',
    description:'Peter goes into shock after he disables the entire Quahog cable system while giving Meg driving lessons; Stewie plots to rid the world of broccoli.',
    characters: [1,2,3,4,5,6]
  },
  {
    id: 3,
    season: 1,
    episode:3,
    name:'Chitty Chitty Death Bang',
    description:"Peter tries to make the best of a bad situation after he ruins Lois's plans for Stewie's birthday party; Meg's new friend tries to recruit her into a cult.",
    characters: [1,2,3,4,5,6]
  },
]


const characters = [
  {
    id: 1,
    name: 'Peter Griffin',
    actor: 'Seth MacFarlane'
  },
  {
    id: 2,
    name: 'Brian Griffin',
    actor: 'Seth MacFarlane',
  },
  {
    id: 3,
    name: 'Lois Griffin',
    actor:'Alex Borstein',
  },
  {
    id: 4,
    name: 'Stewie Griffin',
    actor:'Seth MacFarlane',
  },
  {
    id: 5,
    name: 'Chris Griffin',
    actor:'Seth Green',
  },
  {
    id: 6,
    name: 'Meg Griffin',
    actor:'Lacey Chabert',
  },

]

module.exports = {
  episodes: episodes,
  characters:characters
}