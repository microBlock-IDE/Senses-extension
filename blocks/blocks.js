Blockly.defineBlocksWithJsonArray([
{
  "type": "senses_config",
  "message0": "Senses IoT config %1 WiFi Name: %2 WiFi Password: %3 User ID: %4 Key: %5",
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
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Config and connect to WiFi",
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
  "type": "senses_send",
  "message0": "Senses IoT get digital control port: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "controlport",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#3498DB",
  "tooltip": "Get data to Senses IoT",
  "helpUrl": "https://www.sensesiot.com/"
}
]);
