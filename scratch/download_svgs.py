import urllib.request
import urllib.parse
import json
import re
import os

def search_and_download(query, filename):
    print(f"Searching for '{query}'...")
    # OpenClipart search url
    enc_query = urllib.parse.quote(query)
    url = f"https://openclipart.org/search/json/?query={enc_query}&amount=10"
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            payload = data.get('payload', [])
            if not payload:
                print(f"No results found for '{query}'")
                return None
            
            # Print the title of the results
            for idx, item in enumerate(payload):
                print(f"{idx}: {item.get('title')} - {item.get('svg_files', {}).get('download')}")
            
            # Let's download the first one
            svg_url = payload[0].get('svg_files', {}).get('download')
            if svg_url:
                print(f"Downloading SVG from: {svg_url}")
                svg_req = urllib.request.Request(
                    svg_url, 
                    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
                )
                with urllib.request.urlopen(svg_req) as svg_res:
                    svg_content = svg_res.read().decode('utf-8')
                    # Save it
                    os.makedirs('scratch', exist_ok=True)
                    target_path = os.path.join('scratch', filename)
                    with open(target_path, 'w', encoding='utf-8') as f:
                        f.write(svg_content)
                    print(f"Saved to {target_path}")
                    return target_path
    except Exception as e:
        print(f"Error: {e}")
    return None

# Let's search for bodybuilder
search_and_download("bodybuilder silhouette", "bodybuilder.svg")
# Let's search for weightlifter squat
search_and_download("squat weightlifter", "squat.svg")
search_and_download("squat", "squat_generic.svg")
