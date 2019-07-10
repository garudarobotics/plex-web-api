# Airspace API

Specification for Airspace API for airspace information gathered by Garuda Robotics

## Airspace Data

### Get latest airspace data

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/airspace/{country_code}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/airspace/{country_code}', params={

}, headers = headers)

print r.json()
```

```shell
curl -X GET 'https://api.garuda.io/v2/airspace/{country_code}' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/airspace/{country_code}',
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
    "type": "FeatureCollection",
    "features": [
      {
        "id": "string",
        "lastUpdatedDate": "2019-07-10T03:09:32.731Z",
        "type": "Feature",
        "geometry": {},
        "properties": {
          "name": "National Day 2017",
          "type": "military_property",
          "description": "National Day 2017 temporary restricted area",
          "rules": [
            {
              "id": "string",
              "description": "string",
              "type": "restricted",
              "owner": {
                "name": "string",
                "type": "government ministry"
              },
              "source": {
                "name": "string",
                "type": "official website",
                "url": "string"
              },
              "validity": [
                {
                  "start": "2019-07-10T03:09:32.731Z",
                  "end": "2019-07-10T03:09:32.731Z"
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```

`GET /airspace/{country_code}`

This endpoint allows you to retrieve the latest available airspace data, based on the country code that is specified. A [valid ISO 3166-1 alpha-3 country code](https://www.iso.org/obp/ui/#search) is required as a URL parameter.

The airspace data will be returned as a GeoJSON `FeatureCollection` object. Each `Feature` within the `FeatureCollection` is considered an `airspace` object, with the following properties:

| Property          | Type   | Description                                                                    |
| ----------------- | ------ | ------------------------------------------------------------------------------ |
| `id`              | String | Airspace ID                                                                    |
| `lastUpdatedDate` | String | Airspace last updated date                                                     |
| `type`            | String | GeoJSON RFC7946 Feature object type                                            |
| `geometry`        | Object | Valid GeoJSON geometry object follow RFC7946 GeoJSON section 3.1 specification |
| `properties`      | Object | Object representing the properties of this airspace                            |

Each `airspace` has a field `properties`, which contain the following information:

| Property      | Type   | Description                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------- |
| `name`        | String | Name of location / airspace or event                                             |
| `type`        | String | Category of airspace                                                             |
| `description` | String | Additional note about location / airspace or event                               |
| `rules`       | Array  | Array of `rule` objects that each describe the rules applicable to this airspace |

Each `rule` object has the following properties:

| Property      | Type   | Description                                                                                                        |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`          | String | `rule` unique ID                                                                                                   |
| `description` | String | Additional note about rule                                                                                         |
| `type`        | String | Enumerated strings of rule types: `restricted`, `danger`, `protected`, `prohibited`, `national-park`, `aerodrome`  |
| `owner`       | Object | Information about entity that own the rule. Has the properties `name` and `type`                                   |
| `source`      | Object | Information on where specified rule is published. Has the properties `name`, `type`, and `url`                     |
| `validity`    | Object | If validity properties is not given, its assumed that the rule is permanent. Has the properties `start` and `end`. |

<div></div>
