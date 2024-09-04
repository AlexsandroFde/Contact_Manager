function deleteContact(event) {
    event.stopPropagation()
    const contactIndex = event.target.closest('.delete-btn').dataset.index;
    document.dispatchEvent(new CustomEvent('deleteContact', { 
        detail: { index: contactIndex } 
    }));
}