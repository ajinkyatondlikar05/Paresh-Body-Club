from PIL import Image

def find_shapes(img_path, min_x, max_x):
    img = Image.open(img_path)
    width, height = img.size
    
    # We will find pixels where brightness > 3 (near black is <= 3)
    # in the specified X range.
    detected_pixels = []
    for x in range(min_x, max_x):
        for y in range(height):
            r, g, b = img.getpixel((x, y))[:3]
            brightness = 0.299*r + 0.587*g + 0.114*b
            if brightness > 3:
                detected_pixels.append((x, y))
                
    if not detected_pixels:
        print("No pixels found!")
        return
        
    xs = [p[0] for p in detected_pixels]
    ys = [p[1] for p in detected_pixels]
    print(f"For {img_path} in range [{min_x}, {max_x}]:")
    print(f"  X range: {min(xs)} to {max(xs)}")
    print(f"  Y range: {min(ys)} to {max(ys)}")

print("--- LEFT IMAGE SEARCH FOR TEXT ---")
find_shapes("public/membership-left-clean.jpg", 220, 512)

print("\n--- RIGHT IMAGE SEARCH FOR TEXT ---")
find_shapes("public/membership-right-clean.jpg", 0, 200)
