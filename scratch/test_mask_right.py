from PIL import Image

# Open the original backup image
img_r = Image.open("public/membership-right-clean.jpg.bak")
width_r, height_r = img_r.size
pixels_r = img_r.load()

# We want to black out the text region (x <= 330).
# Let's do a soft fade to black between x=330 and x=350:
# For x <= 330, make it solid black.
# For x between 330 and 350, fade it.
for y in range(height_r):
    for x in range(width_r):
        if x <= 330:
            pixels_r[x, y] = (0, 0, 0)
        elif x < 350:
            factor = (x - 330) / 20.0
            r, g, b = pixels_r[x, y][:3]
            pixels_r[x, y] = (int(r * factor), int(g * factor), int(b * factor))

img_r.save("public/membership-right-clean.jpg")
print("Right image saved with precise masking.")
