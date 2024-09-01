function deleteContact(contactList, event) {
    if (event.target.closest('.delete-btn')) {
        const contactIndex = event.target.closest('.delete-btn').dataset.index;
        contactList.deleteContact(contactIndex);
    }
}