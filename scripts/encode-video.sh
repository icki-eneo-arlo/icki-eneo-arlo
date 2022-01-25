input=$1
prefix=$2
# sizes=(512 1024 2048 3800)
# crfs=(18 21 24 27)
sizes=(1024 2048 3840)
crfs=(18)

echo "AVOID RUNNING THIS SCRIPT SIMULTANEOUS TO GATSBY. Webpack will attempt to constantly load the asset as its being created."

mkdir -p ./exports/

if [ -f  "$input" ]; then
  echo "Processing $input"
  for crf in "${crfs[@]}"; do
    for size in "${sizes[@]}"; do
      echo "Encoding video at $size px wide with a constant rate factor of $crf"
      ffmpeg -n -nostats -loglevel "error" \
        -i "$input" \
        -vcodec libx264 \
        -preset veryslow \
        -strict -2 \
        -pix_fmt yuv420p \
        -crf "$crf" \
        -vf scale="$size":-2 \
        -movflags +faststart \
        "./exports/$prefix--crf-$crf--width-$size.mp4"

    done

  done
else
  echo "Input file does not exist."
fi
