from PIL import Image

def analyze_image(path):
    img = Image.open(path)
    width, height = img.size
    print(f"Analyzing {path} ({width}x{height})")
    
    # We can inspect the right side of the left image (e.g. from x=200 to 512)
    # and look for columns that have text pixels.
    # Text is light/gray/white, whereas the background is black (or near black).
    for x in range(0, width, 10):
        # Sample average brightness of column x
        brightnesses = []
        for y in range(height):
            r, g, b = img.getpixel((x, y))[:3]
            brightness = 0.299*r + 0.587*g + 0.114*b
            brightnesses.append(brightness)
        avg = sum(brightnesses) / len(brightnesses)
        print(f"Col {x:3d}: avg brightness = {avg:.2f}")

print("--- LEFT IMAGE ---")
analyze_image("public/membership-left-clean.jpg")
print("\n--- RIGHT IMAGE ---")
analyze_image("public/membership-right-clean.jpg")
