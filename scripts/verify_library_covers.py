from pathlib import Path
import re
import time
import requests

text = Path('/home/ubuntu/amigodosaber/src/lib/library-data.ts').read_text()
urls = re.findall(r'"coverUrl": "(https://covers\.openlibrary\.org/b/id/[^" ]+)"', text)
if len(urls) != 10000:
    raise SystemExit(f'expected 10000 cover urls, got {len(urls)}')

session = requests.Session()
session.headers.update({'User-Agent': 'AmigoDoSaberCatalog/1.0 (cover verification)'})
failures = []
sample = urls[::max(1, len(urls)//20)]
for url in sample:
    last_error = None
    for attempt in range(4):
        try:
            r = session.get(url, timeout=20, stream=True)
            content_type = r.headers.get('content-type') or ''
            if r.status_code == 200 and content_type.startswith('image/'):
                last_error = None
                break
            last_error = (url, r.status_code, content_type)
        except Exception as exc:
            last_error = (url, 'error', str(exc))
        time.sleep(1.5 * (attempt + 1))
    if last_error is not None:
        failures.append(last_error)

print(f'cover_urls={len(urls)} sampled={len(urls[::max(1, len(urls)//20)])} failures={len(failures)}')
for failure in failures:
    print(failure)
if failures:
    raise SystemExit(1)
