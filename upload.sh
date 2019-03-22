
#!/bin/bash
# Requires a ~/.netrc file with neocities.org credentials

cd ./dist
find . -type f -exec curl --progress-bar --verbose -o ~/Desktop/upload.log -n -T {} --create-dirs https://neocities.org/webdav/{} \;

if [ ! $? -eq 0 ]; then
  echo 'there was a problem while uploading files.'
  exit 155
else
  echo 'all done! no errors.'
  exit 0
fi
