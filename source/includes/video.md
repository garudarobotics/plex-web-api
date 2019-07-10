our video server is hosted on wowza streaming service
currently we have secured both the source streaming and the playback streaming
  - source streaming is secured with username and password
  - playback streaming is secured with sha256 hashing of secret key

one problem is that the secure playback streaming is "limited" to application level, which means in order to prevent our clients from reading/receiving each other's streams, we need to create an application for each client

as far as we can tell, there's no limit to the number of applications that we can create on the server, and applications can be created with API calls --> which means that this can be automated sometime down the road

for now, it might be adequate to stick with manual application creation for each of our clients, and then provide them with the client secret and also instructions on how to push their video stream to wowza, as well as pulling back the stream.

upload: rtmp
receive: rtsp

wowza API reference: https://www.wowza.com/docs/application-management-query-examples

python script for video playback:
```python
import cv2
# DEFAULT_INPUT = "rtsp://skystream.int.garuda.io:1935/live/test1"
# DEFAULT_INPUT = "rtsp://skystream.int.garuda.io:1935/live/test1?wowzatoken=YXh4b25zb2Z0&wowzatokenstarttime=0&wowzatokenendtime=0"

DEFAULT_INPUT = "rtsp://skystream.int.garuda.io:1935/live/test1?wowzatokenendtime=1561871986&wowzatokenhash=7WpAmB3qHA74Ma6mnivhD8cpcZ4oQUTICX9rBg="

vcap = cv2.VideoCapture(DEFAULT_INPUT)
while(1):
   ret, frame = vcap.read()
   cv2.imshow('VIDEO', frame)
   cv2.waitKey(1)
```

nodeJS script for hashing of url and secret:
```javascript
const crypto = require("crypto")

const startTime = 1561267186
const endTime = 1561871986

// const url = `live/test1?&axxonsoft&wowzatokenendtime=${endTime}&wowzatokenstarttime=${startTime}`
const url = `live/test1?axxonsoft&wowzatokenendtime=${endTime}`
console.log("Url: ", url)

const sha256Sum = crypto
  .createHash("sha256")
  .update(url, "utf-8")
  .digest("base64")

console.log(sha256Sum)

// console.log(
//     `rtsp://skystream.int.garuda.io:1935/live/test1?wowzatokenstarttime=${startTime}&wowzatokenendtime=${endTime}&wowzatokenhash=${sha256Sum}`
// )
console.log(
  `rtsp://skystream.int.garuda.io:1935/live/test1?wowzatokenendtime=${endTime}&wowzatokenhash=${sha256Sum}`
)

```

ffmpeg command for uploading of the stream to our server:
```
ffmpeg -re -i /home/darren/Documents/garuda-work/garuda-analytics/realtime-web-server/sample_videos/DJI_0180-baseline-real.mp4 -vcodec h264 -codec copy -f flv rtmp://axxonsoft:axxonstream1@skystream.int.garuda.io:1935/live/test1
```