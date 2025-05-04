async function fetchPokemonData() {
    const input = document.getElementById('pokemon-input').value.toLowerCase().trim();
    const info = document.getElementById('pokemon-info');
    info.innerHTML = '';

    if (!input) {
        info.textContent = 'Please enter Pokemon name or ID';
        return;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) throw new Error('Pokemon not found');
        const data = await response.json();

        // Displaying Pokemon Data
        info.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;

    } catch (error) {
        console.error('Fetch Error:', error.message);
        info.textContent = 'Error: ' + error.message;
    }
}