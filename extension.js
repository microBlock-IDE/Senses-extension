({
    name: "Senses IoT", // Category Name
    description: "Industrial Internet of Things platform (IIoT)Laser PM2.5 Sensor",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
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
                    <value name="passw">
                        <shadow type="text">
                            <field name="TEXT">--WiFi-Password--</field>
                        </shadow>
                    </value>
                    <value name="uid">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="key">
                        <shadow type="text">
                            <field name="TEXT">--Senses-Key--</field>
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
                <block type="senses_get">
                    <value name="controlport">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <shadow type="text">
                    <field name="TEXT">--WiFi-Password--</field>
                </shadow>
            `
        }
    ]
});
