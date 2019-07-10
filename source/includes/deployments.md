## Deployments

Every time pilots are activated to fly drones, it is known as a `deployment`. A `deployment` is part of larger `project`, typically spans at least 1 flight session (or maybe a few minutes to a few hours), or multiple flight sessions. For each `deployment`, a leader, known as the `deployment lead` will plan the deployment for success, enlisting `pilots`, `drones`, and other equipment necessary. Proper `risk management` is required for every deployment, as are `permits` by the relevant authority (such as an Activity Permit by CAAS). Insurance coverage might also be purchased on a `deployment` basis instead of annual basis.

> A full `deployment` object, including all optional properties

```json
{
  "name": "DEPLOYMENT-001",
  "deployment_id": "9703889c2bb4322025815ed1a0509eba",
  "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "purpose": [
    "Delivery, Discharge"
  ],
  "deployment_lead": {
    "name": "USER-001",
    "user_id": "3b20c067ab91da9436ddaea6b83a9536"
  },
  "personnel": [
    {
      "name": "USER-002",
      "user_id": "53494af9b7e38f5df3447d17fe0b7547"
    }
  ],
  "drones": [
    {
      "name": "DRONE-001",
      "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
      "model_name": "M400 UAV",
      "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79"
    }
  ],
  "batteries": [
    {
      "name": "BATTERY-001",
      "battery_id": "f42074ff0948fbb1d11f7a96c07cdcdd",
      "model_name": "Multistar 6S 6600",
      "model_id": "4b38b7383fdb23fbff8c3a6a694e4533"
    }
  ],
  "cameras": [
    {
      "name": "CAMERA-001",
      "camera_id": "0b53479856488f542a18fef96b84119d",
      "model_name": "Powershot S100",
      "model_id": "0e51493cd1ae85c097547de808642659"
    }
  ],
  "payloads": [
    "Small Box"
  ],
  "checklist": [
    {
      "name": "DRONE-001",
      "type": "Equipment",
      "checked": false
    },
    {
      "name": "BATTERY-001",
      "type": "Equipment",
      "checked": false
    },
    {
      "name": "CAMERA-001",
      "type": "Equipment",
      "checked": false
    }
  ],
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  },
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "status": "new",
  "create_date": 1562216203843,
  "last_modified_date": 1562216203843,
  "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
}
```

Each `deployment` object will have the following properties:

| Property             | Type   | Description                                                                                                                                                                  |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | String | Name of the deployment                                                                                                                                                       |
| `deployment_id`      | String | Unique deployment ID                                                                                                                                                         |
| `company_id`         | String | Unique company ID                                                                                                                                                            |
| `project_id`         | String | Unique project ID                                                                                                                                                            |
| `purpose`            | Array  | Array of enumerated strings describing the purpose of the deployment. Refer to the table below for the valid enums                                                           |
| `deployment_lead`    | Object | [User object](#) representing the deployment lead                                                                                                                            |
| `personnel`          | Array  | Array of [user objects](#) representing the personnel involved in the deployment                                                                                             |
| `drones`             | Array  | Array of [drone objects](#drones) tagged to the deployment                                                                                                                   |
| `batteries`          | Array  | Array of [battery objects](#batteries) tagged to the deployment                                                                                                              |
| `cameras`            | Array  | Array of [camera objects](#cameras) tagged to the deployment                                                                                                                 |
| `payloads`           | Array  | Array of strings, each describing a payload tagged to the deployment                                                                                                         |
| `checklist`          | Array  | Array of objects, each describing a an equipment (drone, battery or camera) that is registered to the deployment, or a custom object that is also needed for the deployment. |
| `targets`            | Object | [GeoJSON](https://geojson.org) FeatureCollection that represents the deployment targets.                                                                                     |
| `start_date`         | Number | Start date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)                                                                                           |
| `end_date`           | Number | End date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)                                                                                             |
| `status`             | String | Enumerated string describing the status of the deployment. See below for the list of enums.                                                                                  |
| `create_date`        | Number | Date of creation of the deployment in epoch (Unix timestamp), converted to milliseconds (ms).                                                                                |
| `last_modified_date` | Number | Last modified date of the deployment in epoch (Unix timestamp), converted to milliseconds (ms).                                                                              |
| `last_modified_by`   | String | User ID of the last user that modified this deployment.                                                                                                                      |

The property `purpose` in a each `deployment` is represented by a set of enumerations. When creating a new `deployment`, you should specify one or more of the following `purposes` as an array of strings:

| Purpose                           | 
| --------------------------------- | 
| `Aerial Photography`, `Demonstration`, `Inspection (Building, Facility)`, `Surveillance (Security)`, `First Response`, `Recreational, Internal Training`, `Research & Development`, `Aerial Videography`, `Training (Academy)`, `Survey (Land, Plantation)`, `Delivery, Discharge` |

The property `status` represents the status of deployment, and can be one of the following 4 enums:

| Status                                          | 
| ----------------------------------------------- | 
| `new`, `draft`, `pending`, `ready to fly`, `cancelled` |

### Get all deployments

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/deployments',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/deployments', params={

}, headers = headers)

print r.json()

```

```shell
curl -X GET 'https://api.garuda.io/v2/deployments' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/deployments',
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

> Successful call returns a 200 OK response:

```json
{
  "success": true,
  "data": [
    {
      "name": "DEPLOYMENT-001",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "deployment_id": "9703889c2bb4322025815ed1a0509eba",
      "project_id": "2b6d1671011c488c6583f07824fbf2c1",
      "deployment_lead": {
        "name": "USER-001",
        "user_id": "3b20c067ab91da9436ddaea6b83a9536"
      },
      "drones": [
        {
          "name": "DRONE-001",
          "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
          "model_name": "M400 UAV",
          "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79"
        }
      ],
      "checklist": [
        {
          "name": "DRONE-001",
          "type": "Equipment",
          "checked": false
        }
      ],
      "purpose": [
        "Aerial Photography"
      ],
      "start_date": 1559571926000,
      "end_date": 1559572026000,
      "create_date": 1552216203843,
      "last_modified_date": 1552216203843,
      "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
    },
    {
      "name": "DEPLOYMENT-002",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "deployment_id": "d3ad29d17ef123309de61c0d74ad595b",
      "project_id": "2b6d1671011c488c6583f07824fbf2c1",
      "drones": [
        {
          "name": "DRONE-001",
          "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
          "model_name": "M400 UAV",
          "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79"
        }
      ],
      "batteries": [
        {
          "name": "BATTERY-001",
          "battery_id": "f42074ff0948fbb1d11f7a96c07cdcdd",
          "model_name": "Multistar 6S 6600",
          "model_id": "4b38b7383fdb23fbff8c3a6a694e4533"
        }
      ],
      "checklist": [
        {
          "name": "DRONE-001",
          "type": "Equipment",
          "checked": false
        },
        {
          "name": "BATTERY-001",
          "type": "Equipment",
          "checked": false
        }
      ],
      "deployment_lead": {
        "name": "USER-001",
        "user_id": "3b20c067ab91da9436ddaea6b83a9536"
      },
      "purpose": [
        "Demonstration"
      ],
      "start_date": 1559571926000,
      "end_date": 1559572026000,
      "create_date": 1552216203843,
      "last_modified_date": 1552216203843,
      "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
    }
  ]
}
```

`GET /deployments`

`GET /deployments?project_id=<PROJECT_ID>`

Get all deployments belonging to the company of the user. Calling this endpoint will return you an array of JSON objects representing each deployment created under the company.

You can retrieve all deployments belonging to your company via this endpoint. This endpoint also allows you to specify if you would like to filter by `project` via query strings. 

You can also specify the extent of which to fetch the data via query strings:

| Query     | Values            | Description                                                 |
| --------- | ----------------- | ----------------------------------------------------------- |
| `options` | `shallow`, `deep` | Specify if data retrieved should be a deep or shallow fetch |

For a `shallow` fetch (which is the default behaviour), the `drones`, `batteries`, `cameras` and `personnel` will be retrieved with only their `name` and `id` (see sample response on the left for how this will look like). A `deep` fetch will retrieve more information for each of the objects -- to see the exact properties that will be retrieved with a `deep` fetch, refer to the [Fleet API](#fleet-api).

<div></div>

### Create new deployment

> Code samples

```ruby
require 'rest-client'
require 'json'
headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}
result = RestClient.post 'https://api.garuda.io/v2/deployments',
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

r = requests.post('https://api.garuda.io/v2/deployments', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/deployments' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
       "name": "DEPLOYMENT-001",
       "project_id": "2b6d1671011c488c6583f07824fbf2c1",
       "drones": [
         "082e8ea46f49d95ef08233fde6da72ac"
       ],
       "deployment_lead_id": "3b20c067ab91da9436ddaea6b83a9536",
       "purpose": [
         "Aerial Photography"
       ],
       "start_date": 1559571926000,
       "end_date": 1559572026000,
       "targets": {
         "type": "FeatureCollection",
         "features": [
           {
             "type": "Feature",
             "properties": {},
             "geometry": {
               "type": "Polygon",
               "coordinates": [
                 [
                   [
                     103.78140449523926,
                     1.292500533024804
                   ],
                   [
                     103.78011703491211,
                     1.2929295772415663
                   ],
                   [
                     103.78028869628905,
                     1.2908701643402538
                   ],
                   [
                     103.78286361694336,
                     1.2922431064599564
                   ],
                   [
                     103.78140449523926,
                     1.292500533024804
                   ]
                 ]
               ]
             }
           }
         ]
       }
      }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "DEPLOYMENT-001",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "drones": [
    "082e8ea46f49d95ef08233fde6da72ac"
  ],
  "deployment_lead_id": "3b20c067ab91da9436ddaea6b83a9536",
  "purpose": [
    "Aerial Photography"
  ],
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/deployments',
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

> Successful call returns a 200 OK response:

```json
{
  "name": "DEPLOYMENT-001",
  "deployment_id": "9703889c2bb4322025815ed1a0509eba",
  "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "drones": [
    {
      "name": "DRONE-001",
      "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
      "model_name": "M400 UAV",
      "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79"
    }
  ],
  "deployment_lead": {
    "name": "USER-001",
    "user_id": "3b20c067ab91da9436ddaea6b83a9536"
  },
  "purpose": [
    "Aerial Photography"
  ],
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  },
  "create_date": 1562216203843,
  "last_modified_date": 1562216203843,
  "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
}
```

`POST /deployments`

Create a new `deployment` belonging to the company of the user. At minimum, you should pass in the following details in the request body:

| Property     | Type   | Description                                                                        |
| ------------ | ------ | ---------------------------------------------------------------------------------- |
| `name`       | String | Name of the deployment                                                             |
| `project_id` | String | Project that this deployment belongs to                                            |
| `start_date` | String | Start date of deployment in epoch (Unix timestamp), converted to milliseconds (ms) |
| `end_date`   | String | End date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)   |

There are some additional details that you can add to the request body to flesh out your deployment details even further:

| Property             | Type   | Description                                                                                                                                                                  |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deployment_lead_id` | String | User ID of the deployment lead                                                                                                                                               |
| `purpose`            | Array  | Array of [enumerated strings of purposes](#deployments) of deployment.                                                                                                       |
| `drones`             | Array  | Array of drone IDs to be used for the deployment                                                                                                                             |
| `batteries`          | Array  | Array of battery IDs to be used for the deployment                                                                                                                           |
| `cameras`            | Array  | Array of camera IDs to be used for the deployment                                                                                                                            |
| `payloads`           | Array  | Array of strings, each describing a payload used for the deployment                                                                                                          |
| `personnel`          | Array  | Array of user IDs of the personnel involved in the deployment                                                                                                                |
| `targets`            | Object | GeoJSON FeatureCollection of the deployment targets.                                                                                                                         |
| `status`             | String | Enumerated strings describing the status of the deployment.                                                                                                                  |
| `checklist`          | Array  | Array of objects, each describing a an equipment (drone, battery or camera) that is registered to the deployment, or a custom object that is also needed for the deployment. |

If no `deployment_lead_id` was provided, the deployment lead will be defaulted to the user that created the deployment. The `checklist` will automatically add the `drones`, `batteries` and `cameras` that are defined in the deployment.

> *Instead of only passing in IDs, we can support passing in entire objects as well (i.e. entire drone objects, entire camera objects, etc.). Passing in the entire object will automatically create the drone for the user in the backend in addition to creating the deployment as well. This is NOT supported as of now.*

A `deployment` that has been successfully created will return a response with a `"success": true` body and a `200 OK` status. The response body will also return the actual `deployment` object that was created.

<div></div>

### Get a deployment

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/deployments/{deployment_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/deployments/{deployment_id}', params={

}, headers = headers)

print r.json()

```

```shell
curl -X GET 'https://api.garuda.io/v2/deployments/{deployment_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/deployments/{deployment_id}',
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
  "name": "DEPLOYMENT-001",
  "deployment_id": "9703889c2bb4322025815ed1a0509eba",
  "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "drones": [
    {
      "name": "DRONE-001",
      "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79",
      "model": {
        "name": "M400 UAV",
        "provider_id": "0c5c21b6a42fadb018a5d1863c34b35d",
        "category": "Quadcopter",
        "avatar": "",
        "compatibility": {
          "batteries": [
            "0c5c21b6a42fadb018a5d1863c37bb31",
            "0c5c21b6a42fadb018a5d1863c36abd6"
          ],
          "cameras": [
            "0c5c21b6a42fadb018a5d1863c35dc93",
            "0c5c21b6a42fadb018a5d1863c35fea4"
          ],
          "payloads": []
        },
        "weight_kg": "2.100",
        "properties": {
          "dimensions": {
            "width": "0.82",
            "length": "0.82",
            "height": "0.28"
          },
          "max_flight_time": "25",
          "rc_frequency": "2.400 - 2.483GHz"
        },
        "provider": {
          "name": "Garuda Robotics Pte Ltd",
          "brand": "Garuda",
          "company_logo": "",
          "country": "Singapore",
          "id": "0c5c21b6a42fadb018a5d1863c34b35d"
        }
      },
      "notes": "Industrial-grade quadrotor UAV suitable for a variety of applications.",
      "shared": false,
      "serviceable": true,
      "aquired_on": 1532103688243
    }
  ],
  "deployment_lead": {
    "name": "USER-001",
    "user_id": "3b20c067ab91da9436ddaea6b83a9536"
  },
  "purpose": [
    "Aerial Photography"
  ],
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  },
  "create_date": 1562216203843,
  "last_modified_date": 1562216203843,
  "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
}
```

`GET /deployments/{deployment_id}`

Get a specific deployment belonging to the company of the user. A valid `deployment_id` in the path parameter is required for a successful call.

The `deployment` object returned will be the complete `deployment` object (i.e. `deep` fetch).

<div></div>

### Update a deployment

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/deployments/{deployment_id}',
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

r = requests.patch('https://api.garuda.io/v2/deployments/{deployment_id}', params={

}, headers = headers)

print r.json()

```

```shell
curl -X PATCH 'https://api.garuda.io/v2/deployments/{deployment_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
       "purpose": [
         "Demonstration",
         "Training (Academy)"
       ]
     }'
```


```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "purpose": [
    "Demonstration",
    "Training (Academy)"
  ]
}';

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/deployments/{deployment_id}',
{
  method: 'PATCH',
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
  "name": "DEPLOYMENT-001",
  "deployment_id": "9703889c2bb4322025815ed1a0509eba",
  "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "drones": [
    {
      "name": "DRONE-001",
      "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79",
      "model": {
        "name": "M400 UAV",
        "provider_id": "0c5c21b6a42fadb018a5d1863c34b35d",
        "category": "Quadcopter",
        "avatar": "",
        "compatibility": {
          "batteries": [
            "0c5c21b6a42fadb018a5d1863c37bb31",
            "0c5c21b6a42fadb018a5d1863c36abd6"
          ],
          "cameras": [
            "0c5c21b6a42fadb018a5d1863c35dc93",
            "0c5c21b6a42fadb018a5d1863c35fea4"
          ],
          "payloads": []
        },
        "weight_kg": "2.100",
        "properties": {
          "dimensions": {
            "width": "0.82",
            "length": "0.82",
            "height": "0.28"
          },
          "max_flight_time": "25",
          "rc_frequency": "2.400 - 2.483GHz"
        },
        "provider": {
          "name": "Garuda Robotics Pte Ltd",
          "brand": "Garuda",
          "company_logo": "",
          "country": "Singapore",
          "id": "0c5c21b6a42fadb018a5d1863c34b35d"
        }
      },
      "notes": "Industrial-grade quadrotor UAV suitable for a variety of applications.",
      "shared": false,
      "serviceable": true,
      "aquired_on": 1532103688243
    }
  ],
  "deployment_lead": {
    "name": "USER-001",
    "user_id": "3b20c067ab91da9436ddaea6b83a9536"
  },
  "purpose": [
    "Demonstration",
    "Training (Academy)"
  ],
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  },
  "create_date": 1562216203843,
  "last_modified_date": 1562216203843,
  "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
}
```

`PATCH /deployments/{deployment_id}`

Update a specific deployment belonging to the company of the user.

To update a specific deployment, you can pass whichever properties that you wish to update in the request body. All properties are optional.

| Property             | Type   | Description                                                                                                                                                                  |
| -------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | String | Name of the deployment                                                                                                                                                       |
| `project_id`         | String | Project ID that this deployment is part of                                                                                                                                   |
| `drones`             | Array  | Array of drone IDs to be used for the deployment                                                                                                                             |
| `deployment_lead_id` | String | User ID of the deployment lead                                                                                                                                               |
| `start_date`         | Number | Start date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)                                                                                           |
| `end_date`           | Number | End date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)                                                                                             |
| `targets`            | Object | GeoJSON FeatureCollection representation of the deployment area                                                                                                              |
| `purpose`            | String | Description of the purpose of deployment                                                                                                                                     |
| `batteries`          | Array  | Array of battery IDs to be used for the deployment                                                                                                                           |
| `cameras`            | Array  | Array of camera IDs to be used for the deployment                                                                                                                            |
| `payloads`           | Array  | Array of strings, each describing a payload tagged to the deployment                                                                                                         |
| `personnel`          | Array  | Array of user IDs of the personnel involved in the deployment                                                                                                                |
| `status`             | String | Enumerated string describing the status of the deployment.                                                                                                                   |
| `checklist`          | Array  | Array of objects, each describing a an equipment (drone, battery or camera) that is registered to the deployment, or a custom object that is also needed for the deployment. |

A deployment that has been successfully updated will return a response with a `"success": true` body and a `200 OK` status. Response body will also contain the updated `deployment` object.

<div></div>

### Delete a deployment

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/deployments/{deployment_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/deployments/{deployment_id}', params={

}, headers = headers)

print r.json()

```

```shell
curl -X DELETE 'https://api.garuda.io/v2/deployments/{deployment_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/deployments/{deployment_id}',
{
  method: 'DELETE',

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
  "name": "DEPLOYMENT-001",
  "deployment_id": "9703889c2bb4322025815ed1a0509eba",
  "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
  "project_id": "2b6d1671011c488c6583f07824fbf2c1",
  "drones": [
    {
      "name": "DRONE-001",
      "drone_id": "ceaf7e6dc205b365e156bf4f86930408",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "model_id": "7bd6798cdb0dcb26ca6d3c0ca9c2ae79",
      "model": {
        "name": "M400 UAV",
        "provider_id": "0c5c21b6a42fadb018a5d1863c34b35d",
        "category": "Quadcopter",
        "avatar": "",
        "compatibility": {
          "batteries": [
            "0c5c21b6a42fadb018a5d1863c37bb31",
            "0c5c21b6a42fadb018a5d1863c36abd6"
          ],
          "cameras": [
            "0c5c21b6a42fadb018a5d1863c35dc93",
            "0c5c21b6a42fadb018a5d1863c35fea4"
          ],
          "payloads": []
        },
        "weight_kg": "2.100",
        "properties": {
          "dimensions": {
            "width": "0.82",
            "length": "0.82",
            "height": "0.28"
          },
          "max_flight_time": "25",
          "rc_frequency": "2.400 - 2.483GHz"
        },
        "provider": {
          "name": "Garuda Robotics Pte Ltd",
          "brand": "Garuda",
          "company_logo": "",
          "country": "Singapore",
          "id": "0c5c21b6a42fadb018a5d1863c34b35d"
        }
      },
      "notes": "Industrial-grade quadrotor UAV suitable for a variety of applications.",
      "shared": false,
      "serviceable": true,
      "aquired_on": 1532103688243
    }
  ],
  "deployment_lead": {
    "name": "USER-001",
    "user_id": "3b20c067ab91da9436ddaea6b83a9536"
  },
  "purpose": [
    "Aerial Photography"
  ],
  "start_date": 1559571926000,
  "end_date": 1559572026000,
  "targets": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                103.78140449523926,
                1.292500533024804
              ],
              [
                103.78011703491211,
                1.2929295772415663
              ],
              [
                103.78028869628905,
                1.2908701643402538
              ],
              [
                103.78286361694336,
                1.2922431064599564
              ],
              [
                103.78140449523926,
                1.292500533024804
              ]
            ]
          ]
        }
      }
    ]
  },
  "create_date": 1562216203843,
  "last_modified_date": 1562216203843,
  "last_modified_by": "3b20c067ab91da9436ddaea6b83a9536"
}
```

`DELETE /deployments/{deployment_id}`

Delete a specific deployment belonging to the company of the user. A valid `deployment_id` in the path parameter is required for a successful call.

A successful deletion will return a `200 OK` status and the deleted deployment object in the response body.

<div></div>