
// Fetch Pokémon data from the PokeAPI
async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        const pokemonData = await response.json();
        displayPokemonData(pokemonData);
    } catch (error) {
        displayError(error.message);
    }
}

// Display Pokémon data on the webpage
function displayPokemonData(pokemonData) {
    const characterInfoElement = document.getElementById("characterInfo");
    characterInfoElement.innerHTML = `
        <h2>${pokemonData.name}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3>Abilities</h3>
        <ul>
            ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience:</h3>
        <p>${pokemonData.base_experience}</p>
    `;
}

// Display an error message if Pokémon is not found
function displayError(errorMessage) {
    const characterInfoElement = document.getElementById("characterInfo");
    characterInfoElement.innerHTML = `<p>Error:${errorMessage}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  
    document.getElementById("pokemonForm").addEventListener("submit", event => {
        event.preventDefault(); // Prevent form from reloading the page
        const pokemonName = document.getElementById("character").value.trim();
        if (pokemonName) {
            fetchPokemonData(pokemonName); // Fetch data only if input is valid
        } else {
            displayError("Please enter a Pokémon name");
        }
    });
});