$(document).ready(function () {
    const dogList = $('#dog-list');
    const modal = $('#dog-modal');
    const closeButton = $('.close-button');
    const modalDogImage = $('#modal-dog-image');
    const modalDogName = $('#modal-dog-name');
    const modalDogSex = $('#modal-dog-sex');
    const modalDogAge = $('#modal-dog-age');
    const modalDogDescription = $('#modal-dog-description');

    $.get('https://usersdogs.dmytrominochkin.cloud/dogs', function (data) {
        data.forEach(dog => {
            const dogItem = $(`
                <div class="dog-item">
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
                    <h3>${dog.title}</h3>
                    <p>${dog.sex.charAt(0).toUpperCase() + dog.sex.slice(1).toLowerCase()}</p>
                </div>
            `);

            dogItem.on('click', function () {
                showModal(dog);
            });

            dogList.append(dogItem);
        });
    });

    // Show modal with dog details
    function showModal(dog) {
        modalDogImage.attr('src', `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`);
        modalDogName.text(dog.title);
        modalDogSex.text(dog.sex.charAt(0).toUpperCase() + dog.sex.slice(1).toLowerCase());
        modalDogAge.text(dog.age);
        modalDogDescription.text(dog.description);
        modal.show();
    }

    // Close modal
    closeButton.on('click', function () {
        modal.hide();
    });

    // Close modal when clicking outside the modal content
    $(window).on('click', function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});