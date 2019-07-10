## Admin (Live)

Admin API for troubleshooting and advanced configuration

### Get command log status

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/droneCommandLog/{commandLogId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/droneCommandLog/{commandLogId}', params={

}, headers = headers)

print r.json()
```

```shell
curl -X GET 'https://api.garuda.io/v2/droneCommandLog/{commandLogId}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/droneCommandLog/{commandLogId}',
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
    "id": "string",
    "createdBy": "string",
    "createdDate": "2019-07-10T03:02:30.705Z"
  }
}
```

`GET /droneCommandLog/{commandLogId}`

Get status of a command log, for troubleshooting purpose

A valid `commandLogId` is required as a URL parameter for a successful command.

<div></div>

### Set return to home altitude

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/setReturnHomeAltitude',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/setReturnHomeAltitude', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/setReturnHomeAltitude' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "altitude": "string"
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "altitude": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/setReturnHomeAltitude',
{
  method: 'POST',
  body: inputBody,
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
    "id": "string",
    "createdBy": "string",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/setReturnHomeAltitude`

Set altitude that drone will ascend or descend to when performing return to home command.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property   | Type   | Description                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `altitude` | String | Target Altitude in metres measures to nearest centimetres where drone will take off relative to home position |

<div></div>

### Set drone home position

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/setHomePosition',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/setHomePosition', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/setHomePosition' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "latitude": "string",
      "longitude": "string",
      "altitude": 0
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "latitude": "string",
  "longitude": "string",
  "altitude": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/setHomePosition',
{
  method: 'POST',
  body: inputBody,
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
    "id": "string",
    "createdBy": "string",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/setHomePosition`

Set Home Position for Drone, this will affect return to home command. If drone is returning to home, this action will change the destination for drone to return to.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property    | Type   | Description                                                                                                                                            |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `latitude`  | String | Latitude of target coordinate in decimal degrees according to WGS84                                                                                    |
| `longitude` | String | Longitude of target coordinate in decimal degrees according to WGS84                                                                                   |
| `altitude`  | String | Altitude of target coordinate in metres above mean sea level (MAMSL) measures to nearest centimetres, if null, drone will maintain at current altitude |

<div></div>


### Set camera pitch angle

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/setCameraPitch',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/setCameraPitch', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/setCameraPitch' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "pitchAngle": 0
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "pitchAngle": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/setCameraPitch',
{
  method: 'POST',
  body: inputBody,
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
    "id": "string",
    "createdBy": "string",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/setCameraPitch`

Set camera pitch angle. Gimbal will move to specified angle.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property     | Type   | Description                            |
| ------------ | ------ | -------------------------------------- |
| `pitchAngle` | Number | Move camera gimbal to specified degree |

<div></div>
