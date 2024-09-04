class ContactList extends Subject {
    constructor() {
        super();
        this.contacts = this.loadContacts();
        this.registerEvents();
    }

    addContact(contact) {
        this.contacts.push(contact);
        this.saveContacts();
        this.notifyObservers(this.contacts);
    }

    editContact(index, updatedContact) {
        this.contacts.splice(index, 1, updatedContact);
        this.saveContacts();
        this.notifyObservers(this.contacts);
    }

    deleteContact(index) {
        this.contacts.splice(index, 1);
        this.saveContacts();
        this.notifyObservers(this.contacts);
    }

    saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }

    loadContacts() {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    }

    registerEvents() {
        document.addEventListener('editContact', (event) => {
            const { index, contact } = event.detail;
            this.editContact(index, contact);
        });

        document.addEventListener('addContact', (event) => {
            const { contact } = event.detail;
            this.addContact(contact);
        });

        document.addEventListener('deleteContact', (event) => {
            const { index } = event.detail;
            this.deleteContact(index);
        });
    }
}