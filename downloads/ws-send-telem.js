var WebSocketClient=require("websocket").client,client=new WebSocketClient;client.on("connectFailed",function(e){console.log("Connect Error: "+e.toString())}),client.on("connect",function(e){function o(n){if(e.connected){const t=mock_telem_array[n];console.log(JSON.stringify(t)),e.sendUTF(JSON.stringify(t)),n<mock_telem_array.length-1&&setTimeout(function(){o(n+1)},1e3)}}console.log("WebSocket Client Connected"),e.on("error",function(e){console.log("Connection Error: "+e.toString())}),e.on("close",function(){console.log("echo-protocol Connection Closed")}),e.on("message",function(e){"utf8"===e.type&&console.log("Received message:\n"+e.utf8Data+"\n")}),o(0)});var mock_telem_array=require("./mock-telem.js");client.connect("wss://stg.api.garuda.io/telemetry/live/drone/?droneId=<DRONE_ID>&companyId=<COMPANY_ID>&access_token=<ACCESS_TOKEN>","echo-protocol");