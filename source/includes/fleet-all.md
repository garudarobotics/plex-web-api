---
title: Fleet API
language_tabs:
  - ruby: Ruby
  - python: Python
  - http: HTTP
  - javascript: Node.JS
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v3.6.6 -->

<section>
<h1 id="fleet-api">Fleet API v0.0.1-DRAFT</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Fleet APIs to manage companies, users, drones and equipment

Base URLs:

* <a href="https://api.garuda.io/v2/">https://api.garuda.io/v2/</a>

</section>

<section>


## Get all cameras

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/cameras',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/cameras', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/cameras HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/cameras',
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

`GET /fleet/cameras`

Get all cameras belonging to the company of the user

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "name": "CAM-001",
      "camera_id": "7e7ed56fed0be0f555f8374e980056cd",
      "model": {
        "name": "Git2",
        "model_id": "7e7ed56fed0be0f555f8374e980056cd"
      },
      "notes": "Camera is to be used for surveillance purposes.",
      "acquired_on": 1554090304172
    }
  ]
}
```

<section>
<h3 id="get-all-cameras-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-cameras-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[[camera_data](#schemacamera_data)]|false|none|Array of cameras|
|»» name|string|false|none|none|
|»» camera_id|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new camera

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/cameras',
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

r = requests.post('https://api.garuda.io/v2/fleet/cameras', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/cameras HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "CAM-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/cameras',
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

`POST /fleet/cameras`

Create a new camera belonging to the company of the user

> Body parameter

```json
{
  "name": "CAM-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}
```

<section>
<h3 id="create-new-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[camera](#schemacamera)|true| **Required values:** `name`, `model_id`<br><br> **Optional values:** `notes`, `acquired_on`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "CAM-001",
    "camera_id": "7e7ed56fed0be0f555f8374e980056cd",
    "model": {
      "name": "Git2",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "Camera is to be used for surveillance purposes.",
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="create-new-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-camera-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_data](#schemacamera_data)|false|none|none|
|»» name|string|false|none|none|
|»» camera_id|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get a camera

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/cameras/{camera_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/cameras/{camera_id}', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/cameras/{camera_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/cameras/{camera_id}',
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

`GET /fleet/cameras/{camera_id}`

Get a specific camera belonging to the company of the user.

<section>
<h3 id="get-a-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_id|path|string|true|Camera ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "CAM-001",
    "camera_id": "7e7ed56fed0be0f555f8374e980056cd",
    "model": {
      "name": "Git2",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "Camera is to be used for surveillance purposes.",
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="get-a-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-a-camera-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_data](#schemacamera_data)|false|none|none|
|»» name|string|false|none|none|
|»» camera_id|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a camera

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/cameras/{camera_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/cameras/{camera_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/cameras/{camera_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "CAM-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/cameras/{camera_id}',
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

`PATCH /fleet/cameras/{camera_id}`

Update a specific camera belonging to the company of the user.

> Body parameter

```json
{
  "name": "CAM-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}
```

<section>
<h3 id="update-a-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_id|path|string|true|Camera ID|
|body|body|[camera](#schemacamera)|true| **Optional values:** `name`, `model_id`, `notes`, `acquired_on`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "CAM-001",
    "model_id": "7e7ed56fed0be0f555f8374e980056cd",
    "notes": "Camera is to be used for surveillance purposes.",
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="update-a-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-camera-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera](#schemacamera)|false|none|none|
|»» name|string|false|none|none|
|»» model_id|string|false|none|Camera model ID|
|»» notes|string|false|none|none|
|»» acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a camera

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/cameras/{camera_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/cameras/{camera_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/cameras/{camera_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/cameras/{camera_id}',
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

`DELETE /fleet/cameras/{camera_id}`

Delete a specific camera belonging to the company of the user.

<section>
<h3 id="delete-a-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_id|path|string|true|Camera ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "CAM-001",
    "model_id": "7e7ed56fed0be0f555f8374e980056cd",
    "notes": "Camera is to be used for surveillance purposes.",
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="delete-a-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-camera-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera](#schemacamera)|false|none|none|
|»» name|string|false|none|none|
|»» model_id|string|false|none|Camera model ID|
|»» notes|string|false|none|none|
|»» acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get all camera providers

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/camera-providers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/camera-providers', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/camera-providers HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers',
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

`GET /fleet/camera-providers`

Get all camera providers belonging to the company of the user.

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "name": "GoPro, Inc.",
      "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
      "brand": "GoPro",
      "country": "string"
    }
  ]
}
```

<section>
<h3 id="get-all-camera-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-camera-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[[camera_provider_data](#schemacamera_provider_data)]|false|none|Array of camera providers|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new camera provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/camera-providers',
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

r = requests.post('https://api.garuda.io/v2/fleet/camera-providers', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/camera-providers HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "GoPro, Inc.",
  "brand": "GoPro",
  "country": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers',
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

`POST /fleet/camera-providers`

Create a new camera provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "GoPro, Inc.",
  "brand": "GoPro",
  "country": "string"
}
```

<section>
<h3 id="create-new-camera-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[camera_provider](#schemacamera_provider)|true|**Required values:** `name`, `brand`, `country`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "GoPro, Inc.",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "GoPro",
    "country": "string"
  }
}
```

<section>
<h3 id="create-new-camera-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-camera-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_provider_data](#schemacamera_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get a camera provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
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

`GET /fleet/camera-providers/{camera_provider_id}`

Get a specific camera provider belonging to the company of the user.

<section>
<h3 id="get-a-camera-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "GoPro, Inc.",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "GoPro",
    "country": "string"
  }
}
```

<section>
<h3 id="get-a-camera-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-a-camera-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_provider_data](#schemacamera_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a camera provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "GoPro, Inc.",
  "brand": "GoPro",
  "country": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
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

`PATCH /fleet/camera-providers/{camera_provider_id}`

Update a specific camera provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "GoPro, Inc.",
  "brand": "GoPro",
  "country": "string"
}
```

<section>
<h3 id="update-a-camera-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|
|body|body|[camera_provider](#schemacamera_provider)|true|**Optional values:** `name`, `brand`, `country`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "GoPro, Inc.",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "GoPro",
    "country": "string"
  }
}
```

<section>
<h3 id="update-a-camera-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-camera-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_provider_data](#schemacamera_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a camera provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}',
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

`DELETE /fleet/camera-providers/{camera_provider_id}`

Delete a specific camera provider belonging to the company of the user.

<section>
<h3 id="delete-a-camera-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "GoPro, Inc.",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "GoPro",
    "country": "string"
  }
}
```

<section>
<h3 id="delete-a-camera-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-camera-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_provider_data](#schemacamera_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get all camera models

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models',
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

`GET /fleet/camera-providers/{camera_provider_id}/camera-models`

Get all camera models of a specific camera provider belonging to the company of the user.

<section>
<h3 id="get-all-camera-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "successs": true,
  "data": [
    {
      "name": "Git2",
      "model_id": "16093c440370bb24ee65a12b6c00ff0a",
      "provider": {
        "name": "GoPro Inc.",
        "provider_id": "16093c440370bb24ee65a12b6c00ff0a"
      },
      "weight": 0.064,
      "type": [
        "RGB",
        "NDIV"
      ],
      "properties": {
        "sensor_size": "",
        "image_modes": [
          "16MP(4608*3456)",
          "12MP (4032*3024)",
          "8MP (3264*2448)",
          "5MP (2592*1944)",
          "3MP (2048*1536)"
        ],
        "video_modes": [
          "2160P HD video: 2880 x 2160; 24fps",
          "1440P HD video: 2560 x 1440; 30fps",
          "1440P 4:3 HD video: 1920 x 1440; 30fps",
          "1296P HD video: 2304 x 1296; 30fps",
          "1080P HD video: 1920 x 1080; 60fps",
          "1080P 4:3 HD video: 1440 x 1080; 60fps",
          "1080P HD video: 1920 x 1080; 30fps",
          "720P HD video: 1280 x 720; 120fps",
          "720P HD video: 1280 x 720; 60fps",
          "720P HD video: 1280 x 720; 30fps",
          "WVGA video: 848 x 480; 30fps",
          "VGA: 648 x 480; 240fps"
        ],
        "maximum_clip_length": "",
        "image_file_formats": [
          "string"
        ],
        "video_file_formats": [
          "H.264",
          "mp4"
        ],
        "lens_focal_length": "string",
        "lens_focal_length_35mm_equiv": "string",
        "optical_zoom": "string",
        "digital_zoom": "string",
        "aperture": "string",
        "image_stabilization": "string",
        "auto_focus": "string",
        "manual_focus": true,
        "af_modes": [
          "string"
        ],
        "af_lock": true,
        "af_assist_lamp": true,
        "focus_distance": "string",
        "metering": [
          "string"
        ],
        "max_iso": "string",
        "shutter_speed": "60 - 1/30 sec",
        "modes": [
          "string"
        ],
        "white_balance": [
          "string"
        ],
        "continuous_shooting": "string",
        "connectivity": [
          "Mini USB",
          "Micro HDMI"
        ],
        "storage": [
          "MicroSD"
        ],
        "power": "950mAh Lithium-Ion rechargeable battery",
        "dimensions": {
          "length": "0.059",
          "width": "0.030",
          "height": "0.041"
        }
      }
    }
  ]
}
```

<section>
<h3 id="get-all-camera-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-camera-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» successs|boolean|false|none|Status of the response|
|» data|[[camera_model_data](#schemacamera_model_data)]|false|none|Array of camera models|
|»» name|string|false|none|none|
|»» model_id|string|false|none|none|
|»» provider|object|false|none|none|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» weight|number|false|none|Weight of camera in kg|
|»» type|[string]|false|none|none|
|»» properties|object|false|none|none|
|»»» sensor_size|string|false|none|none|
|»»» image_modes|[string]|false|none|none|
|»»» video_modes|[string]|false|none|none|
|»»» maximum_clip_length|string|false|none|none|
|»»» image_file_formats|[string]|false|none|none|
|»»» video_file_formats|[string]|false|none|none|
|»»» lens_focal_length|string|false|none|none|
|»»» lens_focal_length_35mm_equiv|string|false|none|none|
|»»» optical_zoom|string|false|none|none|
|»»» digital_zoom|string|false|none|none|
|»»» aperture|string|false|none|none|
|»»» image_stabilization|string|false|none|none|
|»»» auto_focus|string|false|none|none|
|»»» manual_focus|boolean|false|none|none|
|»»» af_modes|[string]|false|none|none|
|»»» af_lock|boolean|false|none|none|
|»»» af_assist_lamp|boolean|false|none|none|
|»»» focus_distance|string|false|none|none|
|»»» metering|[string]|false|none|none|
|»»» max_iso|string|false|none|none|
|»»» shutter_speed|string|false|none|none|
|»»» modes|[string]|false|none|none|
|»»» white_balance|[string]|false|none|none|
|»»» continuous_shooting|string|false|none|none|
|»»» connectivity|[string]|false|none|none|
|»»» storage|[string]|false|none|none|
|»»» power|string|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» length|string|true|none|none|
|»»»» width|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new camera model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models',
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

r = requests.post('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Git2",
  "provider_id": "16093c440370bb24ee65a12b6c00ff0a",
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models',
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

`POST /fleet/camera-providers/{camera_provider_id}/camera-models`

Create a new camera model for a specific provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Git2",
  "provider_id": "16093c440370bb24ee65a12b6c00ff0a",
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}
```

<section>
<h3 id="create-new-camera-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|
|body|body|[camera_model](#schemacamera_model)|true|**Required values:** `name`, `provider_id`, `weight`, `type`<br><br> **Optional values:** `properties`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Git2",
    "model_id": "16093c440370bb24ee65a12b6c00ff0a",
    "provider": {
      "name": "GoPro Inc.",
      "provider_id": "16093c440370bb24ee65a12b6c00ff0a"
    },
    "weight": 0.064,
    "type": [
      "RGB",
      "NDIV"
    ],
    "properties": {
      "sensor_size": "",
      "image_modes": [
        "16MP(4608*3456)",
        "12MP (4032*3024)",
        "8MP (3264*2448)",
        "5MP (2592*1944)",
        "3MP (2048*1536)"
      ],
      "video_modes": [
        "2160P HD video: 2880 x 2160; 24fps",
        "1440P HD video: 2560 x 1440; 30fps",
        "1440P 4:3 HD video: 1920 x 1440; 30fps",
        "1296P HD video: 2304 x 1296; 30fps",
        "1080P HD video: 1920 x 1080; 60fps",
        "1080P 4:3 HD video: 1440 x 1080; 60fps",
        "1080P HD video: 1920 x 1080; 30fps",
        "720P HD video: 1280 x 720; 120fps",
        "720P HD video: 1280 x 720; 60fps",
        "720P HD video: 1280 x 720; 30fps",
        "WVGA video: 848 x 480; 30fps",
        "VGA: 648 x 480; 240fps"
      ],
      "maximum_clip_length": "",
      "image_file_formats": [
        "string"
      ],
      "video_file_formats": [
        "H.264",
        "mp4"
      ],
      "lens_focal_length": "string",
      "lens_focal_length_35mm_equiv": "string",
      "optical_zoom": "string",
      "digital_zoom": "string",
      "aperture": "string",
      "image_stabilization": "string",
      "auto_focus": "string",
      "manual_focus": true,
      "af_modes": [
        "string"
      ],
      "af_lock": true,
      "af_assist_lamp": true,
      "focus_distance": "string",
      "metering": [
        "string"
      ],
      "max_iso": "string",
      "shutter_speed": "60 - 1/30 sec",
      "modes": [
        "string"
      ],
      "white_balance": [
        "string"
      ],
      "continuous_shooting": "string",
      "connectivity": [
        "Mini USB",
        "Micro HDMI"
      ],
      "storage": [
        "MicroSD"
      ],
      "power": "950mAh Lithium-Ion rechargeable battery",
      "dimensions": {
        "length": "0.059",
        "width": "0.030",
        "height": "0.041"
      }
    }
  }
}
```

<section>
<h3 id="create-new-camera-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-camera-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_model_data](#schemacamera_model_data)|false|none|none|
|»» name|string|false|none|none|
|»» model_id|string|false|none|none|
|»» provider|object|false|none|none|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» weight|number|false|none|Weight of camera in kg|
|»» type|[string]|false|none|none|
|»» properties|object|false|none|none|
|»»» sensor_size|string|false|none|none|
|»»» image_modes|[string]|false|none|none|
|»»» video_modes|[string]|false|none|none|
|»»» maximum_clip_length|string|false|none|none|
|»»» image_file_formats|[string]|false|none|none|
|»»» video_file_formats|[string]|false|none|none|
|»»» lens_focal_length|string|false|none|none|
|»»» lens_focal_length_35mm_equiv|string|false|none|none|
|»»» optical_zoom|string|false|none|none|
|»»» digital_zoom|string|false|none|none|
|»»» aperture|string|false|none|none|
|»»» image_stabilization|string|false|none|none|
|»»» auto_focus|string|false|none|none|
|»»» manual_focus|boolean|false|none|none|
|»»» af_modes|[string]|false|none|none|
|»»» af_lock|boolean|false|none|none|
|»»» af_assist_lamp|boolean|false|none|none|
|»»» focus_distance|string|false|none|none|
|»»» metering|[string]|false|none|none|
|»»» max_iso|string|false|none|none|
|»»» shutter_speed|string|false|none|none|
|»»» modes|[string]|false|none|none|
|»»» white_balance|[string]|false|none|none|
|»»» continuous_shooting|string|false|none|none|
|»»» connectivity|[string]|false|none|none|
|»»» storage|[string]|false|none|none|
|»»» power|string|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» length|string|true|none|none|
|»»»» width|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a camera model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Git2",
  "provider_id": "16093c440370bb24ee65a12b6c00ff0a",
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}',
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

`PATCH /fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}`

Update a specific camera model of a provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Git2",
  "provider_id": "16093c440370bb24ee65a12b6c00ff0a",
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}
```

<section>
<h3 id="update-a-camera-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|
|camera_model_id|path|string|true|Camera model ID|
|body|body|[camera_model](#schemacamera_model)|true|**Optional values:** `name`, `provider_id`, `weight`, `type`, `properties`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Git2",
    "model_id": "16093c440370bb24ee65a12b6c00ff0a",
    "provider": {
      "name": "GoPro Inc.",
      "provider_id": "16093c440370bb24ee65a12b6c00ff0a"
    },
    "weight": 0.064,
    "type": [
      "RGB",
      "NDIV"
    ],
    "properties": {
      "sensor_size": "",
      "image_modes": [
        "16MP(4608*3456)",
        "12MP (4032*3024)",
        "8MP (3264*2448)",
        "5MP (2592*1944)",
        "3MP (2048*1536)"
      ],
      "video_modes": [
        "2160P HD video: 2880 x 2160; 24fps",
        "1440P HD video: 2560 x 1440; 30fps",
        "1440P 4:3 HD video: 1920 x 1440; 30fps",
        "1296P HD video: 2304 x 1296; 30fps",
        "1080P HD video: 1920 x 1080; 60fps",
        "1080P 4:3 HD video: 1440 x 1080; 60fps",
        "1080P HD video: 1920 x 1080; 30fps",
        "720P HD video: 1280 x 720; 120fps",
        "720P HD video: 1280 x 720; 60fps",
        "720P HD video: 1280 x 720; 30fps",
        "WVGA video: 848 x 480; 30fps",
        "VGA: 648 x 480; 240fps"
      ],
      "maximum_clip_length": "",
      "image_file_formats": [
        "string"
      ],
      "video_file_formats": [
        "H.264",
        "mp4"
      ],
      "lens_focal_length": "string",
      "lens_focal_length_35mm_equiv": "string",
      "optical_zoom": "string",
      "digital_zoom": "string",
      "aperture": "string",
      "image_stabilization": "string",
      "auto_focus": "string",
      "manual_focus": true,
      "af_modes": [
        "string"
      ],
      "af_lock": true,
      "af_assist_lamp": true,
      "focus_distance": "string",
      "metering": [
        "string"
      ],
      "max_iso": "string",
      "shutter_speed": "60 - 1/30 sec",
      "modes": [
        "string"
      ],
      "white_balance": [
        "string"
      ],
      "continuous_shooting": "string",
      "connectivity": [
        "Mini USB",
        "Micro HDMI"
      ],
      "storage": [
        "MicroSD"
      ],
      "power": "950mAh Lithium-Ion rechargeable battery",
      "dimensions": {
        "length": "0.059",
        "width": "0.030",
        "height": "0.041"
      }
    }
  }
}
```

<section>
<h3 id="update-a-camera-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-camera-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_model_data](#schemacamera_model_data)|false|none|none|
|»» name|string|false|none|none|
|»» model_id|string|false|none|none|
|»» provider|object|false|none|none|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» weight|number|false|none|Weight of camera in kg|
|»» type|[string]|false|none|none|
|»» properties|object|false|none|none|
|»»» sensor_size|string|false|none|none|
|»»» image_modes|[string]|false|none|none|
|»»» video_modes|[string]|false|none|none|
|»»» maximum_clip_length|string|false|none|none|
|»»» image_file_formats|[string]|false|none|none|
|»»» video_file_formats|[string]|false|none|none|
|»»» lens_focal_length|string|false|none|none|
|»»» lens_focal_length_35mm_equiv|string|false|none|none|
|»»» optical_zoom|string|false|none|none|
|»»» digital_zoom|string|false|none|none|
|»»» aperture|string|false|none|none|
|»»» image_stabilization|string|false|none|none|
|»»» auto_focus|string|false|none|none|
|»»» manual_focus|boolean|false|none|none|
|»»» af_modes|[string]|false|none|none|
|»»» af_lock|boolean|false|none|none|
|»»» af_assist_lamp|boolean|false|none|none|
|»»» focus_distance|string|false|none|none|
|»»» metering|[string]|false|none|none|
|»»» max_iso|string|false|none|none|
|»»» shutter_speed|string|false|none|none|
|»»» modes|[string]|false|none|none|
|»»» white_balance|[string]|false|none|none|
|»»» continuous_shooting|string|false|none|none|
|»»» connectivity|[string]|false|none|none|
|»»» storage|[string]|false|none|none|
|»»» power|string|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» length|string|true|none|none|
|»»»» width|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a camera model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}',
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

`DELETE /fleet/camera-providers/{camera_provider_id}/camera-models/{camera_model_id}`

Delete a specific camera model of a provider belonging to the company of the user.

<section>
<h3 id="delete-a-camera-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_provider_id|path|string|true|Camera provider ID|
|camera_model_id|path|string|true|Camera model ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Git2",
    "model_id": "16093c440370bb24ee65a12b6c00ff0a",
    "provider": {
      "name": "GoPro Inc.",
      "provider_id": "16093c440370bb24ee65a12b6c00ff0a"
    },
    "weight": 0.064,
    "type": [
      "RGB",
      "NDIV"
    ],
    "properties": {
      "sensor_size": "",
      "image_modes": [
        "16MP(4608*3456)",
        "12MP (4032*3024)",
        "8MP (3264*2448)",
        "5MP (2592*1944)",
        "3MP (2048*1536)"
      ],
      "video_modes": [
        "2160P HD video: 2880 x 2160; 24fps",
        "1440P HD video: 2560 x 1440; 30fps",
        "1440P 4:3 HD video: 1920 x 1440; 30fps",
        "1296P HD video: 2304 x 1296; 30fps",
        "1080P HD video: 1920 x 1080; 60fps",
        "1080P 4:3 HD video: 1440 x 1080; 60fps",
        "1080P HD video: 1920 x 1080; 30fps",
        "720P HD video: 1280 x 720; 120fps",
        "720P HD video: 1280 x 720; 60fps",
        "720P HD video: 1280 x 720; 30fps",
        "WVGA video: 848 x 480; 30fps",
        "VGA: 648 x 480; 240fps"
      ],
      "maximum_clip_length": "",
      "image_file_formats": [
        "string"
      ],
      "video_file_formats": [
        "H.264",
        "mp4"
      ],
      "lens_focal_length": "string",
      "lens_focal_length_35mm_equiv": "string",
      "optical_zoom": "string",
      "digital_zoom": "string",
      "aperture": "string",
      "image_stabilization": "string",
      "auto_focus": "string",
      "manual_focus": true,
      "af_modes": [
        "string"
      ],
      "af_lock": true,
      "af_assist_lamp": true,
      "focus_distance": "string",
      "metering": [
        "string"
      ],
      "max_iso": "string",
      "shutter_speed": "60 - 1/30 sec",
      "modes": [
        "string"
      ],
      "white_balance": [
        "string"
      ],
      "continuous_shooting": "string",
      "connectivity": [
        "Mini USB",
        "Micro HDMI"
      ],
      "storage": [
        "MicroSD"
      ],
      "power": "950mAh Lithium-Ion rechargeable battery",
      "dimensions": {
        "length": "0.059",
        "width": "0.030",
        "height": "0.041"
      }
    }
  }
}
```

<section>
<h3 id="delete-a-camera-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-camera-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[camera_model_data](#schemacamera_model_data)|false|none|none|
|»» name|string|false|none|none|
|»» model_id|string|false|none|none|
|»» provider|object|false|none|none|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» weight|number|false|none|Weight of camera in kg|
|»» type|[string]|false|none|none|
|»» properties|object|false|none|none|
|»»» sensor_size|string|false|none|none|
|»»» image_modes|[string]|false|none|none|
|»»» video_modes|[string]|false|none|none|
|»»» maximum_clip_length|string|false|none|none|
|»»» image_file_formats|[string]|false|none|none|
|»»» video_file_formats|[string]|false|none|none|
|»»» lens_focal_length|string|false|none|none|
|»»» lens_focal_length_35mm_equiv|string|false|none|none|
|»»» optical_zoom|string|false|none|none|
|»»» digital_zoom|string|false|none|none|
|»»» aperture|string|false|none|none|
|»»» image_stabilization|string|false|none|none|
|»»» auto_focus|string|false|none|none|
|»»» manual_focus|boolean|false|none|none|
|»»» af_modes|[string]|false|none|none|
|»»» af_lock|boolean|false|none|none|
|»»» af_assist_lamp|boolean|false|none|none|
|»»» focus_distance|string|false|none|none|
|»»» metering|[string]|false|none|none|
|»»» max_iso|string|false|none|none|
|»»» shutter_speed|string|false|none|none|
|»»» modes|[string]|false|none|none|
|»»» white_balance|[string]|false|none|none|
|»»» continuous_shooting|string|false|none|none|
|»»» connectivity|[string]|false|none|none|
|»»» storage|[string]|false|none|none|
|»»» power|string|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» length|string|true|none|none|
|»»»» width|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

</section>

<section>
<h1 id="fleet-api-battery">Battery</h1>

<section>

## Get all batteries

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/batteries',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/batteries', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/batteries HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/batteries',
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

`GET /fleet/batteries`

Get all batteries belonging to the company of the user

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "name": "BATT-001",
      "model": {
        "name": "Multistar 6S 6600",
        "model_id": "7e7ed56fed0be0f555f8374e980056cd"
      },
      "notes": "This battery is meant for small drones only.",
      "shared": false,
      "acquired_on": 1554090304172
    }
  ]
}
```

<section>
<h3 id="get-all-batteries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-batteries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[[battery_data](#schemabattery_data)]|false|none|Array of batteries|
|»» name|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» shared|boolean|false|none|none|
|»» acquired_on|number|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new battery

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/batteries',
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

r = requests.post('https://api.garuda.io/v2/fleet/batteries', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/batteries HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "BATT-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/batteries',
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

`POST /fleet/batteries`

Create a new battery belonging to the company of the user

> Body parameter

```json
{
  "name": "BATT-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}
```

<section>
<h3 id="create-new-battery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[battery](#schemabattery)|true| **Required values:** `name`, `model_id`<br><br> **Optional values:** `notes`, `acquired_on`, `shared`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "BATT-001",
    "model": {
      "name": "Multistar 6S 6600",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "This battery is meant for small drones only.",
    "shared": false,
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="create-new-battery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-battery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_data](#schemabattery_data)|false|none|none|
|»» name|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» shared|boolean|false|none|none|
|»» acquired_on|number|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get a battery

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/batteries/{battery_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/batteries/{battery_id}', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/batteries/{battery_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/batteries/{battery_id}',
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

`GET /fleet/batteries/{battery_id}`

Get a specific battery belonging to the company of the user.

<section>
<h3 id="get-a-battery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_id|path|string|true|Battery ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "BATT-001",
    "model": {
      "name": "Multistar 6S 6600",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "This battery is meant for small drones only.",
    "shared": false,
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="get-a-battery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-a-battery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_data](#schemabattery_data)|false|none|none|
|»» name|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» shared|boolean|false|none|none|
|»» acquired_on|number|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a battery

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/batteries/{battery_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/batteries/{battery_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/batteries/{battery_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "BATT-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/batteries/{battery_id}',
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

`PATCH /fleet/batteries/{battery_id}`

Update a specific battery belonging to the company of the user.

> Body parameter

```json
{
  "name": "BATT-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}
```

<section>
<h3 id="update-a-battery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_id|path|string|true|Battery ID|
|body|body|[battery](#schemabattery)|true| **Optional values:** `name`, `model_id`, `notes`, `acquired_on`, `shared`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "BATT-001",
    "model": {
      "name": "Multistar 6S 6600",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "This battery is meant for small drones only.",
    "shared": false,
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="update-a-battery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-battery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_data](#schemabattery_data)|false|none|none|
|»» name|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» shared|boolean|false|none|none|
|»» acquired_on|number|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a battery

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/batteries/{battery_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/batteries/{battery_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/batteries/{battery_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/batteries/{battery_id}',
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

`DELETE /fleet/batteries/{battery_id}`

Delete a specific battery belonging to the company of the user.

<section>
<h3 id="delete-a-battery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_id|path|string|true|Battery ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "BATT-001",
    "model": {
      "name": "Multistar 6S 6600",
      "model_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "notes": "This battery is meant for small drones only.",
    "shared": false,
    "acquired_on": 1554090304172
  }
}
```

<section>
<h3 id="delete-a-battery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-battery-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_data](#schemabattery_data)|false|none|none|
|»» name|string|false|none|none|
|»» model|object|false|none|none|
|»»» name|string|false|none|none|
|»»» model_id|string|false|none|none|
|»» notes|string|false|none|none|
|»» shared|boolean|false|none|none|
|»» acquired_on|number|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get all battery providers

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/battery-providers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/battery-providers', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/battery-providers HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers',
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

`GET /fleet/battery-providers`

Get all battery providers belonging to the company of the user.

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": [
    {
      "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
      "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
      "brand": "DJI",
      "country": "China"
    }
  ]
}
```

<section>
<h3 id="get-all-battery-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-battery-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[[battery_provider_data](#schemabattery_provider_data)]|false|none|Array of battery providers|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new battery provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/battery-providers',
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

r = requests.post('https://api.garuda.io/v2/fleet/battery-providers', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/battery-providers HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "brand": "DJI",
  "country": "China"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers',
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

`POST /fleet/battery-providers`

Create a new battery provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "brand": "DJI",
  "country": "China"
}
```

<section>
<h3 id="create-new-battery-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[battery_provider](#schemabattery_provider)|true|**Required values:** `name`, `brand`, `country`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "DJI",
    "country": "China"
  }
}
```

<section>
<h3 id="create-new-battery-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-battery-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_provider_data](#schemabattery_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get a battery provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
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

`GET /fleet/battery-providers/{battery_provider_id}`

Get a specific battery provider belonging to the company of the user.

<section>
<h3 id="get-a-battery-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "DJI",
    "country": "China"
  }
}
```

<section>
<h3 id="get-a-battery-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-a-battery-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_provider_data](#schemabattery_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a battery provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "brand": "DJI",
  "country": "China"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
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

`PATCH /fleet/battery-providers/{battery_provider_id}`

Update a specific battery provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "brand": "DJI",
  "country": "China"
}
```

<section>
<h3 id="update-a-battery-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|
|body|body|[battery_provider](#schemabattery_provider)|true|**Optional values:** `name`, `brand`, `country`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "DJI",
    "country": "China"
  }
}
```

<section>
<h3 id="update-a-battery-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-battery-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_provider_data](#schemabattery_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a battery provider

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}',
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

`DELETE /fleet/battery-providers/{battery_provider_id}`

Delete a specific battery provider belonging to the company of the user.

<section>
<h3 id="delete-a-battery-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
    "brand": "DJI",
    "country": "China"
  }
}
```

<section>
<h3 id="delete-a-battery-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-battery-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_provider_data](#schemabattery_provider_data)|false|none|none|
|»» name|string|false|none|none|
|»» provider_id|string|false|none|none|
|»» brand|string|false|none|none|
|»» country|string|false|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Get all battery models

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models', params={

}, headers = headers)

print r.json()

```

```http
GET https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models',
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

`GET /fleet/battery-providers/{battery_provider_id}/battery-models`

Get all battery models of a specific battery provider belonging to the company of the user.

<section>
<h3 id="get-all-battery-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|

</section>

> Example responses

> 200 Response

```json
{
  "successs": true,
  "data": [
    {
      "name": "Multistar 6S 6600",
      "provider": {
        "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
        "provider_id": "7e7ed56fed0be0f555f8374e980056cd"
      },
      "chemistry": "LiPo",
      "series": "6",
      "parallel": "1",
      "capacity": "6600",
      "weight": 0.794,
      "discharge_rate": "",
      "properties": {
        "dimensions": {
          "width": "0.056",
          "length": "0.0145",
          "height": "0.052"
        }
      }
    }
  ]
}
```

<section>
<h3 id="get-all-battery-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="get-all-battery-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» successs|boolean|false|none|Status of the response|
|» data|[[battery_model_data](#schemabattery_model_data)]|false|none|Array of battery models|
|»» name|string|false|none|Name of battery model|
|»» provider|object|false|none|Battery provider ID|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» chemistry|string|false|none|none|
|»» series|string|false|none|none|
|»» parallel|string|false|none|none|
|»» capacity|string|false|none|none|
|»» weight|number|false|none|Weight of battery in kg|
|»» discharge_rate|string|false|none|none|
|»» properties|object|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» width|string|true|none|none|
|»»»» length|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Create new battery model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models',
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

r = requests.post('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models', params={

}, headers = headers)

print r.json()

```

```http
POST https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Multistar 6S 6600",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models',
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

`POST /fleet/battery-providers/{battery_provider_id}/battery-models`

Create a new battery model for a specific provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Multistar 6S 6600",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}
```

<section>
<h3 id="create-new-battery-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|
|body|body|[battery_model](#schemabattery_model)|true|**Required values:** `name`, `provider_id`, `chemistry`, `series`, `parallel`, `capacity`, `weight`, `discharge_rate`<br><br> **Optional values:** `properties`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Multistar 6S 6600",
    "provider": {
      "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
      "provider_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "chemistry": "LiPo",
    "series": "6",
    "parallel": "1",
    "capacity": "6600",
    "weight": 0.794,
    "discharge_rate": "",
    "properties": {
      "dimensions": {
        "width": "0.056",
        "length": "0.0145",
        "height": "0.052"
      }
    }
  }
}
```

<section>
<h3 id="create-new-battery-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="create-new-battery-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_model_data](#schemabattery_model_data)|false|none|none|
|»» name|string|false|none|Name of battery model|
|»» provider|object|false|none|Battery provider ID|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» chemistry|string|false|none|none|
|»» series|string|false|none|none|
|»» parallel|string|false|none|none|
|»» capacity|string|false|none|none|
|»» weight|number|false|none|Weight of battery in kg|
|»» discharge_rate|string|false|none|none|
|»» properties|object|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» width|string|true|none|none|
|»»»» length|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Update a battery model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}',
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

r = requests.patch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}', params={

}, headers = headers)

print r.json()

```

```http
PATCH https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id} HTTP/1.1
Host: api.garuda.io/v2
Content-Type: application/json
Accept: application/json

```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "name": "Multistar 6S 6600",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}',
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

`PATCH /fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}`

Update a specific battery model of a provider belonging to the company of the user.

> Body parameter

```json
{
  "name": "Multistar 6S 6600",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}
```

<section>
<h3 id="update-a-battery-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|
|battery_model_id|path|string|true|Battery model ID|
|body|body|[battery_model](#schemabattery_model)|true|**Optional values:** `name`, `provider_id`, `chemistry`, `series`, `parallel`, `capacity`, `weight`, `discharge_rate`, `properties`|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Multistar 6S 6600",
    "provider": {
      "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
      "provider_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "chemistry": "LiPo",
    "series": "6",
    "parallel": "1",
    "capacity": "6600",
    "weight": 0.794,
    "discharge_rate": "",
    "properties": {
      "dimensions": {
        "width": "0.056",
        "length": "0.0145",
        "height": "0.052"
      }
    }
  }
}
```

<section>
<h3 id="update-a-battery-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="update-a-battery-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_model_data](#schemabattery_model_data)|false|none|none|
|»» name|string|false|none|Name of battery model|
|»» provider|object|false|none|Battery provider ID|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» chemistry|string|false|none|none|
|»» series|string|false|none|none|
|»» parallel|string|false|none|none|
|»» capacity|string|false|none|none|
|»» weight|number|false|none|Weight of battery in kg|
|»» discharge_rate|string|false|none|none|
|»» properties|object|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» width|string|true|none|none|
|»»»» length|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

<section>

## Delete a battery model

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}', params={

}, headers = headers)

print r.json()

```

```http
DELETE https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id} HTTP/1.1
Host: api.garuda.io/v2
Accept: application/json

```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}',
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

`DELETE /fleet/battery-providers/{battery_provider_id}/battery-models/{battery_model_id}`

Delete a specific battery model of a provider belonging to the company of the user.

<section>
<h3 id="delete-a-battery-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|battery_provider_id|path|string|true|Battery provider ID|
|battery_model_id|path|string|true|Battery model ID|

</section>

> Example responses

> 200 Response

```json
{
  "success": true,
  "data": {
    "name": "Multistar 6S 6600",
    "provider": {
      "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
      "provider_id": "7e7ed56fed0be0f555f8374e980056cd"
    },
    "chemistry": "LiPo",
    "series": "6",
    "parallel": "1",
    "capacity": "6600",
    "weight": 0.794,
    "discharge_rate": "",
    "properties": {
      "dimensions": {
        "width": "0.056",
        "length": "0.0145",
        "height": "0.052"
      }
    }
  }
}
```

<section>
<h3 id="delete-a-battery-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A successful request|Inline|

<h3 id="delete-a-battery-model-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» success|boolean|false|none|Status of the response|
|» data|[battery_model_data](#schemabattery_model_data)|false|none|none|
|»» name|string|false|none|Name of battery model|
|»» provider|object|false|none|Battery provider ID|
|»»» name|string|false|none|none|
|»»» provider_id|string|false|none|none|
|»» chemistry|string|false|none|none|
|»» series|string|false|none|none|
|»» parallel|string|false|none|none|
|»» capacity|string|false|none|none|
|»» weight|number|false|none|Weight of battery in kg|
|»» discharge_rate|string|false|none|none|
|»» properties|object|false|none|none|
|»»» dimensions|object|false|none|none|
|»»»» width|string|true|none|none|
|»»»» length|string|true|none|none|
|»»»» height|string|true|none|none|

</section>

<aside class="success">
This operation does not require authentication
</aside>

</section>

</section>

<section>

# Schemas

<section>
<h2 id="tocS_drone">drone</h2>
<!-- backwards compatibility -->
<a id="schemadrone"></a>
<a id="schema_drone"></a>
<a id="tocSdrone"></a>
<a id="tocsdrone"></a>

```json
{
  "name": "DRONE-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Primary purpose of drone: surveillance",
  "acquired_on": 1554090304172,
  "serviceable": true,
  "shared": false
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model_id|string|false|none|Drone model ID|
|notes|string|false|none|none|
|acquired_on|number|false|none|Date time acquired in milliseconds|
|serviceable|boolean|false|none|none|
|shared|boolean|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_drone_data">drone_data</h2>
<!-- backwards compatibility -->
<a id="schemadrone_data"></a>
<a id="schema_drone_data"></a>
<a id="tocSdrone_data"></a>
<a id="tocsdrone_data"></a>

```json
{
  "name": "DRONE-001",
  "drone_id": "7e7ed56fed0be0f555f8374e980056cd",
  "model": {
    "name": "M400 UAV",
    "model_id": "7e7ed56fed0be0f555f8374e980056cd"
  },
  "notes": "Primary purpose of drone: surveillance",
  "acquired_on": 1554090304172,
  "serviceable": true,
  "shared": false
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|drone_id|string|false|none|none|
|model|object|false|none|none|
|» name|string|false|none|none|
|» model_id|string|false|none|none|
|notes|string|false|none|none|
|acquired_on|number|false|none|Date time acquired in milliseconds|
|serviceable|boolean|false|none|none|
|shared|boolean|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_drone_provider">drone_provider</h2>
<!-- backwards compatibility -->
<a id="schemadrone_provider"></a>
<a id="schema_drone_provider"></a>
<a id="tocSdrone_provider"></a>
<a id="tocsdrone_provider"></a>

```json
{
  "name": "Garuda Robotics Pte. Ltd.",
  "brand": "Garuda",
  "country": "Singapore"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|brand|string|true|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_drone_provider_data">drone_provider_data</h2>
<!-- backwards compatibility -->
<a id="schemadrone_provider_data"></a>
<a id="schema_drone_provider_data"></a>
<a id="tocSdrone_provider_data"></a>
<a id="tocsdrone_provider_data"></a>

```json
{
  "name": "Garuda Robotics Pte. Ltd.",
  "drone_provider_id": "0c5c21b6a42fadb018a5d1863c34b35d",
  "brand": "Garuda",
  "country": "Singapore"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|drone_provider_id|string|false|none|none|
|brand|string|true|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_drone_model">drone_model</h2>
<!-- backwards compatibility -->
<a id="schemadrone_model"></a>
<a id="schema_drone_model"></a>
<a id="tocSdrone_model"></a>
<a id="tocsdrone_model"></a>

```json
{
  "name": "M06A",
  "provider_id": "0c5c21b6a42fadb018a5d1863c37bb31",
  "category": "Hexacopter",
  "compatibility": {
    "batteries": [
      "0c5c21b6a42fadb018a5d1863c37bb31",
      "0c5c21b6a42fadb018a5d1863c36abd6",
      "0c5c21b6a42fadb018a5d1863c36c446",
      "0c5c21b6a42fadb018a5d1863c373f80",
      "0c5c21b6a42fadb018a5d1863c37565e"
    ],
    "cameras": [
      "0c5c21b6a42fadb018a5d1863c35fea4",
      "0c5c21b6a42fadb018a5d1863c360865"
    ]
  },
  "weight": 2.6,
  "properties": {
    "dimensions": {
      "width": "1.30",
      "length": "1.30",
      "height": "0.30"
    },
    "max_flight_time": "1.7 hours",
    "rc_frequency": "2.400 - 2.483GHz"
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|provider_id|string|false|none|A valid drone provider ID|
|category|string|true|none|none|
|compatibility|object|false|none|none|
|» batteries|[string]|false|none|none|
|» cameras|[string]|false|none|none|
|weight|number|true|none|none|
|properties|object|true|none|none|
|» dimensions|object|true|none|none|
|»» width|string|true|none|none|
|»» length|string|true|none|none|
|»» height|string|true|none|none|
|» max_flight_time|string|true|none|none|
|» rc_frequency|string|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_drone_model_data">drone_model_data</h2>
<!-- backwards compatibility -->
<a id="schemadrone_model_data"></a>
<a id="schema_drone_model_data"></a>
<a id="tocSdrone_model_data"></a>
<a id="tocsdrone_model_data"></a>

```json
{
  "name": "M06A",
  "model_id": "0c5c21b6a42fadb018a5d1863c37bb31",
  "provider": {
    "name": "Garuda Robotics",
    "provider_id": "0c5c21b6a42fadb018a5d1863c37bb31"
  },
  "category": "Hexacopter",
  "compatibility": {
    "batteries": [
      {
        "name": "BATT-001",
        "battery_model_name": "Multistar 6S 6600",
        "battery_id": "0c5c21b6a42fadb018a5d1863c37bb31"
      }
    ],
    "cameras": [
      {
        "name": "CAM-001",
        "camera_model_name": "Git2",
        "camera_id": "0c5c21b6a42fadb018a5d1863c37bb31"
      }
    ]
  },
  "weight": 2.6,
  "properties": {
    "dimensions": {
      "width": "1.30",
      "length": "1.30",
      "height": "0.30"
    },
    "max_flight_time": "1.7 hours",
    "rc_frequency": "2.400 - 2.483GHz"
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|model_id|string|false|none|none|
|provider|object|false|none|none|
|» name|string|false|none|none|
|» provider_id|string|false|none|none|
|category|string|true|none|none|
|compatibility|object|false|none|none|
|» batteries|[object]|false|none|none|
|»» name|string|false|none|none|
|»» battery_model_name|string|false|none|none|
|»» battery_id|string|false|none|none|
|» cameras|[object]|false|none|none|
|»» name|string|false|none|none|
|»» camera_model_name|string|false|none|none|
|»» camera_id|string|false|none|none|
|» weight|number|true|none|Weight of drone in kg|
|» properties|object|true|none|none|
|»» dimensions|object|false|none|none|
|»»» width|string|false|none|none|
|»»» length|string|false|none|none|
|»»» height|string|false|none|none|
|»» max_flight_time|string|false|none|none|
|»» rc_frequency|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_camera">camera</h2>
<!-- backwards compatibility -->
<a id="schemacamera"></a>
<a id="schema_camera"></a>
<a id="tocScamera"></a>
<a id="tocscamera"></a>

```json
{
  "name": "CAM-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model_id|string|false|none|Camera model ID|
|notes|string|false|none|none|
|acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>
</section>

<section>
<h2 id="tocS_camera_data">camera_data</h2>
<!-- backwards compatibility -->
<a id="schemacamera_data"></a>
<a id="schema_camera_data"></a>
<a id="tocScamera_data"></a>
<a id="tocscamera_data"></a>

```json
{
  "name": "CAM-001",
  "camera_id": "7e7ed56fed0be0f555f8374e980056cd",
  "model": {
    "name": "Git2",
    "model_id": "7e7ed56fed0be0f555f8374e980056cd"
  },
  "notes": "Camera is to be used for surveillance purposes.",
  "acquired_on": 1554090304172
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|camera_id|string|false|none|none|
|model|object|false|none|none|
|» name|string|false|none|none|
|» model_id|string|false|none|none|
|notes|string|false|none|none|
|acquired_on|number|false|none|Date-time in milliseconds of acquired date.|

</section>
</section>

<section>
<h2 id="tocS_camera_provider">camera_provider</h2>
<!-- backwards compatibility -->
<a id="schemacamera_provider"></a>
<a id="schema_camera_provider"></a>
<a id="tocScamera_provider"></a>
<a id="tocscamera_provider"></a>

```json
{
  "name": "GoPro, Inc.",
  "brand": "GoPro",
  "country": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|brand|string|false|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_camera_provider_data">camera_provider_data</h2>
<!-- backwards compatibility -->
<a id="schemacamera_provider_data"></a>
<a id="schema_camera_provider_data"></a>
<a id="tocScamera_provider_data"></a>
<a id="tocscamera_provider_data"></a>

```json
{
  "name": "GoPro, Inc.",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "brand": "GoPro",
  "country": "string"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|provider_id|string|false|none|none|
|brand|string|false|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_camera_model">camera_model</h2>
<!-- backwards compatibility -->
<a id="schemacamera_model"></a>
<a id="schema_camera_model"></a>
<a id="tocScamera_model"></a>
<a id="tocscamera_model"></a>

```json
{
  "name": "Git2",
  "provider_id": "16093c440370bb24ee65a12b6c00ff0a",
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|provider_id|string|false|none|A valid camera provider ID|
|weight|number|false|none|Weight of camera in kg|
|type|[string]|false|none|none|
|properties|object|false|none|none|
|» sensor_size|string|false|none|none|
|» image_modes|[string]|false|none|none|
|» video_modes|[string]|false|none|none|
|» maximum_clip_length|string|false|none|none|
|» image_file_formats|[string]|false|none|none|
|» video_file_formats|[string]|false|none|none|
|» lens_focal_length|string|false|none|none|
|» lens_focal_length_35mm_equiv|string|false|none|none|
|» optical_zoom|string|false|none|none|
|» digital_zoom|string|false|none|none|
|» aperture|string|false|none|none|
|» image_stabilization|string|false|none|none|
|» auto_focus|string|false|none|none|
|» manual_focus|boolean|false|none|none|
|» af_modes|[string]|false|none|none|
|» af_lock|boolean|false|none|none|
|» af_assist_lamp|boolean|false|none|none|
|» focus_distance|string|false|none|none|
|» metering|[string]|false|none|none|
|» max_iso|string|false|none|none|
|» shutter_speed|string|false|none|none|
|» modes|[string]|false|none|none|
|» white_balance|[string]|false|none|none|
|» continuous_shooting|string|false|none|none|
|» connectivity|[string]|false|none|none|
|» storage|[string]|false|none|none|
|» power|string|false|none|none|
|» dimensions|object|false|none|none|
|»» length|string|true|none|none|
|»» width|string|true|none|none|
|»» height|string|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_camera_model_data">camera_model_data</h2>
<!-- backwards compatibility -->
<a id="schemacamera_model_data"></a>
<a id="schema_camera_model_data"></a>
<a id="tocScamera_model_data"></a>
<a id="tocscamera_model_data"></a>

```json
{
  "name": "Git2",
  "model_id": "16093c440370bb24ee65a12b6c00ff0a",
  "provider": {
    "name": "GoPro Inc.",
    "provider_id": "16093c440370bb24ee65a12b6c00ff0a"
  },
  "weight": 0.064,
  "type": [
    "RGB",
    "NDIV"
  ],
  "properties": {
    "sensor_size": "",
    "image_modes": [
      "16MP(4608*3456)",
      "12MP (4032*3024)",
      "8MP (3264*2448)",
      "5MP (2592*1944)",
      "3MP (2048*1536)"
    ],
    "video_modes": [
      "2160P HD video: 2880 x 2160; 24fps",
      "1440P HD video: 2560 x 1440; 30fps",
      "1440P 4:3 HD video: 1920 x 1440; 30fps",
      "1296P HD video: 2304 x 1296; 30fps",
      "1080P HD video: 1920 x 1080; 60fps",
      "1080P 4:3 HD video: 1440 x 1080; 60fps",
      "1080P HD video: 1920 x 1080; 30fps",
      "720P HD video: 1280 x 720; 120fps",
      "720P HD video: 1280 x 720; 60fps",
      "720P HD video: 1280 x 720; 30fps",
      "WVGA video: 848 x 480; 30fps",
      "VGA: 648 x 480; 240fps"
    ],
    "maximum_clip_length": "",
    "image_file_formats": [
      "string"
    ],
    "video_file_formats": [
      "H.264",
      "mp4"
    ],
    "lens_focal_length": "string",
    "lens_focal_length_35mm_equiv": "string",
    "optical_zoom": "string",
    "digital_zoom": "string",
    "aperture": "string",
    "image_stabilization": "string",
    "auto_focus": "string",
    "manual_focus": true,
    "af_modes": [
      "string"
    ],
    "af_lock": true,
    "af_assist_lamp": true,
    "focus_distance": "string",
    "metering": [
      "string"
    ],
    "max_iso": "string",
    "shutter_speed": "60 - 1/30 sec",
    "modes": [
      "string"
    ],
    "white_balance": [
      "string"
    ],
    "continuous_shooting": "string",
    "connectivity": [
      "Mini USB",
      "Micro HDMI"
    ],
    "storage": [
      "MicroSD"
    ],
    "power": "950mAh Lithium-Ion rechargeable battery",
    "dimensions": {
      "length": "0.059",
      "width": "0.030",
      "height": "0.041"
    }
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model_id|string|false|none|none|
|provider|object|false|none|none|
|» name|string|false|none|none|
|» provider_id|string|false|none|none|
|weight|number|false|none|Weight of camera in kg|
|type|[string]|false|none|none|
|properties|object|false|none|none|
|» sensor_size|string|false|none|none|
|» image_modes|[string]|false|none|none|
|» video_modes|[string]|false|none|none|
|» maximum_clip_length|string|false|none|none|
|» image_file_formats|[string]|false|none|none|
|» video_file_formats|[string]|false|none|none|
|» lens_focal_length|string|false|none|none|
|» lens_focal_length_35mm_equiv|string|false|none|none|
|» optical_zoom|string|false|none|none|
|» digital_zoom|string|false|none|none|
|» aperture|string|false|none|none|
|» image_stabilization|string|false|none|none|
|» auto_focus|string|false|none|none|
|» manual_focus|boolean|false|none|none|
|» af_modes|[string]|false|none|none|
|» af_lock|boolean|false|none|none|
|» af_assist_lamp|boolean|false|none|none|
|» focus_distance|string|false|none|none|
|» metering|[string]|false|none|none|
|» max_iso|string|false|none|none|
|» shutter_speed|string|false|none|none|
|» modes|[string]|false|none|none|
|» white_balance|[string]|false|none|none|
|» continuous_shooting|string|false|none|none|
|» connectivity|[string]|false|none|none|
|» storage|[string]|false|none|none|
|» power|string|false|none|none|
|» dimensions|object|false|none|none|
|»» length|string|true|none|none|
|»» width|string|true|none|none|
|»» height|string|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery">battery</h2>
<!-- backwards compatibility -->
<a id="schemabattery"></a>
<a id="schema_battery"></a>
<a id="tocSbattery"></a>
<a id="tocsbattery"></a>

```json
{
  "name": "BATT-001",
  "model_id": "7e7ed56fed0be0f555f8374e980056cd",
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model_id|string|false|none|Battery model ID|
|notes|string|false|none|none|
|shared|boolean|false|none|none|
|acquired_on|number|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery_data">battery_data</h2>
<!-- backwards compatibility -->
<a id="schemabattery_data"></a>
<a id="schema_battery_data"></a>
<a id="tocSbattery_data"></a>
<a id="tocsbattery_data"></a>

```json
{
  "name": "BATT-001",
  "model": {
    "name": "Multistar 6S 6600",
    "model_id": "7e7ed56fed0be0f555f8374e980056cd"
  },
  "notes": "This battery is meant for small drones only.",
  "shared": false,
  "acquired_on": 1554090304172
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|model|object|false|none|none|
|» name|string|false|none|none|
|» model_id|string|false|none|none|
|notes|string|false|none|none|
|shared|boolean|false|none|none|
|acquired_on|number|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery_provider">battery_provider</h2>
<!-- backwards compatibility -->
<a id="schemabattery_provider"></a>
<a id="schema_battery_provider"></a>
<a id="tocSbattery_provider"></a>
<a id="tocsbattery_provider"></a>

```json
{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "brand": "DJI",
  "country": "China"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|brand|string|false|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery_provider_data">battery_provider_data</h2>
<!-- backwards compatibility -->
<a id="schemabattery_provider_data"></a>
<a id="schema_battery_provider_data"></a>
<a id="tocSbattery_provider_data"></a>
<a id="tocsbattery_provider_data"></a>

```json
{
  "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "brand": "DJI",
  "country": "China"
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|provider_id|string|false|none|none|
|brand|string|false|none|none|
|country|string|false|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery_model">battery_model</h2>
<!-- backwards compatibility -->
<a id="schemabattery_model"></a>
<a id="schema_battery_model"></a>
<a id="tocSbattery_model"></a>
<a id="tocsbattery_model"></a>

```json
{
  "name": "Multistar 6S 6600",
  "provider_id": "7e7ed56fed0be0f555f8374e980056cd",
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of battery model|
|provider_id|string|false|none|Battery provider ID|
|chemistry|string|false|none|none|
|series|string|false|none|none|
|parallel|string|false|none|none|
|capacity|string|false|none|none|
|weight|number|false|none|Weight of battery in kg|
|discharge_rate|string|false|none|none|
|properties|object|false|none|none|
|» dimensions|object|false|none|none|
|»» width|string|true|none|none|
|»» length|string|true|none|none|
|»» height|string|true|none|none|

</section>
</section>

<section>
<h2 id="tocS_battery_model_data">battery_model_data</h2>
<!-- backwards compatibility -->
<a id="schemabattery_model_data"></a>
<a id="schema_battery_model_data"></a>
<a id="tocSbattery_model_data"></a>
<a id="tocsbattery_model_data"></a>

```json
{
  "name": "Multistar 6S 6600",
  "provider": {
    "name": "Da-Jiang Innovations Science and Technology Co., Ltd",
    "provider_id": "7e7ed56fed0be0f555f8374e980056cd"
  },
  "chemistry": "LiPo",
  "series": "6",
  "parallel": "1",
  "capacity": "6600",
  "weight": 0.794,
  "discharge_rate": "",
  "properties": {
    "dimensions": {
      "width": "0.056",
      "length": "0.0145",
      "height": "0.052"
    }
  }
}

```

<section>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of battery model|
|provider|object|false|none|Battery provider ID|
|» name|string|false|none|none|
|» provider_id|string|false|none|none|
|chemistry|string|false|none|none|
|series|string|false|none|none|
|parallel|string|false|none|none|
|capacity|string|false|none|none|
|weight|number|false|none|Weight of battery in kg|
|discharge_rate|string|false|none|none|
|properties|object|false|none|none|
|» dimensions|object|false|none|none|
|»» width|string|true|none|none|
|»» length|string|true|none|none|
|»» height|string|true|none|none|

</section>
</section>

