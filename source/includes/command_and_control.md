## Command and Control

**Command and Control APIs** allow you to issue various **live commands** to your drone using HTTP requests. Each of these commands, once submitted to the drone, will be logged in a **drone command log** under a specified `commandLogId`. This `commandLogId` will be returned as a response for each `command` that has been issued to the drone, and can be used to query for the status of the command via the [Admin APIs](#admin-live).

> Response for each command sent

```json
{
  "success": true,
  "data": {
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

The response for each `command` sent to the drone will contain the following information:

| Property      | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `id`          | String | Command log ID                                |
| `createdBy`   | String | ID of user that sent the command              |
| `createdDate` | String | Date-time of command sent, in ISO 8601 format |

### Take off

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/takeOff',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/takeOff', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/takeOff' \
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

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/takeOff',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/takeOff`

Command drone to take-off. Drone will arm and take off.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property   | Type   | Description                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `altitude` | String | Target Altitude in metres measures to nearest centimetres where drone will take off relative to home position |

<div></div>

### Move

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/move',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/move', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/move' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "forward": "string",
      "left": "string",
      "down": "string"
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "forward": "string",
  "left": "string",
  "down": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/move',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/move`

Manually command drone to move based on relative location

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property  | Type   | Description                                                                                                                              |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `forward` | String | Distance for done to travel forward in metres measures in neasrest centimetres. If negative values provided, drone will travel backwards |
| `left`    | String | Distance for drone to travel left in metres measured in nearest centimetres. If negative values is provided, drone will travel right.    |
| `down`    | String | Distance for drone to descend in metres measured in nearest centimetres. If positive values is provided, drone will ascend.              |

<div></div>

### Yaw

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/yaw',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/yaw', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/yaw' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "direction": "clockwise",
      "speed": "string",
      "degree": "string",
      "relative": false
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "direction": "clockwise",
  "speed": "string",
  "degree": "string",
  "relative": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/yaw',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/yaw`

Command drone to yaw based on given properties.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property    | Type    | Description                                                                                                                                                                                                                   |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `direction` | String  | Direction for Drone to yaw: `clockwise` or `anticlockwise`                                                                                                                                                                    |
| `speed`     | String  | Speed of drone to rotate in degree per second measures up to two decimal places                                                                                                                                               |
| `degree`    | String  | Degree measures up to two decimal places. If relative is true, degree will be amount that drone will yaw to. If relative is false, degree is the target that drone will yaw to where 0 is north. Minimum: `0`, Maximum: `360` |
| `relative`  | Boolean | If true, drone will yaw , if false, drone will yaw by degree amount, where 0 is north regardless of drone currently pointing to                                                                                               |

<div></div>

### Navigate

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/navigate',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/navigate', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/navigate' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "latitude": "string",
      "longitude": "string",
      "altitude": "string"
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "latitude": "string",
  "longitude": "string",
  "altitude": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/navigate',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/navigate`

Command drone to navigate to a target GPS coordinate. Drone will travel to target coordinate autonomously in straight line.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property    | Type   | Description                                                                                                                                            |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `latitude`  | String | Latitude of target coordinate in decimal degrees according to WGS84                                                                                    |
| `longitude` | String | Longitude of target coordinate in decimal degrees according to WGS84                                                                                   |
| `altitude`  | String | Altitude of target coordinate in metres above mean sea level (MAMSL) measures to nearest centimetres, if null, drone will maintain at current altitude |


<div></div>

### Follow

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/follow',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/follow', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/follow' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "coordinateX": 0,
      "coordinateY": 0
    }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "coordinateX": 0,
  "coordinateY": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/follow',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/follow`

Command drone to follow target. Drone will identify subject specified in target point and autonomously follow target.

A valid `drone_id` is required as a URL parameter for a successful command.

You should pass in the following details in the request body:

| Property      | Type   | Description                                            |
| ------------- | ------ | ------------------------------------------------------ |
| `coordinateX` | String | X Coordinate of target to be followed from camera feed |
| `coordinateY` | String | Y Coordinate of target to be followed from camera feed |

<div></div>

### Hold


> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/hold',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/hold', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/hold' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/hold',
{
  method: 'POST',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/hold`

Command drone to hold at current position

A valid `drone_id` is required as a URL parameter for a successful command.

<div></div>

### Return to home

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/returnToHome',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/returnToHome', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/returnToHome' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/returnToHome',
{
  method: 'POST',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/returnToHome`

Command drone to return to home position. Drone will navigate to home position and land.

A valid `drone_id` is required as a URL parameter for a successful command.

<div></div>

### Land

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/command/drone/{drone_id}/land',
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

r = requests.post('https://api.garuda.io/v2/command/drone/{drone_id}/land', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/command/drone/{drone_id}/land' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.garuda.io/v2/command/drone/{drone_id}/land',
{
  method: 'POST',
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
    "id": "73abd1c02a1046bd358c54728e5b6156",
    "createdBy": "5bb1ef3af490e4e49ad5b369e8b6991f",
    "createdDate": "2019-07-10T02:48:37.193Z"
  }
}
```

`POST /command/drone/{drone_id}/land`

Command drone to land at current GPS coordinate immediately to ground. When landed, drone will unarm.

A valid `drone_id` is required as a URL parameter for a successful command.

<div></div>
