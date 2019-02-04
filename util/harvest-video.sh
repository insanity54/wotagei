#!/bin/bash


function detectplatform {
    platform='unknown'
    unamestr=`uname`
    if [[ "$unamestr" == 'Linux' ]]; then
       platform='linux'
    elif [[ "$unamestr" == 'Darwin' ]]; then
       platform='darwin'
    fi
}

function osxrealpath {
    [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}

function getbindir {
    if [[ $platform == 'linux' ]]; then
       echo "$(dirname "$(readlink -fm "$0")")"  # linux
    elif [[ $platform == 'darwin' ]]; then
       echo "$(dirname "$(osxrealpath $0)")"     # osx
    fi
}

detectplatform
cd $(getbindir)


function usage {
  echo "USAGE: harvest-video.sh https://www.youtube.com/watch?v=mSvrMVGpMiE '4:20' '4:53'"
}

video="${1}"
ss="${2}"
to="${3}"

if [ -z "$video" ]; then
  usage
  exit 1
fi

if [ -z "$ss" ]; then
  usage
  exit 1
fi

if [ -z "$to" ]; then
  usage
  exit 1
fi



# youtube-dl -f bestvideo[height<=?720]+bestaudio/best "${video}" && \
#   ffmpeg -i




# greetz https://github.com/rg3/youtube-dl/issues/622#issuecomment-320962680
videoFilenames=($(youtube-dl -f "22/18,43/worst" -o "%(id)s.%(ext)s" --get-filename ${video}))
highFilename=$(basename -- "${videoFilenames[0]}")
lowFilename=$(basename -- "${videoFilenames[1]}")
highExtension="${highFilename##*.}"
highFilename="${highFilename%.*}_${ss}-${to}"
lowExtension="${lowFilename##*.}"
lowFilename="${lowFilename%.*}_${ss}-${to}"

thumbnailFilename=${highFilename}.jpg

echo "videoFilenames[0]:${videosFilename[0]}, videoFilenames[1]:${videoFilenames[1]}, video:${video}, ss:${ss}, to:${to}, videoFilenames:${videoFilenames}, videoFilenames[0]:${videoFilenames[0]}, videoFilenames[1]:${videoFilenames[1]}, lowFilename:${highFilename}, highExtension:${highExtension}, lowExtension:${lowExtension}, thumbnailFilename:${thumbnailFilename}"

# Skip download if we already have the video file
if [ ! -f "../static/vid/${videoFilenames[0]}" ]; then
  youtube-dl -f '22/18' -o "%(id)s.%(ext)s" "${video}"
fi

if [ ! -f "../static/vid/${videoFilenames[1]}" ]; then
  youtube-dl -f '43/worst' -o "%(id)s.%(ext)s" "${video}"
fi


# make thumbnail if it doesnt exist already
if [ ! -f "../static/img/$thumbnailFilename" ]; then
  ffmpeg -i ${videoFilenames[1]} -ss "${ss}" -vframes 1 -y "../static/img/${thumbnailFilename}"
fi

# created trimmed high video if it doesnt exist already
if [ ! -f "../static/vid/${videoFilenames[1]}" ]; then
  ffmpeg -i "${videoFilenames[0]}" -ss "${ss}" -to "${to}" -y -vf drawtext="text='HIGH: fontcolor=white: fontsize=18: x=10: y=5'" ../static/vid/${highFilename}.mp4
fi

# create trimmed low video if it doesnt exist already
if [ ! -f "../static/vid/${videoFilenames[1]}" ]; then
  ffmpeg -i "${videoFilenames[1]}" -ss "${ss}" -to "${to}" -y "../static/vid/${lowFilename}.webm"
fi
