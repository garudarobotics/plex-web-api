var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function (error) {
  console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
  console.log('WebSocket Client Connected');
  connection.on('error', function (error) {
    console.log("Connection Error: " + error.toString());
  });
  connection.on('close', function () {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log("Received message:\n" + message.utf8Data + "\n");
    }
  });

  function sendTelem(index) {
    if (connection.connected) {
      const telem = mock_telem_array[index];
      console.log(JSON.stringify(telem));
      connection.sendUTF(JSON.stringify(telem));
      if (index < mock_telem_array.length - 1) {
        setTimeout(function() {
          sendTelem(index + 1);
        }, 1000);
      }
    }
  }

  sendTelem(0);
});

// load the sample telem from the file
var mock_telem_array = require('./mock-telem.js');

// connect to the socket and start sending
client.connect('wss://stg.api.garuda.io/telemetry/live/drone/?droneId=<DRONE_ID>&companyId=<COMPANY_ID>&access_token=<ACCESS_TOKEN>', 'echo-protocol');
