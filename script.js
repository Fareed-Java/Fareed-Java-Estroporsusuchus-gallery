// Image lists - combined all into one paintings gallery
const allImages = [
    // Dinosaur images
    { src: '0062C5DC-62D3-468A-BE70-2EC39F3F614E.png', folder: 'images/dinosaurs/' },
    { src: '0B456176-1E54-405A-8E9F-A729B0CA3BE0.jpeg', folder: 'images/dinosaurs/' },
    { src: '15063208-0FA2-4E5B-A370-0BC9675B65A1.jpeg', folder: 'images/dinosaurs/' },
    { src: '5259A89F-27D7-4C53-8F83-A3EDF691AE01.jpeg', folder: 'images/dinosaurs/' },
    { src: '67F7CA48-3F70-4B6B-B3A5-E920891F73E1.jpeg', folder: 'images/dinosaurs/' },
    { src: 'AC33BC8B-B956-46B6-99EC-84C131972B8F.jpeg', folder: 'images/dinosaurs/' },
    { src: 'C5778C41-5C62-43AE-AA34-A601F7E14267.jpeg', folder: 'images/dinosaurs/' },
    // Marine reptile images
    { src: '08C4EF51-1217-4297-94C4-F8B2DAC4D8AD.png', folder: 'images/marine-reptiles/' },
    { src: '0B732D48-9D69-4779-9E9C-A997CEE440F4.jpeg', folder: 'images/marine-reptiles/' },
    { src: '0D14FE94-6C33-4531-92AE-25FDB6E71AF6_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '0F6AF4E2-BF5A-445D-8D31-B7F8DC06B068.jpeg', folder: 'images/marine-reptiles/' },
    { src: '11CDAE3C-639B-4988-B33D-AC3973C00DB5_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '14BF0C1A-46A6-4095-9553-A138880D5FB1_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '1E8FEAD3-F0F5-4B4A-9426-899AF445B8BB.jpeg', folder: 'images/marine-reptiles/' },
    { src: '1F7593EA-224D-4CD8-848A-CEEA18F8EC07.jpeg', folder: 'images/marine-reptiles/' },
    { src: '25216343-EB0F-4129-800D-44C1B5A56AAD.jpeg', folder: 'images/marine-reptiles/' },
    { src: '2F186CE8-BC51-4976-A6FC-1D4DDA7BA950.jpeg', folder: 'images/marine-reptiles/' },
    { src: '30148204-0D1B-4214-8508-F3702EFD6910_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '33BBFD5B-2558-4F55-88FD-F46A641037A0_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '3AF44239-596B-4EF5-B3D9-C346558D1D0D.jpeg', folder: 'images/marine-reptiles/' },
    { src: '4284FA10-8429-4FE3-91CC-A0FA6678189C.jpeg', folder: 'images/marine-reptiles/' },
    { src: '4AECA540-85F8-4B7A-886F-28313F505777.png', folder: 'images/marine-reptiles/' },
    { src: '54E45803-30A5-4BFF-992C-430FFCC6B172_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '586D6D1C-4A2B-4575-9754-CAB74068B045_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '5E281B93-4E9D-4B8B-80FB-723DFB982665.png', folder: 'images/marine-reptiles/' },
    { src: '63030632-8008-4E5F-8157-F504C5CD94FC.jpeg', folder: 'images/marine-reptiles/' },
    { src: '66B67C5E-45FB-404D-BB1B-FF28AB3E2ED5_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '6AC30953-9EC2-427F-972B-22741E3D9C60.jpeg', folder: 'images/marine-reptiles/' },
    { src: '6DAC437F-2236-4AB8-A6C7-ABB57D4FFDD6.jpeg', folder: 'images/marine-reptiles/' },
    { src: '77B849EC-0C5D-4239-B478-3ADB5F0D46C2.jpeg', folder: 'images/marine-reptiles/' },
    { src: '7E9EF5CA-B125-4D84-9666-5EE235F66C84_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '8CACB73F-63D6-46BE-8240-6EFCCD8D0A1C.jpeg', folder: 'images/marine-reptiles/' },
    { src: '9A2A6DA8-E4D7-46EF-A401-3B750D675BDD.png', folder: 'images/marine-reptiles/' },
    { src: 'A2D38A80-2314-4DAF-B3BB-6434387E7BE4.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'A6F06F5C-75B3-49CC-BF7B-3C4656A20EA2_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'B9CA5A00-5E39-4591-A54E-2D3FE97F8B7D_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'BB1D3CF7-F954-4CAC-BF18-580BB65C7865_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'BCB9E6EF-7F3C-40D8-9099-CE408E0CDFF1_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'D2C3DD87-D856-4FF1-BDA9-C7709E5788BB.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'EAD9B71C-2D43-476A-8D22-662DC39F0EDF_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'F0BCF67F-D539-4968-8860-A06676775A95.png', folder: 'images/marine-reptiles/' },
    { src: 'F56FBBDB-6173-4C96-AFDC-51593F3419B6.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'F8D9B36A-7818-4980-A36D-2A84A2E9C9DA.jpeg', folder: 'images/marine-reptiles/' }
];

document.addEventListener('DOMContentLoaded', function() {
    loadGallery('paintings-gallery', allImages);
    setupLightbox();
});

function loadGallery(galleryId, images) {
    const grid = document.querySelector(`#${galleryId} .gallery-grid`);
    const loadMoreBtn = document.querySelector(`#${galleryId} .load-more`);
    let visibleCount = 12; // Show first 12 images

    function showImages(count) {
        grid.innerHTML = '';
        images.slice(0, count).forEach((imgObj, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgObj.folder + imgObj.src;
            imgElement.alt = imgObj.src;
            imgElement.dataset.full = imgObj.folder + imgObj.src;
            imgElement.classList.add('gallery-image');
            grid.appendChild(imgElement);
        });
    }

    if (images.length > 0) {
        showImages(visibleCount);
        if (images.length > visibleCount) {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.addEventListener('click', function() {
                visibleCount += 12;
                showImages(visibleCount);
                if (visibleCount >= images.length) {
                    loadMoreBtn.style.display = 'none';
                }
                setupLightbox();
            });
        } else {
            loadMoreBtn.style.display = 'none';
        }
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.classList.add('active');
            lightboxImage.src = this.dataset.full;
            lightboxImage.alt = this.alt;
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
}