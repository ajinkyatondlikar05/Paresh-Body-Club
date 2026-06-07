import urllib.request
import urllib.parse
import re
import os

def scrape_pdv(query, filename):
    print(f"Scraping PublicDomainVectors for '{query}'...")
    enc_query = urllib.parse.quote(query)
    # Search URL format: https://publicdomainvectors.org/en/search/QUERY/1.html
    url = f"https://publicdomainvectors.org/en/search/{enc_query}/1.html"
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            # Look for thumbnail or SVG links.
            # In PDV, vector detail pages look like: https://publicdomainvectors.org/en/free-clipart/xxxx/yyyy.html
            links = re.findall(r'href="(https://publicdomainvectors.org/en/free-clipart/[^"]+)"', html)
            if not links:
                print(f"No detail pages found for '{query}'")
                return None
            
            unique_links = list(set(links))
            print(f"Found {len(unique_links)} vector pages:")
            for idx, link in enumerate(unique_links[:3]):
                print(f"{idx}: {link}")
                
            # Go to the first vector page and find the download link for the SVG
            # The download link is like: https://publicdomainvectors.org/download.php?file=XXXX.svg
            for idx, detail_url in enumerate(unique_links[:2]):
                print(f"Opening detail page: {detail_url}")
                det_req = urllib.request.Request(
                    detail_url, 
                    headers={'User-Agent': 'Mozilla/5.0'}
                )
                with urllib.request.urlopen(det_req) as det_res:
                    det_html = det_res.read().decode('utf-8')
                    svg_downloads = re.findall(r'href="([^"]+download\.php\?file=[^"]+)"', det_html)
                    if svg_downloads:
                        svg_dl_url = svg_downloads[0]
                        if not svg_dl_url.startswith('http'):
                            svg_dl_url = 'https:' + svg_dl_url if svg_dl_url.startswith('//') else 'https://publicdomainvectors.org' + svg_dl_url
                        print(f"Downloading SVG from: {svg_dl_url}")
                        
                        dl_req = urllib.request.Request(
                            svg_dl_url, 
                            headers={'User-Agent': 'Mozilla/5.0'}
                        )
                        with urllib.request.urlopen(dl_req) as dl_res:
                            svg_content = dl_res.read().decode('utf-8')
                            os.makedirs('scratch', exist_ok=True)
                            target_path = os.path.join('scratch', f"{filename.split('.')[0]}_{idx}.svg")
                            with open(target_path, 'w', encoding='utf-8') as f:
                                f.write(svg_content)
                            print(f"Saved to {target_path}")
            return True
    except Exception as e:
        print(f"Error: {e}")
    return None

scrape_pdv("bodybuilder", "bodybuilder.svg")
scrape_pdv("squatting", "squat.svg")
