const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>AWS CI/CD Project</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
                color: white;
                text-align: center;
            }
            .container {
                margin-top: 100px;
            }
            h1 {
                font-size: 45px;
            }
            p {
                font-size: 20px;
                margin: 10px 0;
            }
            .tag {
                margin-top: 20px;
                padding: 10px 20px;
                border: 1px solid white;
                display: inline-block;
                border-radius: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 AWS CI/CD Project</h1>
            <p>Deployed using Node.js + Express</p>
            <p>Next: EC2 Deployment & Automation</p>
            <div class="tag">Cloud | DevOps | AWS</div>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});