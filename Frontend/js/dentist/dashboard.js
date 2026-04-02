document.addEventListener('DOMContentLoaded', function() {
    if (!oexaRequireRole('dentist')) return;

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', oexaLogout);

    const select = document.getElementById('dentistSelect');
    const tableBody = document.getElementById('appointmentsTableBody');
    const refreshButton = document.getElementById('refreshAppointments');
    if (!select || !tableBody || !refreshButton) return;

    const API_BASE_URL = 'http://localhost:5095';

    function formatDate(dateTimeString) {
        if (!dateTimeString) return '';
        const date = new Date(dateTimeString);
        if (Number.isNaN(date.getTime())) return dateTimeString;
        return date.toLocaleString();
    }

    function setLoading() {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Loading...</td></tr>';
    }

    function setEmpty() {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No appointments.</td></tr>';
    }

    function setError() {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Could not load appointments.</td></tr>';
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
                    '<td>' + formatDate(a.preferredDateTime) + '</td>' +
                    '<td>' + (a.serviceNeeded ?? '') + '</td>' +
                '</tr>'
            );
        }).join('');
    }

    function loadAppointments() {
        setLoading();
        const serviceKey = select.value;

        fetch(API_BASE_URL + '/api/Appointments')
            .then(function(res) {
                if (!res.ok) throw new Error('Request failed');
                return res.json();
            })
            .then(function(items) {
                const filtered = (items || []).filter(function(a) {
                    return (a.serviceNeeded || '') === serviceKey;
                });
                renderRows(filtered);
            })
            .catch(function() {
                setError();
            });
    }

    select.addEventListener('change', loadAppointments);
    refreshButton.addEventListener('click', loadAppointments);
    loadAppointments();
});

