document.addEventListener("DOMContentLoaded", function() {
    fetchPokemons()
    //formListener()

} )

function fetchPokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
    .then(resp => resp.json())
    .then(pokemons => console.log(pokemons))
}

