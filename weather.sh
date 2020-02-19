#!/bin/sh

set -eux
chcp 65001
CITY=Xian
LANGUAGE="zh-CN"
OPTIONS=tqp0
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"
SOUCEJPG="https://bing.ioliu.cn/v1/rand?w=1024&h=768"

curl \
  -H "Accept-Language: $LANGUAGE" \
  -H "User-Agent: $UA" \
convert \
  $SOUCEJPG <( wttr.in/$CITY\_$OPTIONS.png ) -geometry +50+50 -composite target.jpg
wget \
  -p target.jpg
curl \
  -o result.html 
