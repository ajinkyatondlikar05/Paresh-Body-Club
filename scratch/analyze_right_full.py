from PIL import Image

img = Image.open("public/membership-right-clean.jpg.bak")
width, height = img.size
print(f"Original Right Image: {width}x{height}")

for x in range(0, width, 10):
    brightnesses = []
    for y in range(height):
        r, g, b = img.getpixel((x, y))[:3]
        brightness = 0.299*r + 0.587*g + 0.114*b
        brightnesses.append(brightness)
    avg = sum(brightnesses) / len(brightnesses)
    print(f"Col {x:3d}: avg brightness = {avg:.2f}")
