async function fetchPokemon() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
        document.getElementById('pokemon-card').style.display = 'none';
    }
}

function displayPokemon(pokemon) {
    const card = document.getElementById('pokemon-card');
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${capitalizeFirstLetter(pokemon.name)}</h2>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    `;
    card.style.display = 'block';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}