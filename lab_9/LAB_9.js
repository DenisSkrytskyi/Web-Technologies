document.addEventListener('DOMContentLoaded', function () {
    const dogList = document.getElementById('dog-list');
    const modal = document.getElementById('dog-modal');
    const closeButton = document.querySelector('.close-button');
    const modalDogImage = document.getElementById('modal-dog-image');
    const modalDogName = document.getElementById('modal-dog-name');
    const modalDogSex = document.getElementById('modal-dog-sex');
    const modalDogAge = document.getElementById('modal-dog-age');
    const modalDogDescription = document.getElementById('modal-dog-description');

    // Fetch data from the server
    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
        .then(response => response.json())
        .then(data => {
            data.forEach(dog => {
                const dogItem = document.createElement('div');
                dogItem.classList.add('dog-item');
                dogItem.innerHTML = `
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
                    <h3>${dog.title}</h3>
                    <p>${dog.sex.charAt(0).toUpperCase() + dog.sex.slice(1).toLowerCase()}</p>
                `;
                dogItem.addEventListener('click', () => {
                    showModal(dog);
                });
                dogList.appendChild(dogItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Show modal with dog details
    function showModal(dog) {
        modalDogImage.src = `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`;
        modalDogName.textContent = dog.title;
        modalDogSex.textContent = dog.sex.charAt(0).toUpperCase() + dog.sex.slice(1).toLowerCase();
        modalDogAge.textContent = dog.age;
        modalDogDescription.textContent = dog.description;
        modal.style.display = 'block';
    }

    // Close modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});