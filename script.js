// Image lists for each gallery
const dinosaurImages = [
    '0062C5DC-62D3-468A-BE70-2EC39F3F614E.png',
    '0B456176-1E54-405A-8E9F-A729B0CA3BE0.jpeg',
    '15063208-0FA2-4E5B-A370-0BC9675B65A1.jpeg',
    '5259A89F-27D7-4C53-8F83-A3EDF691AE01.jpeg',
    '67F7CA48-3F70-4B6B-B3A5-E920891F73E1.jpeg',
    'AC33BC8B-B956-46B6-99EC-84C131972B8F.jpeg',
    'C5778C41-5C62-43AE-AA34-A601F7E14267.jpeg'
];

const marineReptileImages = [
    '08C4EF51-1217-4297-94C4-F8B2DAC4D8AD.png',
    '0B732D48-9D69-4779-9E9C-A997CEE440F4.jpeg',
    '0D14FE94-6C33-4531-92AE-25FDB6E71AF6_1_105_c.jpeg',
    '0F6AF4E2-BF5A-445D-8D31-B7F8DC06B068.jpeg',
    '11CDAE3C-639B-4988-B33D-AC3973C00DB5_1_105_c.jpeg',
    '14BF0C1A-46A6-4095-9553-A138880D5FB1_1_105_c.jpeg',
    '1E8FEAD3-F0F5-4B4A-9426-899AF445B8BB.jpeg',
    '1F7593EA-224D-4CD8-848A-CEEA18F8EC07.jpeg',
    '25216343-EB0F-4129-800D-44C1B5A56AAD.jpeg',
    '2F186CE8-BC51-4976-A6FC-1D4DDA7BA950.jpeg',
    '30148204-0D1B-4214-8508-F3702EFD6910_1_105_c.jpeg',
    '33BBFD5B-2558-4F55-88FD-F46A641037A0_1_105_c.jpeg',
    '3AF44239-596B-4EF5-B3D9-C346558D1D0D.jpeg',
    '4284FA10-8429-4FE3-91CC-A0FA6678189C.jpeg',
    '4AECA540-85F8-4B7A-886F-28313F505777.png',
    '54E45803-30A5-4BFF-992C-430FFCC6B172_1_105_c.jpeg',
    '586D6D1C-4A2B-4575-9754-CAB74068B045_1_105_c.jpeg',
    '5E281B93-4E9D-4B8B-80FB-723DFB982665.png',
    '63030632-8008-4E5F-8157-F504C5CD94FC.jpeg',
    '66B67C5E-45FB-404D-BB1B-FF28AB3E2ED5_1_105_c.jpeg',
    '6AC30953-9EC2-427F-972B-22741E3D9C60.jpeg',
    '6DAC437F-2236-4AB8-A6C7-ABB57D4FFDD6.jpeg',
    '77B849EC-0C5D-4239-B478-3ADB5F0D46C2.jpeg',
    '7E9EF5CA-B125-4D84-9666-5EE235F66C84_1_105_c.jpeg',
    '8CACB73F-63D6-46BE-8240-6EFCCD8D0A1C.jpeg',
    '9A2A6DA8-E4D7-46EF-A401-3B750D675BDD.png',
    'A2D38A80-2314-4DAF-B3BB-6434387E7BE4.jpeg',
    'A6F06F5C-75B3-49CC-BF7B-3C4656A20EA2_1_105_c.jpeg',
    'B9CA5A00-5E39-4591-A54E-2D3FE97F8B7D_1_105_c.jpeg',
    'BB1D3CF7-F954-4CAC-BF18-580BB65C7865_1_105_c.jpeg',
    'BCB9E6EF-7F3C-40D8-9099-CE408E0CDFF1_1_105_c.jpeg',
    'D2C3DD87-D856-4FF1-BDA9-C7709E5788BB.jpeg',
    'EAD9B71C-2D43-476A-8D22-662DC39F0EDF_1_105_c.jpeg',
    'F0BCF67F-D539-4968-8860-A06676775A95.png',
    'F56FBBDB-6173-4C96-AFDC-51593F3419B6.jpeg',
    'F8D9B36A-7818-4980-A36D-2A84A2E9C9DA.jpeg'
];

const pterosaurImages = [];
const kpgImages = [];
const synapsidImages = [];
const miscImages = [];
const basementImages = [];

document.addEventListener('DOMContentLoaded', function() {
    loadGallery('dinosaur-gallery', dinosaurImages, 'images/dinosaurs/');
    loadGallery('marine-reptile-gallery', marineReptileImages, 'images/marine-reptiles/');
    loadGallery('pterosaur-gallery', pterosaurImages, 'images/pterosaurs/');
    loadGallery('kpg-gallery', kpgImages, 'images/kpg/');
    loadGallery('synapsid-gallery', synapsidImages, 'images/synapsids/');
    loadGallery('misc-gallery', miscImages, 'images/misc/');
    loadGallery('basement-gallery', basementImages, 'images/basement/');
});

function loadGallery(galleryId, images, path) {
    const grid = document.querySelector(`#${galleryId} .gallery-grid`);
    const loadMoreBtn = document.querySelector(`#${galleryId} .load-more`);
    let visibleCount = 6; // Show first 6 images

    function showImages(count) {
        grid.innerHTML = '';
        images.slice(0, count).forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = path + img;
            imgElement.alt = img;
            grid.appendChild(imgElement);
        });
    }

    if (images.length > 0) {
        showImages(visibleCount);
        if (images.length > visibleCount) {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.addEventListener('click', function() {
                visibleCount += 6;
                showImages(visibleCount);
                if (visibleCount >= images.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        } else {
            loadMoreBtn.style.display = 'none';
        }
    } else {
        loadMoreBtn.style.display = 'none';
    }
}