#!/bin/bash

for image in static/images/*.png; do
  imgpress -f PNG -r 736 0 -o build/${image%%.*}-736.png $image 
  imgpress -f WEBP -r 736 0 -o build/${image%%.*}-736.webp $image 
  imgpress -f WEBP -r 320 0 -o build/${image%%.*}-320.webp $image 
done