document.addEventListener('DOMContentLoaded', function() {
    if (!oexaRequireRole('marketer')) return;

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', oexaLogout);

    const titleInput = document.getElementById('promoTitle');
    const addBtn = document.getElementById('addPromoBtn');
    const statusEl = document.getElementById('promoStatus');
    const listEl = document.getElementById('promoList');
    if (!titleInput || !addBtn || !statusEl || !listEl) return;

    function loadPromos() {
        const raw = localStorage.getItem('oexa_promotions');
        if (!raw) return [];
        try { return JSON.parse(raw) || []; } catch { return []; }
    }

    function savePromos(items) {
        localStorage.setItem('oexa_promotions', JSON.stringify(items));
    }

    function render() {
        const items = loadPromos();
        if (items.length === 0) {
            listEl.innerHTML = '<li class=\"list-group-item text-muted\">No promotions yet.</li>';
            return;
        }

        listEl.innerHTML = items.map(function(p, idx) {
            return (
                '<li class=\"list-group-item d-flex justify-content-between align-items-center\">' +
                    '<span>' + p.title + '</span>' +
                    '<button class=\"btn btn-primary btn-sm\" data-remove=\"' + idx + '\">Remove</button>' +
                '</li>'
            );
        }).join('');
    }

    addBtn.addEventListener('click', function() {
        const title = titleInput.value.trim();
        if (!title) {
            statusEl.textContent = 'Enter a title.';
            return;
        }
        const items = loadPromos();
        items.unshift({ title: title, createdAt: new Date().toISOString() });
        savePromos(items);
        titleInput.value = '';
        statusEl.textContent = 'Promotion added.';
        render();
    });

    listEl.addEventListener('click', function(e) {
        const btn = e.target;
        if (!btn || !btn.getAttribute) return;
        const idx = btn.getAttribute('data-remove');
        if (idx === null) return;
        const items = loadPromos();
        items.splice(Number(idx), 1);
        savePromos(items);
        render();
    });

    render();
});

