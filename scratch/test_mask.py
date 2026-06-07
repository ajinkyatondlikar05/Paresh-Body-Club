import shutil
from PIL import Image

# Back up original files
shutil.copyfile("public/membership-left-clean.jpg", "public/membership-left-clean.jpg.bak")
shutil.copyfile("public/membership-right-clean.jpg", "public/membership-right-clean.jpg.bak")

# Process left image
# We want to black out the text region (x >= 220).
# Let's do a soft fade to black between x=210 and x=230 to keep it smooth, 
# and make x >= 230 solid black.
img_l = Image.open("public/membership-left-clean.jpg")
width_l, height_l = img_l.size
pixels_l = img_l.load()

for y in range(height_l):
    for x in range(210, width_l):
        if x >= 230:
            pixels_l[x, y] = (0, 0, 0)
        else:
            # linear interpolation factor
            factor = (230 - x) / 20.0
            r, g, b = pixels_l[x, y][:3]
            pixels_l[x, y] = (int(r * factor), int(g * factor), int(b * factor))

img_l.save("public/membership-left-clean.jpg")
print("Left image saved.")

# Process right image
# We want to black out the text region (x <= 200).
# Let's do a soft fade to black between x=180 and x=200, 
# and make x <= 180 solid black.
img_r = Image.open("public/membership-right-clean.jpg")
width_r, height_r = img_r.size
pixels_r = img_r.load()

for y in range(height_r):
    for x in range(200):
        if x <= 180:
            pixels_r[x, y] = (0, 0, 0)
        else:
            factor = (x - 180) / 20.0
            r, g, b = pixels_r[x, y][:3]
            pixels_r[x, y] = (int(r * factor), int(g * factor), int(b * factor))

img_r.save("public/membership-right-clean.jpg")
print("Right image saved.")
