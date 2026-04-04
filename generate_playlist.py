#!/usr/bin/env python3
import json
from pathlib import Path

root = Path(__file__).resolve().parent
media_dir = root / 'media'
playlist_path = media_dir / 'playlist.json'

if not media_dir.exists():
    raise SystemExit('media/ directory not found.')

mp3_files = sorted(
    [str(path.name) for path in media_dir.iterdir() if path.is_file() and path.suffix.lower() == '.mp3']
)

playlist_path.write_text(json.dumps(mp3_files, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print(f'Updated {playlist_path} with {len(mp3_files)} MP3 file(s).')
