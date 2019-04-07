---
layout: post
title: Scraping Thumbnail From WeChat Official Account Posts
---

How to automatically scrape the thumbnail image from any WeChat Official Account Posts with a few lines of Python.


## The Motivation

I met with a high school friend a few days ago, who is now a pro in writing and editing posts for WeChat Official Accounts as part of her involvement with the school media team. Frequently, she needs to extract images and texts from a post for adaptation and modification.

If you have no idea what a WeChat post thumbnail is, it refers to the image on the post preview, which itself is not visible in the post body.

<img src="{{ site.baseurl }}/images/wechat1.png" style="width: 400px;"/>

The manual way of retrieving such thumbnail:
1. Copy the link to the post and paste into a browser.
2. Right-click or CTRL-click and select **View Page Source**.
3. CTRL+F to search for a line like **var msg_cdn_url = "...";**. The content inside "" is the link to the image.
4. Copy and paste the image link into the browser. And viola - here comes the thumbnail image.

A simple Python web scraper would spare my friend from such tedious repetitions. All it needs to handle is the following:
1. Read the source code of the given post.
2. Find the line that contains **var msg_cdn_url = "...";** and extract the url.
3. Retrieve the image from the url and save locally.

This is how it plays out in the code.


## The Code

**scrapewechat.py**
```python
#!user/bin/python3
from urllib.request import urlopen
import re

link = input('Enter link to the post: ')
src = urlopen(link).read().decode('utf-8')
# var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz/...wx_fmt=jpeg";
# http://mmbiz.qpic.cn/mmbiz/...wx_fmt=jpeg leads to the image
url = re.findall(r'var msg_cdn_url = "(\S+)";', src)[0]
print(url)
fmt = url.split('fmt=')[1]
fname = f'img.{fmt}' # save with file extension
with open(fname, 'wb') as fout:
    data = urlopen(url).read()
    fout.write(data)
```

This could be run with
```shell
$ python3 scrapwechat.py
```

Now I have a basic snippet that works as long as the user - my friend - behaves. Steps to take from here include:
- Allow user to specify saved image name and path (save to Desktop by default)
- Error handling
- Secure Sockets Layer(SSL) certificates.

When I have accomplished all these above, I compiled the code into a Mac executable with **pyinstaller** so that my friend would not need to have Python 3 installed on her laptop or type in all the terminal commands every time she needs to extract thumbnails.

If my friend enjoys this little app well, the next time I would jump into scraping all texts and images without formatting for any WeChat Offical Account post.
