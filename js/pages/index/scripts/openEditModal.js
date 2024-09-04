function openEditModal(contact, index) {
    const modal = document.getElementById('editModal');
    const nameInput = document.getElementById('edit-name');
    const numberInput = document.getElementById('edit-number');

    nameInput.value = contact.name;
    numberInput.value = contact.number;

    modal.style.display = 'block';

    const closeModal = () => {
        modal.style.display = 'none';
    };

    document.querySelector('.close').onclick = closeModal;

    document.getElementById('edit-contact-form').onsubmit = function(event) {
        event.preventDefault();

        const updatedContact = {
            name: nameInput.value,
            number: numberInput.value
        };

        document.dispatchEvent(new CustomEvent('editContact', {
            detail: { index: index, contact: updatedContact }
        }));

        closeModal();
    };
}