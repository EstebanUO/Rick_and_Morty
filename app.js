const URL = "https://rickandmortyapi.com/api/character";

const input = document.getElementById('input');
const container = document.getElementById('container');

const asyncFetchData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    // const next = data.info.next;

    // const res2 = await fetch(next);
    // const next2 = await res2.json();
    // console.log(next2.info);
    return data;
};

// asyncFetchData(URL);

window.addEventListener('load', async() => {
    const data = await asyncFetchData(URL);
    const resultados = data.results;

    console.log(data);
    console.log(resultados);
    // resultados.map(resultados => console.log(resultados.name));
    // resultados.map(resultados => console.log(resultados.status));
    // resultados.map(resultados => console.log(resultados.species));

    resultados.map(resultados => getRicks(resultados));
});

function getRicks(resultados) {
    
    const cards = document.createElement('div');
    cards.setAttribute('class', 'card');

    const imagen = document.createElement('img');
    imagen.setAttribute('alt', resultados.image)
    imagen.setAttribute('class', 'img');
    cards.appendChild(imagen);

    const nombre = document.createElement('h2');
    nombre.textContent = resultados.name;
    nombre.setAttribute('class', 'name');
    cards.appendChild(nombre);

    const estado = document.createElement('p');
    estado.textContent = resultados.status;
    estado.setAttribute('class', 'status');
    cards.appendChild(estado);

    const especie = document.createElement('p');
    especie.textContent = resultados.species;
    especie.setAttribute('class', 'species');
    cards.appendChild(especie)

    container.appendChild(cards);
};