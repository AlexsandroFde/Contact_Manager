function formSubmission(contactList, event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');

    if (nameInput.value.trim() && numberInput.validity.valid) {
        const newContact = {
            name: nameInput.value.trim(),
            number: numberInput.value.trim()
        };

        contactList.addContact(newContact);

        nameInput.value = '';
        numberInput.value = '';
    } else {
        alert("Por favor, insira um nome e número válidos.");
    }
}