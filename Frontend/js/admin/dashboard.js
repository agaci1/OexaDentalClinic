document.addEventListener('DOMContentLoaded', function() {
    if (!oexaRequireRole('admin')) return;
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', oexaLogout);
});

