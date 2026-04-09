// Image lists - combined all into one paintings gallery
const allImages = [
    // Dinosaur images
    { src: '0a51e3f4-9638-435d-ac0d-ee5cd97ff6cb.jpg', folder: 'images/dinosaurs/' },
    { src: '0B456176-1E54-405A-8E9F-A729B0CA3BE0.jpeg', folder: 'images/dinosaurs/' },
    { src: '1b12d177-e4e2-4f66-bf9d-18785f735fca.jpg', folder: 'images/dinosaurs/' },
    { src: '2cd719b9-b288-4d12-982c-4a22c041a109.jpg', folder: 'images/dinosaurs/' },
    { src: '2ef78be0-d769-4f79-9d1e-e8c596f2d212.jpg', folder: 'images/dinosaurs/' },
    { src: '2feb471c-656a-4606-9251-f6c52216593e.jpg', folder: 'images/dinosaurs/' },
    { src: '3f24bdaf-3bb0-4303-8fd8-d31983a0edd0.jpg', folder: 'images/dinosaurs/' },
    { src: '4d491439-272b-45ef-a9af-7d347809b051.jpg', folder: 'images/dinosaurs/' },
    { src: '4ecdf9f0-5d81-4dac-9062-458605f73bc3.jpg', folder: 'images/dinosaurs/' },
    { src: '4f634637-3b2f-4d98-ad8c-52e790831519.jpg', folder: 'images/dinosaurs/' },
    { src: '5a7e8266-9814-40fd-88ac-29ee66bf397d.jpg', folder: 'images/dinosaurs/' },
    { src: '5d76868e-b963-43fc-8353-ad45220ece31.jpg', folder: 'images/dinosaurs/' },
    { src: '5e23bf61-1171-49e9-b772-40a30cc4507e.jpg', folder: 'images/dinosaurs/' },
    { src: '5e856a4d-40b6-48aa-8d88-97178a45826b.jpg', folder: 'images/dinosaurs/' },
    { src: '7ba4b011-1817-49b8-84d6-fb7d52987b4f.jpg', folder: 'images/dinosaurs/' },
    { src: '7c6e7ac9-b5c2-4329-a719-59e7042b811e.jpg', folder: 'images/dinosaurs/' },
    { src: '7e127ae1-627a-4d73-8211-8893c6aef221.jpg', folder: 'images/dinosaurs/' },
    { src: '8a7a8ce1-1060-42dc-80f7-15abafa2a821.jpg', folder: 'images/dinosaurs/' },
    { src: '8a8a6aa0-36ce-4146-b824-625690eeaece.jpg', folder: 'images/dinosaurs/' },
    { src: '8a95eb07-2f51-4cda-8b7f-2e2bc87c39e6.jpg', folder: 'images/dinosaurs/' },
    { src: '8a4533be-5065-44d0-8272-57d77d107d48.jpg', folder: 'images/dinosaurs/' },
    { src: '8b89c40c-37cf-4fe2-a8c4-0c9b3ba85379.jpg', folder: 'images/dinosaurs/' },
    { src: '9bf2fc15-4568-4eb1-be54-2fd6b27b08ef.jpg', folder: 'images/dinosaurs/' },
    { src: '9eef3298-2f77-4577-8152-8412326f7519.jpg', folder: 'images/dinosaurs/' },
    { src: '10bd2619-a150-42cf-855b-eb18d32c16e8.jpg', folder: 'images/dinosaurs/' },
    { src: '13bbcebc-e830-48ea-af3d-5a6e7a7dcde4.jpg', folder: 'images/dinosaurs/' },
    { src: '15a6da4b-42b9-4b9b-9df3-3ccafbf9b01b.jpg', folder: 'images/dinosaurs/' },
    { src: '15fd784f-d1ef-4caa-b857-feed283a0361.jpg', folder: 'images/dinosaurs/' },
    { src: '16fd9681-3cbb-49cb-ac37-699ef8de6833.jpg', folder: 'images/dinosaurs/' },
    { src: '28f3b93e-c702-4389-a782-33f753e675c3.jpg', folder: 'images/dinosaurs/' },
    { src: '42efb3d3-f946-4805-9411-0e6ec6c7b9da.jpg', folder: 'images/dinosaurs/' },
    { src: '50b8e836-dc4f-479c-9a50-1d4de66e9233.jpg', folder: 'images/dinosaurs/' },
    { src: '54f1b3d6-276a-4174-befb-a6cce78a61cc.jpg', folder: 'images/dinosaurs/' },
    { src: '0062C5DC-62D3-468A-BE70-2EC39F3F614E.png', folder: 'images/dinosaurs/' },
    { src: '67F7CA48-3F70-4B6B-B3A5-E920891F73E1.jpeg', folder: 'images/dinosaurs/' },
    { src: '76b94605-4b34-4ad2-931f-3cca83cf482f.jpg', folder: 'images/dinosaurs/' },
    { src: '82fc3244-2e3c-4aa6-85ab-eb8da5bac9a3.jpg', folder: 'images/dinosaurs/' },
    { src: '86d539a3-379c-405d-bdfe-2b81105952bf.jpg', folder: 'images/dinosaurs/' },
    { src: '90fb78b7-8e4d-4237-82d7-27d503d4e3f1.jpg', folder: 'images/dinosaurs/' },
    { src: '92bf94d8-130f-468f-a94c-081a8a96bf15.jpg', folder: 'images/dinosaurs/' },
    { src: '92d49acb-dfb0-45e4-ab3d-315f3893a31a.jpg', folder: 'images/dinosaurs/' },
    { src: '94a57f06-0df0-4c06-bcfb-d12d38af30b3.jpg', folder: 'images/dinosaurs/' },
    { src: '211ef9fe-8856-4d37-bec7-47f8d6d36e43.jpg', folder: 'images/dinosaurs/' },
    { src: '408daff1-f256-40b6-8430-b812a04981a6.jpg', folder: 'images/dinosaurs/' },
    { src: '464b0315-9dc9-4dd8-9d7d-c8e8addba71a.jpg', folder: 'images/dinosaurs/' },
    { src: '489cfd01-73ec-4637-b172-ecc1b539385e.jpg', folder: 'images/dinosaurs/' },
    { src: '566d4d40-7296-49c3-aa57-2419b36dcc72.jpg', folder: 'images/dinosaurs/' },
    { src: '681cca90-04e3-40d2-ba6a-70432d4971fd.jpg', folder: 'images/dinosaurs/' },
    { src: '693f8a66-804d-489d-8e87-97eff0608539.jpg', folder: 'images/dinosaurs/' },
    { src: '825df721-e0d9-4e27-ae25-8d5361279a27.jpg', folder: 'images/dinosaurs/' },
    { src: '2738c41c-c84c-42ed-8289-3cfa45926e72.jpg', folder: 'images/dinosaurs/' },
    { src: '3427e010-1258-4ea3-8ef7-004fc373e99f.jpg', folder: 'images/dinosaurs/' },
    { src: '4079ffa2-cbdb-45fb-9b82-29918ab14703.jpg', folder: 'images/dinosaurs/' },
    { src: '4364c3c3-1f29-47e7-8817-ac672d378be6.jpg', folder: 'images/dinosaurs/' },
    { src: '5235f6e0-0d06-4852-9481-78b20397878d.jpg', folder: 'images/dinosaurs/' },
    { src: '5259A89F-27D7-4C53-8F83-A3EDF691AE01.jpeg', folder: 'images/dinosaurs/' },
    { src: '6840e5f0-be91-409b-9bcd-c20747c47088.jpg', folder: 'images/dinosaurs/' },
    { src: '7035d798-04a6-4f8a-b6a7-96fdbe91ee60.jpg', folder: 'images/dinosaurs/' },
    { src: '7297ea66-1b79-4599-908d-6e485e9a9a71.jpg', folder: 'images/dinosaurs/' },
    { src: '8284e569-57f1-4ece-b9e0-b84e8d63e99a.jpg', folder: 'images/dinosaurs/' },
    { src: '8805b6e7-9362-4eaa-a5f9-37578fd78de5.jpg', folder: 'images/dinosaurs/' },
    { src: '44221cbd-91ec-419f-bcc7-5cf7a4e8a087.jpg', folder: 'images/dinosaurs/' },
    { src: '391904b5-1840-417a-a3e2-396c85d99648.jpg', folder: 'images/dinosaurs/' },
    { src: '791748d7-585c-46fa-b55a-482346255ab4.jpg', folder: 'images/dinosaurs/' },
    { src: '1521924c-c7d1-4295-b5fb-048cdddf7314.jpg', folder: 'images/dinosaurs/' },
    { src: '15063208-0FA2-4E5B-A370-0BC9675B65A1.jpeg', folder: 'images/dinosaurs/' },
    { src: '45032692-7f0b-4704-ae52-ca03c08f1842.jpg', folder: 'images/dinosaurs/' },
    { src: '62481143-a247-47de-af9a-5738279e6978.jpg', folder: 'images/dinosaurs/' },
    { src: 'a3a31583-bdb8-49d1-9191-4312d668e6fb.jpg', folder: 'images/dinosaurs/' },
    { src: 'a4f2c12f-8566-4756-9fcf-0125c75cf7d1.jpg', folder: 'images/dinosaurs/' },
    { src: 'a04fb5d5-7f9b-42a9-af68-15806188b157.jpg', folder: 'images/dinosaurs/' },
    { src: 'a27fa113-bc6e-4df1-be47-cef276f5abb4.jpg', folder: 'images/dinosaurs/' },
    { src: 'AC33BC8B-B956-46B6-99EC-84C131972B8F.jpeg', folder: 'images/dinosaurs/' },
    { src: 'aee6a51e-dc6f-4fc0-85e6-0eebab9219ad.jpg', folder: 'images/dinosaurs/' },
    { src: 'b0dbcbe4-ccde-4a6a-8a53-dd8b4d2d0303.jpg', folder: 'images/dinosaurs/' },
    { src: 'b8ca8d3a-6028-42b6-a57a-288309986a00.jpg', folder: 'images/dinosaurs/' },
    { src: 'b9c9fa83-7378-4b51-8a0f-a6e74151102e.jpg', folder: 'images/dinosaurs/' },
    { src: 'b671d13d-bf96-4f5d-9927-5d9c7b1c1ca1.jpg', folder: 'images/dinosaurs/' },
    { src: 'b82520c2-6532-460c-9fd5-981c0c0070d6.jpg', folder: 'images/dinosaurs/' },
    { src: 'bb6bc53d-3c00-472a-96d0-1186fa40c5bf.jpg', folder: 'images/dinosaurs/' },
    { src: 'c8a9677e-107f-4792-92e9-960cdc4f839c.jpg', folder: 'images/dinosaurs/' },
    { src: 'c3033b56-f383-48bd-a426-f861f90ad382.jpg', folder: 'images/dinosaurs/' },
    { src: 'C5778C41-5C62-43AE-AA34-A601F7E14267.jpeg', folder: 'images/dinosaurs/' },
    { src: 'c4028345-16bb-41f8-be6b-6c8fba88d963.jpg', folder: 'images/dinosaurs/' },
    { src: 'ca9723f3-a430-4b4b-8e77-b838d842eb61.jpg', folder: 'images/dinosaurs/' },
    { src: 'd5a76b68-1210-42f9-b1e8-d5ad5a597f86.jpg', folder: 'images/dinosaurs/' },
    { src: 'd6d0c45e-2fe4-4db7-aa0e-9ded44bebd40.jpg', folder: 'images/dinosaurs/' },
    { src: 'd07e9c45-72bc-4e34-8af1-1bcef6f1432a.jpg', folder: 'images/dinosaurs/' },
    { src: 'd8c47956-656d-4ca6-bf49-9699e450ef9f.jpg', folder: 'images/dinosaurs/' },
    { src: 'd9d3b58a-1458-49c9-bacf-6087b331842e.jpg', folder: 'images/dinosaurs/' },
    { src: 'd50f25e5-21fc-48d9-8a6a-12e8f020c592.jpg', folder: 'images/dinosaurs/' },
    { src: 'd8511a68-2773-48ef-8589-a7dce4c94f04.jpg', folder: 'images/dinosaurs/' },
    { src: 'd5486301-d51b-4af4-8d19-fe764494e791.jpg', folder: 'images/dinosaurs/' },
    { src: 'de722249-c039-4670-bb3c-512aba496438.jpg', folder: 'images/dinosaurs/' },
    { src: 'df9e8beb-ede4-4b1d-867d-c7d6f4f5560e.jpg', folder: 'images/dinosaurs/' },
    { src: 'dfbaab8d-c030-4209-9258-def85a81a711.jpg', folder: 'images/dinosaurs/' },
    { src: 'e1ec1cb3-82a0-4112-90ec-b3bb5080968f.jpg', folder: 'images/dinosaurs/' },
    { src: 'e5e68a46-24c6-473e-805c-c562a3c3a915.jpg', folder: 'images/dinosaurs/' },
    { src: 'e7ad40e4-620e-4d13-8368-59898f5c71aa.jpg', folder: 'images/dinosaurs/' },
    { src: 'e071b996-9248-4388-8d65-dd6699dc2197.jpg', folder: 'images/dinosaurs/' },
    { src: 'e691e2c5-6388-44f3-af04-d3009e40ddd0.jpg', folder: 'images/dinosaurs/' },
    { src: 'ec47bef3-1843-486b-b565-4d9ae92db32f.jpg', folder: 'images/dinosaurs/' },
    { src: 'efdeb4e0-be13-4cd9-a690-b9123488c004.jpg', folder: 'images/dinosaurs/' },
    { src: 'f1b0b163-ebd0-4f8e-a9b5-93f6f538b9f7.jpg', folder: 'images/dinosaurs/' },
    { src: 'f2fdac52-7b1f-45b3-a5b1-8d048afbff36.jpg', folder: 'images/dinosaurs/' },
    { src: 'f3c9d4ea-a9ea-47e7-9ee1-b60fe0a8d639.jpg', folder: 'images/dinosaurs/' },
    { src: 'f3dbcbaf-5a25-4d09-9793-e2c5a1fdfa85.jpg', folder: 'images/dinosaurs/' },
    { src: 'f67e2b32-13f5-4c10-88a4-07aa6438b585.jpg', folder: 'images/dinosaurs/' },
    { src: 'f4135e2d-aa82-401d-837b-03a5b19df7e5.jpg', folder: 'images/dinosaurs/' },
    { src: 'f5715eec-7be7-4b9c-ab44-67b220dbac63.jpg', folder: 'images/dinosaurs/' },
    { src: 'f3854923-16b7-479e-ae1c-ca58f346fc7d.jpg', folder: 'images/dinosaurs/' },
    { src: 'fd99e2b7-631b-4c9f-ab3a-1f2111476264.jpg', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_1fekxg1fekxg1fek.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_4l6v1k4l6v1k4l6v.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_8eivu58eivu58eiv.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_11ve1r11ve1r11ve.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_4569cg4569cg4569.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_ai4h1iai4h1iai4h.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_d90ze1d90ze1d90z.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_fgrj10fgrj10fgrj.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_k0j8jk0j8jk0j8jk.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_kaa16ekaa16ekaa1.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_m0j5bom0j5bom0j5.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_nh06ylnh06ylnh06.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_o4bn3ho4bn3ho4bn.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_ox18maox18maox18.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_rr49qrr49qrr49qr.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_v5ybuhv5ybuhv5yb.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_w49cguw49cguw49c.png', folder: 'images/dinosaurs/' },
    { src: 'Gemini_Generated_Image_y6fytyy6fytyy6fy.png', folder: 'images/dinosaurs/' },
    { src: 'IMG_3444.PNG', folder: 'images/dinosaurs/' },
    { src: 'IMG_3470.PNG', folder: 'images/dinosaurs/' },
    { src: 'IMG_3471.PNG', folder: 'images/dinosaurs/' },
    { src: 'IMG_3472.PNG', folder: 'images/dinosaurs/' },
    { src: 'IMG_3473.PNG', folder: 'images/dinosaurs/' },
    { src: 'unnamed (1).jpg', folder: 'images/dinosaurs/' },
    { src: 'unnamed-1.jpg', folder: 'images/dinosaurs/' },
    { src: 'unnamed-2.jpg', folder: 'images/dinosaurs/' },
    { src: 'unnamed.jpg', folder: 'images/dinosaurs/' },
    // Marine reptile images
    { src: '0B732D48-9D69-4779-9E9C-A997CEE440F4.jpeg', folder: 'images/marine-reptiles/' },
    { src: '0D14FE94-6C33-4531-92AE-25FDB6E71AF6_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '0F6AF4E2-BF5A-445D-8D31-B7F8DC06B068.jpeg', folder: 'images/marine-reptiles/' },
    { src: '1E8FEAD3-F0F5-4B4A-9426-899AF445B8BB.jpeg', folder: 'images/marine-reptiles/' },
    { src: '1F7593EA-224D-4CD8-848A-CEEA18F8EC07.jpeg', folder: 'images/marine-reptiles/' },
    { src: '2F186CE8-BC51-4976-A6FC-1D4DDA7BA950.jpeg', folder: 'images/marine-reptiles/' },
    { src: '3AF44239-596B-4EF5-B3D9-C346558D1D0D.jpeg', folder: 'images/marine-reptiles/' },
    { src: '4AECA540-85F8-4B7A-886F-28313F505777.png', folder: 'images/marine-reptiles/' },
    { src: '5E281B93-4E9D-4B8B-80FB-723DFB982665.png', folder: 'images/marine-reptiles/' },
    { src: '6AC30953-9EC2-427F-972B-22741E3D9C60.jpeg', folder: 'images/marine-reptiles/' },
    { src: '6DAC437F-2236-4AB8-A6C7-ABB57D4FFDD6.jpeg', folder: 'images/marine-reptiles/' },
    { src: '7E9EF5CA-B125-4D84-9666-5EE235F66C84_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '08C4EF51-1217-4297-94C4-F8B2DAC4D8AD.png', folder: 'images/marine-reptiles/' },
    { src: '8CACB73F-63D6-46BE-8240-6EFCCD8D0A1C.jpeg', folder: 'images/marine-reptiles/' },
    { src: '9A2A6DA8-E4D7-46EF-A401-3B750D675BDD.png', folder: 'images/marine-reptiles/' },
    { src: '11CDAE3C-639B-4988-B33D-AC3973C00DB5_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '14BF0C1A-46A6-4095-9553-A138880D5FB1_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '33BBFD5B-2558-4F55-88FD-F46A641037A0_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '54E45803-30A5-4BFF-992C-430FFCC6B172_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '66B67C5E-45FB-404D-BB1B-FF28AB3E2ED5_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '77B849EC-0C5D-4239-B478-3ADB5F0D46C2.jpeg', folder: 'images/marine-reptiles/' },
    { src: '586D6D1C-4A2B-4575-9754-CAB74068B045_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '4284FA10-8429-4FE3-91CC-A0FA6678189C.jpeg', folder: 'images/marine-reptiles/' },
    { src: '25216343-EB0F-4129-800D-44C1B5A56AAD.jpeg', folder: 'images/marine-reptiles/' },
    { src: '30148204-0D1B-4214-8508-F3702EFD6910_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: '63030632-8008-4E5F-8157-F504C5CD94FC.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'A2D38A80-2314-4DAF-B3BB-6434387E7BE4.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'A6F06F5C-75B3-49CC-BF7B-3C4656A20EA2_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'B9CA5A00-5E39-4591-A54E-2D3FE97F8B7D_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'BB1D3CF7-F954-4CAC-BF18-580BB65C7865_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'BCB9E6EF-7F3C-40D8-9099-CE408E0CDFF1_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'D2C3DD87-D856-4FF1-BDA9-C7709E5788BB.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'EAD9B71C-2D43-476A-8D22-662DC39F0EDF_1_105_c.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'F0BCF67F-D539-4968-8860-A06676775A95.png', folder: 'images/marine-reptiles/' },
    { src: 'F8D9B36A-7818-4980-A36D-2A84A2E9C9DA.jpeg', folder: 'images/marine-reptiles/' },
    { src: 'F56FBBDB-6173-4C96-AFDC-51593F3419B6.jpeg', folder: 'images/marine-reptiles/' },
];

document.addEventListener('DOMContentLoaded', function() {
    loadGallery('paintings-gallery', allImages);
    setupLightbox();
});

function loadGallery(galleryId, images) {
    const grid = document.querySelector(`#${galleryId} .gallery-grid`);
    const loadMoreBtn = document.querySelector(`#${galleryId} .load-more`);

    function showImages() {
        grid.innerHTML = '';
        images.forEach((imgObj, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgObj.folder + imgObj.src;
            imgElement.alt = imgObj.src;
            imgElement.dataset.full = imgObj.folder + imgObj.src;
            imgElement.classList.add('gallery-image');
            grid.appendChild(imgElement);
        });
    }

    if (images.length > 0) {
        showImages();
    }

    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const images = Array.from(document.querySelectorAll('.gallery-image'));
    let currentIndex = -1;

    function openLightbox(index) {
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
        const nextIndex = (currentIndex + step + images.length) % images.length;
        openLightbox(nextIndex);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(index);
        });
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
