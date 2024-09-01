document.addEventListener('DOMContentLoaded', () => {
    loadScripts(() => {
        const contactList = new ContactList();
        const contactListObserver = new ContactListObserver();
        contactList.addObserver(contactListObserver);
        contactList.notifyObservers(contactList.contacts);

        document.getElementById('contact-form').addEventListener('submit', (event) => {
            formSubmission(contactList, event);
        });

        document.getElementById('contacts-list').addEventListener('click', (event) => {
            deleteContact(contactList, event);
        });

        document.getElementById('number').addEventListener('input', function(event) {
            const input = event.target;
            const formattedPhoneNumber = formatPhoneNumber(input.value);
            input.value = formattedPhoneNumber;
        });
    });
});

function loadScripts(callback) {
    const PAGE_SCRIPTS = [
        'formatPhoneNumber.js',
        'deleteContact.js',
        'formSubmission.js'
    ];
    const PAGE_MODULES = [
        'contactList/handlers/subject.js',
        'contactList/contactList.js',
        'contactList/handlers/contactListObserver.js'
    ];
    let scriptCount = 0;

    function scriptLoaded() {
        scriptCount++;
        if (scriptCount === PAGE_SCRIPTS.length + PAGE_MODULES.length) {
            callback();
        }
    }

    loadScriptsFromList(PAGE_SCRIPTS, './js/pages/index/scripts/', scriptLoaded);
    loadScriptsFromList(PAGE_MODULES, './js/pages/index/modules/', scriptLoaded);
}

function loadScriptsFromList(scripts, basePath, callback) {
    scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = `${basePath}${script}`;
        scriptElement.async = true;
        scriptElement.onload = callback;
        document.body.appendChild(scriptElement);
    });
}
