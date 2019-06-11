<!-- https://markdowntohtml.com/ -->
<!-- https://www.textfixer.com/tools/remove-line-breaks.php -->

Every time pilots are activated to fly drones, it is known as a `deployment`. A `deployment` is part of larger `project`, typically spans at least 1 flight session (or maybe a few minutes to a few hours), or multiple flight sessions. For each `deployment`, a leader, known as the `deployment lead` will plan the deployment for success, enlisting `pilots`, `drones`, and other equipment necessary. Proper `risk management` is required for every deployment, as are `permits` by the relevant authority (such as an Activity Permit by CAAS). Insurance coverage might also be purchased on a `deployment` basis instead of annual basis.

To start working with deployments, we first have to create a deployment. Call the `/flights/deployment` endpoint with the `POST` method to create a new deployment. At minimum, you should pass in the following details in the request body:

| Item                 | Type   | Description                                                                        |
| -------------------- | ------ | ---------------------------------------------------------------------------------- |
| `name`               | String | Name of the deployment                                                             |
| `drones`             | Array  | Array of drone IDs to be used for the deployment                                   |
| `deployment_lead_id` | String | User ID of the deployment lead                                                     |
| `start_date`         | String | Start date of deployment in epoch (Unix timestamp), converted to milliseconds (ms) |
| `end_date`           | String | End date of deployment in epoch (Unix timestamp), converted to milliseconds (ms)   |
| `deployment_area`    | String | GeoJSON string representation of the deployment area                               |

Note that the drone IDs and user IDs have to be valid. Refer to the [Fleet API](#) for information on how you can create users and drones for your company.

There are some additional details that you can add to the request body to flesh out your deployment details even further:

| Item        | Type   | Description                                                   |
| ----------- | ------ | ------------------------------------------------------------- |
| `batteries` | Array  | Array of battery IDs to be used for the deployment            |
| `cameras`   | Array  | Array of camera IDs to be used for the deployment             |
| `personnel` | Array  | Array of user IDs of the personnel involved in the deployment |
| `purpose`   | String | Description of the purpose of deployment                      |

A deployment that has been successfully created will return a response with a `"success": true` body and a `200 OK` status. For more detailed response format, refer to the endpoint `POST /flight/deployments`.

Once you have successfully created your deployment, you are ready to draw up a flight plan.