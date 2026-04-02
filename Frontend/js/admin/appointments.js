document.addEventListener('DOMContentLoaded', function() {
    if (!oexaRequireRole('admin')) return;

    const tableBody = document.getElementById('appointmentsTableBody');
    const refreshButton = document.getElementById('refreshAppointments');
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', oexaLogout);
    if (!tableBody || !refreshButton) return;

    const API_BASE_URL = 'http://localhost:5095';

    function formatDate(dateTimeString) {
        if (!dateTimeString) return '';
        const date = new Date(dateTimeString);
        if (Number.isNaN(date.getTime())) return dateTimeString;
        return date.toLocaleString();
    }

    function setLoading() {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">Loading...</td></tr>';
    }

    function setEmpty() {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No appointments found.</td></tr>';
    }

    function setError() {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center text-danger">Could not load appointments.</td></tr>';
    }

    function renderRows(items) {
        if (!items || items.length === 0) {
            setEmpty();
            return;
        }

        tableBody.innerHTML = items.map(function(a) {
            const name = (a.firstName || '') + ' ' + (a.lastName || '');
            return (
                '<tr>' +
                    '<td>' + (a.id ?? '') + '</td>' +
                    '<td>' + name.trim() + '</td>' +
                    '<td>' + (a.email ?? '') + '</td>' +
                    '<td>' + (a.phoneNumber ?? '') + '</td>' +
                    '<td>' + formatDate(a.preferredDateTime) + '</td>' +
                    '<td>' + (a.serviceNeeded ?? '') + '</td>' +
                '</tr>'
            );
        }).join('');
    }

    function loadAppointments() {
        setLoading();

        fetch(API_BASE_URL + '/api/Appointments')
            .then(function(res) {
                if (!res.ok) throw new Error('Request failed');
                return res.json();
            })
            .then(function(items) {
                renderRows(items);
            })
            .catch(function() {
                setError();
            });
    }

    refreshButton.addEventListener('click', loadAppointments);
    loadAppointments();
});

