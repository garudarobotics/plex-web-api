Every flight requires a valid and approved `flight plan` before your drone can safely take off. There are many factors that need to be taken into account when creating a `flight plan`, including the `plan type`, `requirements`, `commands`, and more. Every `flight plan` must be tagged to an existing `deployment`, and each `flight plan` can be reused as required for multiple `flight sessions`. 

To start, you can create a new flight plan by calling the `/flight/deployments/{deployment_id}/plans` endpoint with the `POST` method. Note that the `deployment_id` parameter in the request URL has to be a valid `deployment_id` belonging to your company. 

You should pass in at minimum the following details in the request body:

| Item          | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| `plan_type`   | String | The type of the flight plan                |
| `description` | String | Description of the flight plan             |
| `plan`        | Object | Object representing the actual flight plan |

The `plan` object has the following properties:

| Property       | Type             | Description                                                                          |
| -------------- | ---------------- | ------------------------------------------------------------------------------------ |
| `requirements` | Object           | Requirements of the flight plan                                                      |
| `commands`     | Array of Objects | Array of command objects that describe the commands to be executed during the flight |

A flight session that is successfully logged to your deployment will return the following response:

```json
{
  "success": true,
  "data": {
    "flight_plan_id": "0c5c21b6a42fadb018a5d1863c312345",
    "deployment_id": "0c5c21b6a42fadb018a5d1863c312345",
    "plan_type": "ardupilot",
    "description": "Best flight plan ever",
    "last_modified_date": "string",
    "last_modified_by": "string",
    "plan": {
      "requirements": {},
      "commands": [
        {
          "id": "22",
          "param1": "15",
          "param2": "16",
          "param3": "17",
          "param4": "18",
          "param5": "19",
          "param6": "20",
          "param7": "21",
          "description": "Take off (location TBD)"
        }
      ]
    }
  }
}
```