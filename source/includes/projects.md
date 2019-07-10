## Projects

All activities on Garuda Plex start with a `project` being specified. It’s a unit of engagement for the Drone Operator and the Customer, whoever it may be. Real world `projects` include, a flight test project, a mapping project, a 3D modelling project, an infrastructure inspection project, or an elaborate flight demonstration project.

The Customer, or its agent (such as the Sales Person or the Project Manager), is responsible to create a `project`. If you’re writing workflow applications, you can collect the requirements in your application and create a `project` programmatically through the API, and the Drone Operator would be able to plan `deployment` and `flights` using Garuda Plex web front-end. You can connect Garuda Plex to your billing or invoicing infrastructure to receive a status update about the completion of the `project`.

On the other hand, if you are working to extend the operational workflow or flight capabilities for the Drone Operator, you can read the requirements from the planned `project`, and make sure that you carry it out according to requirements, and update the `project` as work is completed.

A `project` has the following properties:

| Property      | Type   | Description                                                                   |
| ------------- | ------ | ----------------------------------------------------------------------------- |
| `_id`         | String | The unique ID of the project (use this for updating and deleting the project) |
| `title`       | String | Title of the project                                                          |
| `project_id`  | String | Unique URL-friendly ID (Slug) of the project                                  |
| `company_id`  | String | Company ID of the project                                                     |
| `date`        | String | Start date of the project                                                     |
| `objective`   | String | Objective of the project                                                      |
| `description` | String | Description of the project                                                    |
| `location`    | String | Name of the location of the project                                           |

### Get all projects

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/projects',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/projects', params={

}, headers = headers)

print r.json()

```

```shell
curl -X GET 'https://api.garuda.io/v2/projects' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/projects',
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
  "data": [
    {
      "_id": "2b6d1671011c488c6583f07824fbf2c1",
      "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
      "title": "PROJECT-001",
      "date": 1562559123000,
      "project_id": "project-1",
      "public": {
        "id": "project-1"
      },
      "last_update": {
        "user_id": "3b20c067ab91da9436ddaea6b83a9536",
        "name": "USER-001",
        "time": 1562560345456
      }
    }
  ]
}
```

`GET /projects`

Get all the projects belonging to your company. This endpoint returns you all the projects that have been created under you company.

The response body for this endpoint will contain an array of all the `project` objects.

<div></div>

### Create new project

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://api.garuda.io/v2/projects',
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

r = requests.post('https://api.garuda.io/v2/projects', params={

}, headers = headers)

print r.json()

```

```shell
curl -X POST 'https://api.garuda.io/v2/projects' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
      "title": "PROJECT-001",
      "date": 1562559123000
     }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "title": "PROJECT-001",
  "date": 1562559123000
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/projects',
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
    "_id": "2b6d1671011c488c6583f07824fbf2c1",
    "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
    "title": "PROJECT-001",
    "date": 1562559123000,
    "project_id": "project-1",
    "public": {
      "id": "project-1"
    },
    "last_update": {
      "user_id": "3b20c067ab91da9436ddaea6b83a9536",
      "name": "USER-001",
      "time": 1562560345456
    }
  }
}
```

`POST /projects`

This endpoint allows you to create a new `project` under your company.

You should pass in at minimum the following details in the request body:

| Item    | Type   | Description                                     |
| ------- | ------ | ----------------------------------------------- |
| `title` | String | A valid deployment ID belonging to your company |
| `date`  | Number | A valid and approved flight plan ID             |

To further flesh out the details of a `project`, you can pass in the following properties as well:

| Item          | Type   | Description                                        |
| ------------- | ------ | -------------------------------------------------- |
| `objective`   | String | Short description of the objectives of the project |
| `description` | String | Description of the project                         |
| `location`    | String | Location of the project                            |

<div></div>

### Get a project

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'https://api.garuda.io/v2/projects/{project_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.garuda.io/v2/projects/{project_id}', params={

}, headers = headers)

print r.json()

```


```shell
curl -X GET 'https://api.garuda.io/v2/projects/{project_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/projects/{project_id}',
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
    "_id": "2b6d1671011c488c6583f07824fbf2c1",
    "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
    "title": "PROJECT-001",
    "date": 1562559123000,
    "project_id": "project-1",
    "public": {
      "id": "project-1"
    },
    "last_update": {
      "user_id": "3b20c067ab91da9436ddaea6b83a9536",
      "name": "USER-001",
      "time": 1562560345456
    }
  }
}
```
`GET /projects/{project_id}`

Get a specific project belonging to the company of the user.

### Update a project

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch 'https://api.garuda.io/v2/projects/{project_id}',
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

r = requests.patch('https://api.garuda.io/v2/projects/{project_id}', params={

}, headers = headers)

print r.json()

```

```shell
curl -X PATCH 'https://api.garuda.io/v2/projects/{project_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
     -d '{
       "title": "PROJECT-001-A"
     }'
```

```javascript
const fetch = require('node-fetch');
const inputBody = '{
  "title": "PROJECT-001-A"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/projects/{project_id}',
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
  "success": true,
  "data": {
    "_id": "2b6d1671011c488c6583f07824fbf2c1",
    "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
    "title": "PROJECT-001-A",
    "date": 1562559123000,
    "project_id": "project-1",
    "public": {
      "id": "project-1"
    },
    "last_update": {
      "user_id": "3b20c067ab91da9436ddaea6b83a9536",
      "name": "USER-001",
      "time": 1562560345456
    }
  }
}
```

`PATCH /projects/{project_id}`

Update a specific project belonging to the company of the user.

To update a project, you can pass in any subset of the properties of the project in the request body. All properties are optional.

| Property      | Type   | Description                                        |
| ------------- | ------ | -------------------------------------------------- |
| `title`       | String | Title of the project                               |
| `date`        | String | Starting date of the project                       |
| `objective`   | String | Short description of the objectives of the project |
| `description` | String | Description of the project                         |
| `location`    | String | Location of the project                            |

A project that has been successfully updated will return a response with a `"success": true` body and a `200 OK` status.

<div></div>

### Delete a project

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'https://api.garuda.io/v2/projects/{project_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.garuda.io/v2/projects/{project_id}', params={

}, headers = headers)

print r.json()

```

```shell
curl -X DELETE 'https://api.garuda.io/v2/projects/{project_id}' \
     -H 'Authorization: Bearer <AUTH_TOKEN>' \
     -H 'X-API-Key: <API_KEY>' \
```

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('https://api.garuda.io/v2/projects/{project_id}',
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
  "success": true,
  "data": {
    "_id": "2b6d1671011c488c6583f07824fbf2c1",
    "company_id": "ca42ab884a633d6a823b45e6ebe9534c",
    "title": "PROJECT-001-A",
    "date": 1562559123000,
    "project_id": "project-1",
    "public": {
      "id": "project-1"
    },
    "last_update": {
      "user_id": "3b20c067ab91da9436ddaea6b83a9536",
      "name": "USER-001",
      "time": 1562560345456
    },
    "deleted": true
  }
}
```

`DELETE /projects/{project_id}`

Delete a specific project belonging to the company of the user.

A successful deletion will return a `200 OK` status and the deleted project object in the response body.

<div></div>

