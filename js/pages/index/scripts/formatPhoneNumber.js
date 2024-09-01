function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    console.log(phoneNumber);
    
    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phoneNumber.length > 6) {
        phoneNumber = phoneNumber.replace(/(\d{2})(\d{4})(\d{1,4})/, '($1) $2-$3');
    } else if (phoneNumber.length > 2) {
        phoneNumber = phoneNumber.replace(/(\d{2})(\d{0,4})/, '($1) $2');
    } else if (phoneNumber.length > 0) {
        phoneNumber = phoneNumber.replace(/(\d*)/, '($1');
    }

    return phoneNumber;
}