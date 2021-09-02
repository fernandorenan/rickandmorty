let url ='https://rickandmortyapi.com/api/character'

fetch(url)
.then((response) => { 
    
    return response.json()
})
.then((data)=> {
    let characters = data.results
    characters.forEach( (character)=> {     
        createCard(character)
    });
})
.catch((err) => {
   console.log('errou.')
})

const root = document.querySelector('#root')
let title = document.createElement('h1')
title.textContent='The Rick and Morty Library'
root.appendChild(title)

const container = document.createElement('div')
container.setAttribute('class','container')
root.appendChild(container)




function createCard (data) {


    const card = document.createElement('div')
    card.setAttribute('class','card')


    const image = document.createElement('img')
    image.setAttribute('class', 'image')
    image.src= data.image
    



    const name = document.createElement('h3')
    name.textContent=`${data.name}`
   
    const profile = document.createElement('div')
    profile.setAttribute('class', 'profile')
    
    profile.innerHTML=`
    <li><b>Status: </b>${data.status}</li>
    <li><b>Specie: </b>${data.species}</li>
    <li><b>Origin: </b>${data.origin.name}</li>
    <li><b>Episodes: </b>${data.episode.length}</li>
    `

    container.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(profile)


}

