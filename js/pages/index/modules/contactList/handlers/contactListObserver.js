class ContactListObserver {
    update(contacts) {
        const contactList = document.getElementById('contacts-list');
        contactList.innerHTML = '';

        contacts.forEach((contact, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'contact-item';
            listItem.innerHTML = `
                <div class="contact-icon">
                    <i class="fas fa-user-circle"></i>
                    <div class="contact-details">
                        <span class="contact-name">${contact.name}</span>
                        <span class="contact-number">${contact.number}</span>
                    </div>
                </div>
                <button class="btn delete-btn" data-index="${index}"><i class="fas fa-trash-alt icon"></i></button>
            `;

            listItem.addEventListener('click', () => openEditModal(contact, index));
            
            contactList.appendChild(listItem);
            
            listItem.querySelector(".delete-btn").addEventListener('click', (event) => {
                deleteContact(event);
            });
        });
    }
}