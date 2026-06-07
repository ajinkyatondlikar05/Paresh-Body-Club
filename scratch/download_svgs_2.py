import urllib.request
import urllib.parse
import re
import os

def scrape_svgrepo(query, filename):
    print(f"Scraping SVGRepo for '{query}'...")
    enc_query = urllib.parse.quote(query)
    url = f"https://www.svgrepo.com/vectors/{enc_query}/"
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Look for SVG URLs in the HTML
            # SVGRepo stores them in CDN URLs like https://www.svgrepo.com/show/XXXXX/YYYYY.svg
            svg_urls = re.findall(r'https://www.svgrepo.com/show/\d+/[^"\']+\.svg', html)
            if not svg_urls:
                print(f"No SVGs found on page for '{query}'")
                return None
            
            # Print unique found URLs
            unique_urls = list(set(svg_urls))
            print(f"Found {len(unique_urls)} SVGs:")
            for idx, url in enumerate(unique_urls[:5]):
                print(f"{idx}: {url}")
            
            # Let's download the first few to check
            for idx, svg_url in enumerate(unique_urls[:3]):
                print(f"Downloading: {svg_url}")
                svg_req = urllib.request.Request(
                    svg_url, 
                    headers={'User-Agent': 'Mozilla/5.0'}
                )
                with urllib.request.urlopen(svg_req) as svg_res:
                    svg_content = svg_res.read().decode('utf-8')
                    os.makedirs('scratch', exist_ok=True)
                    target_path = os.path.join('scratch', f"{filename.split('.')[0]}_{idx}.svg")
                    with open(target_path, 'w', encoding='utf-8') as f:
                        f.write(svg_content)
                    print(f"Saved to {target_path}")
            return True
    except Exception as e:
        print(f"Error: {e}")
    return None

scrape_svgrepo("bodybuilder", "bodybuilder.svg")
scrape_svgrepo("squat", "squat.svg")
