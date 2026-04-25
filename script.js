// Gallery initialization
const GITHUB_OWNER = 'Fareed-Java';
const GITHUB_REPO = 'Fareed-Java-Estroporsusuchus-gallery';
const GITHUB_BRANCH = 'main';
const IMAGE_ROOT = 'images';

function isImageFile(name) {
    return /\.(jpe?g|png|gif|webp)$/i.test(name);
}

async function fetchImagesFromGitHub() {
    const apiRoot = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${IMAGE_ROOT}?ref=${GITHUB_BRANCH}`;
    const response = await fetch(apiRoot);
    if (!response.ok) {
        throw new Error(`GitHub API root request failed (${response.status})`);
    }

    const entries = await response.json();
    const imageEntries = [];
    const folders = entries.filter(entry => entry.type === 'dir');

    await Promise.all(folders.map(async folder => {
        const dirResponse = await fetch(`${folder.url}?ref=${GITHUB_BRANCH}`);
        if (!dirResponse.ok) return;

        const files = await dirResponse.json();
        files.forEach(file => {
            if (file.type === 'file' && isImageFile(file.name)) {
                imageEntries.push({
                    src: file.name,
                    folder: `${folder.path}/`
                });
            }
        });
    }));

    return imageEntries;
}

async function loadImages() {
    let images = [];

    try {
        const response = await fetch(`images.json?v=${Date.now()}`);
        if (response.ok) {
            images = await response.json();
            console.info('Loaded images.json entries:', images.length);
        }
    } catch (error) {
        console.warn('Failed to load images.json:', error);
    }

    try {
        const githubImages = await fetchImagesFromGitHub();
        console.info('GitHub images fetched:', githubImages.length);
        const seen = new Set(images.map(img => `${img.folder}${img.src}`));
        githubImages.forEach(image => {
            const key = `${image.folder}${image.src}`;
            if (!seen.has(key)) {
                seen.add(key);
                images.push(image);
            }
        });
    } catch (error) {
        console.warn('Failed to load images from GitHub folder listings:', error);
    }

    window.galleryImageCount = images.length;
    console.info('Gallery total images after merge:', images.length);
    return images;
}

document.addEventListener('DOMContentLoaded', async () => {
    const images = await loadImages();
    initGallery(images);
    initLightbox();
    initMusic();
});

// Gallery
function initGallery(images) {
    const grid = document.querySelector('.gallery-grid');

    function appendImage({ folder, src }) {
        const img = document.createElement('img');
        img.src = folder + src;
        img.alt = src;
        img.dataset.full = folder + src;
        img.className = 'gallery-image';
        img.loading = 'lazy';
        grid.appendChild(img);
    }

    images.forEach(appendImage);
}

// Lightbox modal
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.querySelector('.lightbox-image');
    let idx = -1;
    let touchStart = 0;

    function getImages() {
        return Array.from(document.querySelectorAll('.gallery-image'));
    }

    function open(index) {
        const allImg = getImages();
        if (!allImg[index]) return;
        idx = index;
        img.src = allImg[index].dataset.full;
        img.onerror = () => {
            img.style.display = 'none';
            const retry = document.createElement('button');
            retry.textContent = 'Retry';
            retry.style.cssText = 'padding: 1rem; font-size: 1rem; cursor: pointer;';
            retry.onclick = () => open(idx);
            lightbox.appendChild(retry);
        };
        img.onload = () => {
            img.style.display = 'block';
            const retry = lightbox.querySelector('button');
            if (retry) retry.remove();
        };
        lightbox.classList.add('active');
    }

    function close() {
        lightbox.classList.remove('active');
        img.onerror = null;
        img.onload = null;
        const retry = lightbox.querySelector('button');
        if (retry) retry.remove();
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

    // Swipe detection for mobile
    lightbox.addEventListener('touchstart', e => {
        touchStart = e.changedTouches[0].clientX;
    }, false);

    lightbox.addEventListener('touchend', e => {
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        if (Math.abs(diff) > 50) {
            move(diff > 0 ? 1 : -1);
        }
    }, false);

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


