const fileHandler = require('./lib/fileHandler');
const consoleOutput = require('./lib/consoleOutput');

function redJay(){}

redJay.prototype.prod = function(req, res, next){
    var start = new Date().getTime();
    var end;
    res.on('finish', () => { 
        end = new Date().getTime();
        const REQUEST = {
            response: (end - start),
            content: req.headers['content-length'],
            headers: req.headers['user-agent'],
            url: req.url,
            method: req.method
        }
        fileHandler.writeToFile('info', REQUEST);     
    });   
    next(); 
}

redJay.prototype.dev = function(req, res, next){
    var start = new Date().getTime();
    var end;
    res.on('finish', () => { 
        end = new Date().getTime();
        const REQUEST = {
            response: (end - start),
            content: req.headers['content-length'],
            headers: req.headers['user-agent'],
            url: req.url,
            method: req.method
        }
        fileHandler.writeToFile('info', REQUEST);
        consoleOutput(REQUEST);      
    });
    next();
}

module.exports = new redJay();