#!/usr/bin/env python3
import json
from pathlib import Path

root = Path(__file__).resolve().parent
images_dir = root / 'images'
output_path = root / 'images.json'

if not images_dir.exists():
    raise SystemExit('images/ directory not found.')

all_images = []

# Scan all subdirectories in images/
for folder in sorted(images_dir.iterdir()):
    if folder.is_dir():
        folder_name = folder.name
        for file_path in sorted(folder.iterdir()):
            if file_path.is_file() and file_path.suffix.lower() in ['.jpg', '.jpeg', '.png', '.gif', '.webp']:
                all_images.append({
                    'src': file_path.name,
                    'folder': f'images/{folder_name}/'
                })

output_path.write_text(json.dumps(all_images, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print(f'Updated {output_path} with {len(all_images)} image file(s).')