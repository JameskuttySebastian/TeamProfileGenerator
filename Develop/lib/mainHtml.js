

// using the function to fill the object values to html structure

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
    
        <title>Team Profile</title>
        <style>
            h3,
            h4,
            p {
                margin: 0px;
                font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            }
    
            .title {
                text-align: center;
                width: 960px;
                margin: 0 auto;
                position: relative;
                padding: 20px;
                background-color: rgb(230, 74, 88);
                color: white;
                font-family: 'Arial', 'Helvetica Neue', Helvetica, sans-serif;
            }
    
            .content {
                width: 960px;
                margin: 0 auto;
                text-align: center;
            }
    
            .outer {
                padding: 50px 30px 5px;
                display: inline-block;
                vertical-align: top;
                width: 200px;
                height: 280px;
            }
    
            .box {
                border-radius: 8px;
                box-shadow: 5px 5px 5px rgb(85, 85, 85);
            }
    
            .heading {
                padding: 10px;
                color: white;
                background-color: #0b98fd;
                text-align: left;
            }
    
            h4 {
                padding: 10px 10px 5px 10px;
            }
    
            .details {
                min-height: 10rem;
                padding: 18px;
                background-color: #f1f1f1;
            }
    
    
            .details p {
                border-top: 1px solid rgb(190, 190, 190);
                border-left: 1px solid rgb(190, 190, 190);
                border-right: 1px solid rgb(190, 190, 190);
                padding: 8px;
                font-size: small;
                overflow-wrap: break-word;
                text-align: left;
            }
    
            .item {
                background-color: white;
            }
    
            .last-item {
                border-bottom: 1px solid rgb(190, 190, 190);
            }
    
            .link {
                color: rgb(51, 51, 255);
            }
        </style>
    </head>
    
    <body>
    
        <div class="title">
            <h2>My Team</h2>
        </div>
        <div class="content">
    
        ${data}
    
        </div>
    
    </body>
    
    </html>`

        
        

}


//exports the class


module.exports = {generateHtml: generateHtml};