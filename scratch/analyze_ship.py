from PIL import Image

img = Image.open("public/membership-right-clean.jpg.bak")
width, height = img.size

# We scan y from 290 to 430 (vertical span of SHIP text)
# and x from 0 to 350.
print("X column average brightness in Y [290, 430]:")
for x in range(0, 350, 10):
    brightnesses = []
    for y in range(290, 430):
        r, g, b = img.getpixel((x, y))[:3]
        brightness = 0.299*r + 0.587*g + 0.114*b
        brightnesses.append(brightness)
    avg = sum(brightnesses) / len(brightnesses)
    print(f"Col {x:3d}: {avg:.2f}")
