from PIL import Image

def find_bright_pixels(img_path, min_x, max_x, threshold=30):
    img = Image.open(img_path)
    width, height = img.size
    bright_pixels = []
    
    for x in range(min_x, max_x):
        for y in range(height):
            r, g, b = img.getpixel((x, y))[:3]
            brightness = 0.299*r + 0.587*g + 0.114*b
            if brightness > threshold:
                bright_pixels.append((x, y, brightness))
                
    if not bright_pixels:
        print(f"No pixels > {threshold} found in {img_path}!")
        return
        
    xs = [p[0] for p in bright_pixels]
    ys = [p[1] for p in bright_pixels]
    print(f"Bright pixels in {img_path}:")
    print(f"  Count: {len(bright_pixels)}")
    print(f"  X range: {min(xs)} to {max(xs)}")
    print(f"  Y range: {min(ys)} to {max(ys)}")
    
    # Group by Y ranges
    y_counts = {}
    for x, y, b in bright_pixels:
        y_counts[y] = y_counts.get(y, 0) + 1
    
    active_y_ranges = []
    current_range = None
    for y in sorted(y_counts.keys()):
        if current_range is None:
            current_range = [y, y]
        elif y == current_range[1] + 1:
            current_range[1] = y
        else:
            active_y_ranges.append(current_range)
            current_range = [y, y]
    if current_range:
        active_y_ranges.append(current_range)
        
    print("  Active Y ranges:")
    for r in active_y_ranges:
        print(f"    {r[0]} to {r[1]}")

print("--- RIGHT IMAGE ---")
find_bright_pixels("public/membership-right-clean.jpg.bak", 0, 512)
