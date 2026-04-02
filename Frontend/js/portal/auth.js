document.addEventListener('DOMContentLoaded', function() {
    const roleButtons = document.querySelectorAll('button[data-role]');

    function goToRole(role) {
        if (role === 'admin') window.location.href = '../admin/dashboard.html';
        if (role === 'manager') window.location.href = '../manager/dashboard.html';
        if (role === 'marketer') window.location.href = '../marketer/dashboard.html';
        if (role === 'dentist') window.location.href = '../dentist/dashboard.html';
    }

    roleButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const role = btn.getAttribute('data-role');
            localStorage.setItem('oexa_role', role || '');
            goToRole(role);
        });
    });
});

