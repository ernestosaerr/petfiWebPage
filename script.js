document.getElementById('add-pet-button').addEventListener('click', function() {
    document.getElementById('new-pet-form').style.display = 'block';
});

document.getElementById('new-pet-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('pet-name').value;
    const age = document.getElementById('pet-age').value;
    const breed = document.getElementById('pet-breed').value;
    const weight = document.getElementById('pet-weight').value;

    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Edad:</strong> ${age} años</p>
        <p><strong>Raza:</strong> ${breed}</p>
        <p><strong>Peso:</strong> ${weight} kg</p>
    `;

    document.querySelector('main').appendChild(newCard);
    document.getElementById('new-pet-form').reset();
    document.getElementById('new-pet-form').style.display = 'none';
});