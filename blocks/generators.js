Blockly.Python['senses_config'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_passw = Blockly.Python.valueToCode(block, 'passw', Blockly.Python.ORDER_ATOMIC);
  var value_uid = Blockly.Python.valueToCode(block, 'uid', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);

  var code = `senses.config(${value_ssid}, ${value_passw}, ${value_uid}, ${value_key})\n`;
  return code;
};

Blockly.Python['senses_send'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_slot = Blockly.Python.valueToCode(block, 'slot', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = `senses.send(${value_slot}, ${value_data})\n`;
  return code;
};

Blockly.Python['senses_get'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_controlport = Blockly.Python.valueToCode(block, 'controlport', Blockly.Python.ORDER_ATOMIC);

  var code = `senses.getDigitalControl(${value_controlport})`;
  return [code, Blockly.Python.ORDER_NONE];
};
