document.addEventListener('DOMContentLoaded', function() {
    if (!oexaRequireRole('manager')) return;

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', oexaLogout);

    const checkinId = document.getElementById('checkinAppointmentId');
    const checkinBtn = document.getElementById('checkinBtn');
    const checkinStatus = document.getElementById('checkinStatus');

    const checkoutId = document.getElementById('checkoutAppointmentId');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutStatus = document.getElementById('checkoutStatus');
    const receiptBox = document.getElementById('receiptBox');
    const receiptText = document.getElementById('receiptText');

    function setState(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getState(key) {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        try { return JSON.parse(raw); } catch { return null; }
    }

    function makeReceiptNumber() {
        return 'R-' + Date.now();
    }

    if (checkinBtn) {
        checkinBtn.addEventListener('click', function() {
            const id = (checkinId && checkinId.value || '').trim();
            if (!id) {
                if (checkinStatus) checkinStatus.textContent = 'Enter an appointment ID.';
                return;
            }
            const key = 'oexa_appt_' + id;
            const state = getState(key) || {};
            state.checkedIn = true;
            state.checkedInAt = new Date().toISOString();
            setState(key, state);
            if (checkinStatus) checkinStatus.textContent = 'Checked in appointment #' + id;
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const id = (checkoutId && checkoutId.value || '').trim();
            if (!id) {
                if (checkoutStatus) checkoutStatus.textContent = 'Enter an appointment ID.';
                return;
            }
            const key = 'oexa_appt_' + id;
            const state = getState(key) || {};
            state.checkedOut = true;
            state.checkedOutAt = new Date().toISOString();
            state.receiptNumber = makeReceiptNumber();
            setState(key, state);

            if (checkoutStatus) checkoutStatus.textContent = 'Checked out appointment #' + id;
            if (receiptBox && receiptText) {
                receiptBox.style.display = 'block';
                receiptText.textContent = 'Appointment #' + id + ' | Receipt: ' + state.receiptNumber;
            }
        });
    }
});

