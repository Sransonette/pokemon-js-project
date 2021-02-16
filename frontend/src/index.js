document.addEventListener("DOMContentLoaded", function() {
    console.log('hi')
    fetchPokemons()
    formListener()

} )

function fetchPokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
    .then(resp => resp.json())
    .then(pokemons => console.log(pokemons))
}

function formListener(){
    const postForm = 
}