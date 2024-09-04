document.addEventListener('DOMContentLoaded', () => {
    loadScripts(() => {
        const contactList = new ContactList();
        const contactListObserver = new ContactListObserver();
        contactList.addObserver(contactListObserver);
        contactList.notifyObservers(contactList.contacts);

        document.getElementById('contact-form').addEventListener('submit', (event) => {
            formSubmission(event);
        });

        document.querySelectorAll('input[type="tel"]').forEach(input => {
            input.addEventListener('input', function(event) {
                const input = event.target;
                const formattedPhoneNumber = formatPhoneNumber(input.value);
                input.value = formattedPhoneNumber;
            });
        });

        window.onclick = function(event) {
            const modal = document.getElementById('editModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    });
});

function loadScripts(callback) {
    const PAGE_SCRIPTS = [
        'formatPhoneNumber.js',
        'deleteContact.js',
        'formSubmission.js',
        'openEditModal.js'
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