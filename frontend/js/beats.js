document.addEventListener('DOMContentLoaded', () => {
    const beatsContainer = document.getElementById('beats-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let allBeats = [];

    fetch('/api/beats')
        .then(response => response.json())
        .then(data => {
            allBeats = data;
            renderBeats(allBeats);
        })
        .catch(error => {
            console.error('Error fetching beats:', error);
            if (beatsContainer) beatsContainer.innerHTML = '<p>Error al cargar los beats.</p>';
        });

    function renderBeats(beats) {
        if (!beatsContainer) return;
        beatsContainer.innerHTML = '';

        if (beats.length === 0) {
            beatsContainer.innerHTML = '<p>No se encontraron beats.</p>';
            return;
        }

        beats.forEach(beat => {
            const card = document.createElement('div');
            card.classList.add('beat-card');
            const cover = beat.coverUrl || 'assets/logo-fakez.png';

            card.innerHTML = `
                <div class="beat-cover" style="background-image: url('${cover}');"></div>
                <div class="beat-info">
                    <div class="beat-title">${beat.title}</div>
                    <div class="beat-meta">
                        <span>${beat.bpm} BPM</span>
                        <span>${beat.key}</span>
                    </div>
                    <div class="beat-meta">
                        <span style="color: var(--primary-color);">${beat.type}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <span class="beat-price">$${beat.price}</span>
                        <button class="btn" style="padding: 0.5rem 1rem; font-size: 0.8rem;" onclick="buyBeat('${beat.id}')">Comprar</button>
                    </div>
                </div>
            `;
            beatsContainer.appendChild(card);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');

            if (filterValue === 'all') {
                renderBeats(allBeats);
            } else {
                const filtered = allBeats.filter(beat => beat.category === filterValue);
                renderBeats(filtered);
            }
        });
    });
});

function buyBeat(id) {
    alert(`Iniciando compra del beat ID: ${id}. Aquí se abriría el modal de licencias.`);
}
