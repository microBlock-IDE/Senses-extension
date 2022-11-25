Blockly.Python['senses_config'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
  var value_passw = Blockly.Python.valueToCode(block, 'passw', Blockly.Python.ORDER_ATOMIC);
  var value_uid = Blockly.Python.valueToCode(block, 'uid', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);

  var code = `senses.connect(${value_ssid}, ${value_passw || "None"}, ${value_uid}, ${value_key})\n`;
  return code;
};

Blockly.Python['senses_timer'] = function(block) {
  console.log(block);

  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_tick_sec = Blockly.Python.valueToCode(block, 'tick_sec', Blockly.Python.ORDER_ATOMIC);
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');

  var functionName = Blockly.Python.provideFunction_(
    `timer${value_tick_sec}_cb`,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, msg):',
    statements_callback]);

  var code = `senses.add_timer_handle(${value_tick_sec} * 1000, ${functionName})\n`;
  return code;
};

Blockly.Python['senses_send'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_slot = Blockly.Python.valueToCode(block, 'slot', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = `senses.send(${value_slot}, ${value_data})\n`;
  return code;
};

Blockly.Python['senses_on_received'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var value_slot = Blockly.Python.valueToCode(block, 'slot', Blockly.Python.ORDER_ATOMIC);
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');

  var functionName = Blockly.Python.provideFunction_(
    `slot${value_slot}_cb`,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, msg):',
    statements_callback]);

  var code = `senses.add_slot_handle(${value_slot}, ${functionName})\n`;
  return code;
};

Blockly.Python['senses_get_received_as_number'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var code = `int(senses.last_slot_msg)`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['senses_received_is_on'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var code = `(senses.last_slot_msg == "on")`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['senses_run'] = function(block) {
  Blockly.Python.definitions_['import_senses'] = 'import senses';

  var code = `senses.run()`;
  return code;
};
