var fs = require('fs'),
    path = require('path')
    express = require('express'),
    zip = require('express-easy-zip');

// write html file
fs.writeFile('sample/src/app/app.component.html', 
    `<div class="col-md-12 sidebarSection">
        <div id="appContainer">
            <div id="appContent" frameborder="0" tabindex="1" (dragover) = "dragover($event)"  (drop) = "drop($event)">
                <div id="iframe" ><button ej-button>Button</button></div>
            </div>
        </div>
    </div>`
);

// zip and download sample folder
var app = express();
app.use(zip());
app.use('/', function (req, res) {    
    res.zip({
        files: [
            { path: path.join(__dirname, './sample'), name: 'app' },
            { path: path.join(__dirname, './readme.txt'), name: 'readme.txt' }
        ],
        filename: 'sample.zip'
    });
});
app.listen(4000, () => 'http://localhost:4000 listening');