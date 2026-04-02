function oexaRequireRole(requiredRole) {
    const role = localStorage.getItem('oexa_role') || '';
    if (role !== requiredRole) {
        window.location.href = '../portal/login.html';
        return false;
    }
    return true;
}

function oexaLogout() {
    localStorage.removeItem('oexa_role');
    window.location.href = '../portal/login.html';
}

