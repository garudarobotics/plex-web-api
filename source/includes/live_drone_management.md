## Drone Management

During a live drone flight, there are a multitude of information that you can retrieve about your drone to understand it's health, status and other diagnostics information. 

**Drone Management APIs** allow you to query such information directly from the drone to provide you with the most up-to-date and accurate information as quickly as possible. 

### Get all drones and live status

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/drones',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/drones', params={

}, headers = headers)

print r.json()
```

```shell
curl -X GET 'https://api.garuda.io/v2/drones' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/drones',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```
> 200 Response

```json
{
  "success": true,
  "data": {
    "count": 1,
    "drones": [
      {
        "id": "9d0330b429354a07ba7928aa6289c34c",
        "status": "online",
        "telemetry_uri": "wss://api.garuda.io/telemetry/live/web?drone_id=9d0330b429354a07ba7928aa6289c34c&api_key=your_api_key",
        "stream_uris": [
          {
            "id": "03725f1054e54ce4bda92e8b3ec34edf",
            "uri": "rtmp://skystream.garuda.io/SkyStream/9d0330b429354a07ba7928aa6289c34c-03725f1054e54ce4bda92e8b3ec34edf",
            "name": "payload camera 1"
          }
        ]
      }
    ]
  }
}
```

`GET /drones`

With the first endpoint, you can retrieve information regarding all your drones in the system, along with the `id` of the drone, its connectivity `status`, `telemetry URIs` and `video stream URIs`. With the URIs provided, you will be able to retrieve the raw telemetry data from the drone and also view the live stream of the camera(s) on the drone.

Telemetry is delivered via a web socket connection. To learn more about telemetry and how you can create a client to read and receive telemetry via a web socket, refer to [Getting live telemetry](#getting-live-telemetry)

Live video streams are delivered either via `rtmp` or `rtsp` protocols. To learn more about live video streams and the available protocols to retrieve the streams, refer to [Video](#video)

<div></div>

### Get latest telemetry data

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/telemetry/{drone_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/telemetry/{drone_id}', params={

}, headers = headers)

print r.json()
```

```shell
curl -X GET 'https://api.garuda.io/v2/telemetry/{drone_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/telemetry/{drone_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```
> 200 Response

```json
{
  "success": true,
  "data": {
    "droneId": "4e63faa7eb83cb0f3dfc498c5020a35e",
    "timestamp": "1560495518277",
    "lat": "30.30516",
    "long": "-214.74836",
    "alt": "100.00",
    "yaw": "-6.94",
    "pitch": "0.00",
    "roll": "0.00",
    "agl": "100.00",
    "flightState": "init",
    "failsafe": "None",
    "flightTime": "3600000",
    "velocity_x": "10.00",
    "velocity_y": "10.00",
    "velocity_z": "10.00",
    "battVolt": "12587.00",
    "battCurr": "12587.00",
    "battLife": "100.00",
    "satCount": "10",
    "gpsHAcc": "121",
    "gpsVAcc": "65535",
    "homeLat": "30.305168",
    "homeLong": "-214.7483648",
    "homeAlt": "None",
    "rssi": "123.123",
    "network_name": "Singtel"
  }
}
```

`GET /telemetry/{drone_id}`

This endpoint allows you to query for the single latest telemetry data, just to get the latest update on the status and location of your drone. To learn more about `telemetry` and the information you will be able to obtain via each `telemetry`, refer to [Telemetry](#telemetry).

<div></div>

### Get information on a specific drone

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/drones/{drone_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/drones/{drone_id}', params={

}, headers = headers)

print r.json()
```

```shell
curl -X GET 'https://api.garuda.io/v2/drones/{drone_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/drones/{drone_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```
> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "8b594775-abe8-4409-9ce3-b298da488dee",
    "model": "Phantom 3 Professional",
    "brand": "DJI",
    "category": "Quadcopter",
    "totalFlights": 0,
    "totalAirtime": ""
  }
}
```

`GET /drones/{drone_id}`

You can retrieve detailed information on a specific drone with this call. Each response will contain the following information:

| Property       | Type   | Description                                                                   |
| -------------- | ------ | ----------------------------------------------------------------------------- |
| `id`           | String | Drone ID                                                                      |
| `model`        | String | Model name of the drone                                                       |
| `brand`        | String | Brand name of the drone                                                       |
| `category`     | Object | Category of drone                                                             |
| `totalFlights` | Number | Total number of flights of drone                                              |
| `totalAirtime` | String | Number of hours drone has flown (in nearest minute, up to two decimal places) |

<div></div>


