![Garuda Plex Logo](../img/garuda-plex-logo.png)
# Introduction
It's assumed that you have subscribed to our Garuda Plex Enterprise License, and have received your API Key.

If you have not, [please contact us](mailto:hello@garuda.io)

## Registering your drone & Pilot
1. Create drone

1. Drone will be created in Plex, and SSH Key will be given.


Optional:
1. Create Provider
2. Create Drone Model

## Planning your flight
1. User need to create Flight Plan in Plex
(DroneJSON) will come to picture, provide API 
1. Create Deployment
2. Create Flight Plan

## Fly your drone

### Connecting Drone
1. Drone On-Board Computer, create hash on serial number
2. Connect to Telemetry Websocket (on connect, send an encrypted serial number with serial number, based on JWT)
3. Connect to Telemetry Command (on connect, send an encrypted serial number with serial number, based on JWT)


=> Additional command parameter, download flight plan

1. Pilot login via OpenID Connect protocol
2. Pilot choose online Drones (previous connected drones) (API using Access-Token + API Key)
3. Pilot select Flight Plan (API using Access-Token + API Key) 

(information on 1, 2 and 3, is then send for Flight Approval) => OTP should be generated

## Upload your flight logs
1. Upload flight logs using OTP Provided

To view full specification:
1. [Airspace API](https://garudarobotics.github.io/plex-web-api/airspace)
    API to retrieve airspace information
2. [Command and Control API](https://garudarobotics.github.io/plex-web-api/command-control)
    Full list of command that is supported by System
