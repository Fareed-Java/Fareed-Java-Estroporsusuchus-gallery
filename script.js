// Load images from JSON
let allImages = [];

async function loadImages() {
    try {
        const response = await fetch(`images.json?v=${Date.now()}`);
        allImages = await response.json();
    } catch (error) {
        console.error('Failed to load images:', error);
        // Fallback to empty array or handle error
        allImages = [];
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadImages();
    loadGallery('paintings-gallery', allImages);
    setupLightbox();
});

function loadGallery(galleryId, images) {
    const grid = document.querySelector(`#${galleryId} .gallery-grid`);

    let displayedImages = 0;
    const batchSize = 20;
    const loadThresholdPx = 250;

    function showImages() {
        const endIndex = Math.min(displayedImages + batchSize, images.length);
        for (let i = displayedImages; i < endIndex; i++) {
            const imgObj = images[i];
            const imgElement = document.createElement('img');
            imgElement.src = imgObj.folder + imgObj.src;
            imgElement.alt = imgObj.src;
            imgElement.dataset.full = imgObj.folder + imgObj.src;
            imgElement.classList.add('gallery-image');
            imgElement.loading = 'lazy';
            grid.appendChild(imgElement);
        }
        displayedImages = endIndex;
    }

    function loadMoreOnScroll() {
        if (displayedImages >= images.length) {
            window.removeEventListener('scroll', loadMoreOnScroll);
            window.removeEventListener('resize', loadMoreOnScroll);
            return;
        }

        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.documentElement.scrollHeight - loadThresholdPx;
        if (scrollPosition >= threshold) {
            showImages();
        }
    }

    if (images.length > 0) {
        showImages();
        loadMoreOnScroll();
    }

    window.addEventListener('scroll', loadMoreOnScroll);
    window.addEventListener('resize', loadMoreOnScroll);
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    let currentIndex = -1;

    function getImages() {
        return Array.from(document.querySelectorAll('.gallery-image'));
    }

    function openLightbox(index) {
        const images = getImages();
        const img = images[index];
        if (!img) return;
        currentIndex = index;
        lightboxImage.src = img.dataset.full;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function moveLightbox(step) {
        if (!lightbox.classList.contains('active')) return;
        const images = getImages();
        const nextIndex = (currentIndex + step + images.length) % images.length;
        openLightbox(nextIndex);
    }

    // Event delegation for images
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-image')) {
            const images = getImages();
            const index = images.indexOf(e.target);
            if (index !== -1) {
                openLightbox(index);
            }
        }
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                moveLightbox(-1);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                moveLightbox(1);
                break;
        }
    });
}

// Auto-play music control (user-triggered)
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const prevTrackButton = document.getElementById('prev-track');
const nextTrackButton = document.getElementById('next-track');
const randomTrackButton = document.getElementById('random-track');
const uploadTrackInput = document.getElementById('upload-track');

let playlist = [];
let currentTrackIndex = 0;

function formatTrackName(fileName) {
    return fileName.replace(/^(.*\/)?/, '').replace(/\.[^/.]+$/, '');
}

function isSupportedAudioTrack(track) {
    if (!track || !track.src) return false;
    const ext = track.src.split('.').pop().toLowerCase();
    return ['mp3', 'wav', 'ogg', 'm4a', 'aac'].includes(ext);
}

function playTrackByIndex(index) {
    if (!playlist.length || index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[currentTrackIndex];
    backgroundMusic.src = track.src;
    backgroundMusic.load();
    backgroundMusic.play().catch(() => {});
    if (musicToggle) musicToggle.textContent = 'Pause Music';
}

function playPreviousTrack() {
    if (!playlist.length) return;
    playTrackByIndex((currentTrackIndex - 1 + playlist.length) % playlist.length);
}

function playNextTrack() {
    if (!playlist.length) return;
    playTrackByIndex((currentTrackIndex + 1) % playlist.length);
}

function playRandomTrack() {
    if (!playlist.length) return;
    const randomIndex = Math.floor(Math.random() * playlist.length);
    playTrackByIndex(randomIndex);
}

function setPlaylist(tracks) {
    if (!Array.isArray(tracks)) return;
    const normalized = tracks
        .map(track => (typeof track === 'string'
            ? { name: formatTrackName(track), src: `media/${track}` }
            : track
        ))
        .filter(isSupportedAudioTrack);

    if (!normalized.length) return;
    playlist = normalized;
    currentTrackIndex = 0;
    backgroundMusic.src = playlist[0].src;
    backgroundMusic.load();
    if (musicToggle) musicToggle.textContent = 'Play Music';
}

function addUploadedTracks(files) {
    if (!files || !files.length) return;

    Array.from(files).forEach(file => {
        const mimeType = (file.type || '').toLowerCase();
        if (!mimeType.startsWith('audio/')) return;
        const src = URL.createObjectURL(file);
        playlist.push({ name: formatTrackName(file.name), src });
    });
}

if (musicToggle && backgroundMusic) {
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {});
            musicToggle.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = 'Play Music';
        }
    });

    backgroundMusic.addEventListener('play', function() {
        musicToggle.textContent = 'Pause Music';
    });

    backgroundMusic.addEventListener('pause', function() {
        musicToggle.textContent = 'Play Music';
    });

    backgroundMusic.addEventListener('error', function() {
        playNextTrack();
    });

    backgroundMusic.addEventListener('ended', function() {
        playNextTrack();
    });

    if (prevTrackButton) prevTrackButton.addEventListener('click', playPreviousTrack);
    if (nextTrackButton) nextTrackButton.addEventListener('click', playNextTrack);
    if (randomTrackButton) randomTrackButton.addEventListener('click', playRandomTrack);
    if (uploadTrackInput) {
        uploadTrackInput.addEventListener('change', function() {
            addUploadedTracks(this.files);
        });
    }

    fetch(`media/playlist.json?v=${Date.now()}`)
        .then(response => response.json())
        .then(setPlaylist)
        .catch(() => {
            console.warn('Unable to load media/playlist.json');
        });
}


