Blockly.defineBlocksWithJsonArray([
{
  "type": "senses_config",
  "message0": "Senses IoT config %1 WiFi Name: %2 WiFi Password: %3 UID: %4 Device Key: %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "ssid",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "passw",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "uid",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_timer",
  "message0": "Senses IoT do every %1 seconds %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "tick_sec",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Block of send sensor value code",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_send",
  "message0": "Senses IoT send slot: %1 data: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "slot",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "data",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Send data to Senses IoT",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_on_received",
  "message0": "Senses IoT on control slot %1 received %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "slot",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Callback do on received control value from Senses IoT",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_get_received_as_number",
  "message0": "get received as number",
  "output": "Number",
  "colour": "#3498DB",
  "tooltip": "Get received control value as number (Control Type: Volume)",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_received_is_on",
  "message0": "received is ON ?",
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": "#3498DB",
  "tooltip": "Get received control value as ON of OFF (Control Type: Toggle)",
  "helpUrl": "https://www.sensesiot.com/"
},
{
  "type": "senses_run",
  "message0": "Senses IoT run",
  "previousStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": "https://www.sensesiot.com/"
},
]);
