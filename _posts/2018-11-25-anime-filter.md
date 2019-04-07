---
layout: post
title: Adding an Anime-ish Color Filter to Your Image with Python
---

How to add a color filter and a Japanese anime touch to your image without touching your favorite Digital Drawing APP.


## The Motivation

Let's first take a look at a sample image - a forever WIP of mine as I struggle with drawing backgrounds.

<img src="{{ site.baseurl }}/images/original.png" style="width: 700px;"/>

It is supposed to be anime-style, but something seems to be missing... The colors seem too bleak for the usual light-hearted anime tone.

Here is the usual fix, done in MedibBang Paint Pro, a drawing software for Mac.
1. Open up the image file and make three layers of copy.
2. Create a layer with blend mode set to *Multiply* above each copied layer.
3. Fill in the three *Multiply* layers with Red, Yellow and Blue. (The order does not matter.)  
<img src="{{ site.baseurl }}/images/medibang1.png" style="width: 200px;"/>
4. Merge the *Multiply* layer with the one image layer below it. Do this for all Red, Yellow and Blue. This should end up in three layers, all in *Normal* blend mode, i.e., Red multiplied over the original, Yellow multiplied over the original and Blue multiplied over the original.   
<img src="{{ site.baseurl }}/images/medibang2.png" style="width: 200px;"/>
5. Set the blend mode of the two upper layer to *Screen*. Leave the bottom layer as *Normal*. (Again, the particular ordering of Red, Yellow, and Blue does not matter.)  
<img src="{{ site.baseurl }}/images/medibang3.png" style="width: 200px;"/>

Ta-da! Aren't the colors a lot better now? (To be fair, we overdid the saturation a little bit.)

<img src="{{ site.baseurl }}/images/medibang4.png" style="width: 1000px;"/>

It turns out that the PIL module in Python can easily help to automate the process described above.

PIL (Pillow) is an image processing Python library which can be installed like this for Python3:
```shell
$ pip3 install Pillow
```

Let's review the steps to perform before diving into the code:
1. Generate Red, Yellow, Blue color mask layers
2. Multiply each solid color layer over the original image layer
3. Screen any two of the three multiplied layers above the remaining one


## The Code

**animefilter.py**
```python
#!/usr/bin/env python3
from PIL import Image, ImageChops
img = Image.open('original.png').convert('RGB')

# generate color masks for multiplication
red = Image.new('RGB', img.size, (255, 0, 0))
yellow = Image.new('RGB', img.size, (255, 255, 0))
blue = Image.new('RGB', img.size, (0, 0, 255))
red = ImageChops.multiply(red, img)
yellow = ImageChops.multiply(yellow, img)
blue = ImageChops.multiply(blue, img)

# screen red, yellow above blue
screened = ImageChops.screen(yellow, blue)
result = ImageChops.screen(red, screened)

result.show()
result.save('filtered.png')
```

And out comes out our filtered image!

<img src="{{ site.baseurl }}/images/filtered.png" style="width: 700px;"/>

A side-by-side comparison with the original one. Now this will saves us digital artists some efforts the next time we want to add a brighter, anime-ish touch to our images.

<span>
  <img src="{{ site.baseurl }}/images/original.png" style="width: 350px;"/>
  <img src="{{ site.baseurl }}/images/filtered.png" style="width: 350px;"/>
</span>

This post reminds me that I should probably write a post on Color Math at some point, so until then :)