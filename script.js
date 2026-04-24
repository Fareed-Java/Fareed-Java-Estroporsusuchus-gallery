// GitHub 配置
const username = 'Fareed-Java';
const repo = 'Fareed-Java-Estroporsusuchus-gallery';

// 文件夹分类映射
const categories = {
    'dinosaurs': 'images/dinosaurs',
    'marine-reptiles': 'images/marine-reptiles',
    'pterosaurs': 'images/pterosaurs',
    'misc': 'images/misc'
};

async function loadGallery() {
    for (const [id, path] of Object.entries(categories)) {
        const container = document.getElementById(id);
        if (!container) continue;

        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`);
            const files = await response.json();

            if (!Array.isArray(files)) continue;

            const imageFiles = files.filter(file => 
                /\.(jpe?g|png|gif|webp)$/i.test(file.name)
            );

            container.innerHTML = ''; // 清空加载中文字

            imageFiles.forEach(file => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <img src="${file.download_url}" alt="${file.name}" loading="lazy">
                    <div class="img-caption">${file.name.split('.')[0]}</div>
                `;
                container.appendChild(item);
            });
        } catch (e) {
            console.error("加载失败:", e);
        }
    }
}

window.onload = loadGallery;
