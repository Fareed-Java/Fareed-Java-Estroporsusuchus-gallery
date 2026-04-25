// Gallery initialization
document.addEventListener('DOMContentLoaded', async () => {
    const images = await fetch(`images.json?v=${Date.now()}`).then(r => r.json()).catch(() => []);
    initGallery(images);
    initLightbox();
    initMusic();
});

// Gallery with infinite scroll
function initGallery(images) {
    const grid = document.querySelector('.gallery-grid');
    let index = 0;
    const batch = 20;
    const threshold = 250;

    function appendImage({ folder, src }) {
        const img = document.createElement('img');
        img.src = folder + src;
        img.alt = src;
        img.dataset.full = folder + src;
        img.className = 'gallery-image';
        img.loading = 'lazy';
        grid.appendChild(img);
    }

    function loadBatch() {
        images.slice(index, index + batch).forEach(appendImage);
        index += batch;
    }

    function checkScroll() {
        if (index >= images.length) return;
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold) {
            loadBatch();
        }
    }

    loadBatch();
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
}

// Lightbox modal
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.querySelector('.lightbox-image');
    let idx = -1;

    function getImages() {
        return Array.from(document.querySelectorAll('.gallery-image'));
    }

    function open(index) {
        const allImg = getImages();
        if (!allImg[index]) return;
        idx = index;
        img.src = allImg[index].dataset.full;
        lightbox.classList.add('active');
    }

    function close() {
        lightbox.classList.remove('active');
    }

    function move(step) {
        if (!lightbox.classList.contains('active')) return;
        const allImg = getImages();
        open((idx + step + allImg.length) % allImg.length);
    }

    document.addEventListener('click', e => {
        if (e.target.classList.contains('gallery-image')) {
            open(getImages().indexOf(e.target));
        }
        if (e.target === lightbox) close();
    });

    document.querySelector('.lightbox-close').addEventListener('click', close);

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (['ArrowLeft', 'ArrowUp'].includes(e.key)) move(-1);
        if (['ArrowRight', 'ArrowDown'].includes(e.key)) move(1);
    });
}

// Music player
function initMusic() {
    const audio = document.getElementById('background-music');
    const btn = document.getElementById('music-toggle');
    const prev = document.getElementById('prev-track');
    const next = document.getElementById('next-track');
    const rand = document.getElementById('random-track');
    const upload = document.getElementById('upload-track');

    if (!audio || !btn) return;

    let playlist = [];
    let current = 0;

    const isAudio = f => ['mp3', 'wav', 'ogg', 'm4a', 'aac'].includes(f.split('.').pop().toLowerCase());
    const play = (i) => {
        if (!playlist.length || i < 0 || i >= playlist.length) return;
        current = i;
        audio.src = playlist[i].src;
        audio.play().catch(() => {});
        btn.textContent = 'Pause Music';
    };

    btn.addEventListener('click', () => {
        audio.paused ? audio.play() : audio.pause();
    });

    audio.addEventListener('play', () => (btn.textContent = 'Pause Music'));
    audio.addEventListener('pause', () => (btn.textContent = 'Play Music'));
    audio.addEventListener('ended', () => play((current + 1) % playlist.length));
    audio.addEventListener('error', () => play((current + 1) % playlist.length));

    prev?.addEventListener('click', () => play((current - 1 + playlist.length) % playlist.length));
    next?.addEventListener('click', () => play((current + 1) % playlist.length));
    rand?.addEventListener('click', () => play(Math.floor(Math.random() * playlist.length)));

    upload?.addEventListener('change', function() {
        Array.from(this.files).forEach(f => {
            if (f.type.startsWith('audio/')) {
                playlist.push({ name: f.name.replace(/\.[^.]+$/, ''), src: URL.createObjectURL(f) });
            }
        });
    });

    fetch(`media/playlist.json?v=${Date.now()}`)
        .then(r => r.json())
        .then(tracks => {
            if (!Array.isArray(tracks)) return;
            playlist = tracks
                .map(t => typeof t === 'string' ? { name: t.replace(/\.[^.]+$/, ''), src: `media/${t}` } : t)
                .filter(t => isAudio(t.src));
            if (playlist.length) audio.src = playlist[0].src;
        })
        .catch(() => {});
}


