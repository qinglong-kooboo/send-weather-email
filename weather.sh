#!/bin/sh

set -eux
CITY=Xian
LANGUAGE="zh-CN"
UNIT=m
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"
OPTIONS=tqp0

curl \
  -H "Accept-Language: $LANGUAGE" \
  -H "User-Agent: $UA" \
  -o result.html \
  https://bing.ioliu.cn/v1/rand?w=1024&h=768
  #wttr.in/$CITY\_$OPTIONS.png
  #wttr.in/$CITY?format=1\&$UNIT
