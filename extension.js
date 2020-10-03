({
    name: "Senses IoT", // Category Name
    description: "Industrial Internet of Things platform (IIoT)Laser PM2.5 Sensor",
    author: "IOXhop.com",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="sds011_read">
                    <field name="pin">32</field>
                    <field name="type">0</field>
                </block>
            `
        }
    ]
});
