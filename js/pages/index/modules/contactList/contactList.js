class ContactList extends Subject {
    constructor() {
        super();
        this.contacts = this.loadContacts();
    }

    addContact(contact) {
        this.contacts.push(contact);
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
}