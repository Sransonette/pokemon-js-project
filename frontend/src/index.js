document.addEventListener("DOMContentLoaded", function() {
    console.log('hi')
    //fetchPokemons()
    //mountFormListener()

} )

function fetchPokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
}