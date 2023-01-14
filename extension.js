({
    name: "Senses IoT", // Category Name
    description: "Industrial Internet of Things platform (IIoT)",
    author: "microBlock",
    category: "Communication",
    version: "2.1.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="senses_config">
                    <value name="ssid">
                        <shadow type="text">
                            <field name="TEXT">--WiFi-Name--</field>
                        </shadow>
                    </value>
                    <value name="uid">
                        <shadow type="text">
                            <field name="TEXT">--UID--</field>
                        </shadow>
                    </value>
                    <value name="key">
                        <shadow type="text">
                            <field name="TEXT">--Device-Key--</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="senses_timer">
                    <value name="tick_sec">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="senses_send">
                    <value name="slot">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="data">
                        <shadow type="math_number">
                            <field name="NUM">10</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="senses_on_received">
                    <value name="slot">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "senses_get_received_as_number",
        "senses_received_is_on",
        "senses_run",
        {
            xml: `
                <block type="text">
                    <field name="TEXT">--WiFi-Password--</field>
                </block>
            `
        }
    ],
    chip: [
        "ESP32", // Chip support
        "RP2-WiFi"
    ]
});
