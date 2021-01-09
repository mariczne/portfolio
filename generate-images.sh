#!/bin/bash

for image in static/images/*.png; do
  npx sharp -i $image -o build/${image%%.*}-736.png resize 736 0 format png
  npx sharp -i $image -o build/${image%%.*}-736.webp resize 736 0 format webp
  npx sharp -i $image -o build/${image%%.*}-320.webp resize 320 0 format webp
done
