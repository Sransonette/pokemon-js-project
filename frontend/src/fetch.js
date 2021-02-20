function fetchPokemons() {
    fetch('http://localhost:3000/api/v1/pokemons')
    .then(resp => resp.json())
    .then(pokemons => console.log(pokemons))
}

function fetchTrainers() {
    fetch('http://localhost:3000/api/v1/trainers')
    .then(resp => resp.json())
    .then(trainers => console.log(trainers))
}

