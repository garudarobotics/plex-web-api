Once you have your flight plan approved, you are ready to fly! 

Each drone flight is represented by a flight session. Each `flight session` must be tagged to a valid and approved `flight plan` and an existing `deployment`. This set of endpoints allow you to manage and log the flight history of your deployments easily.

To create a new `flight session`, use the `/flight/deployments/{deployment_id}/sessions` endpoint with the `POST` method. Note that the `deployment_id` parameter in the request URL has to be a valid `deployment_id` belonging to your company. 

You should pass in at minimum the following details in the request body:

| Item              | Type   | Description                                                                          |
| ----------------- | ------ | ------------------------------------------------------------------------------------ |
| `flight_plan_id`  | String | A valid and approved flight plan ID                                                  |
| `start_date_time` | String | Start time of flight session in epoch (Unix timestamp), converted to milliseconds    |
| `end_date_time`   | String | End time of flight session in epoch (Unix timestamp), converted to milliseconds (ms) |

A flight session that is successfully logged to your deployment will return the following response:

```json
{
  "success": true,
  "data": {
    "flight_session_id": "<FLIGHT_SESSION_ID>",
    "flight_plan_id": "<FLIGHT_PLAN_ID>",
    "deployment_id": "<DEPLOYMENT_ID>",
    "start_date_time": <START_TIME>,
    "end_date_time": <END_TIME>
  }
}
```