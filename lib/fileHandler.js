const fs = require('fs');

function FileHandler(){
    this.dirPath = './server-logs'
    this.serverLog = `${this.dirPath}/server.log`
}

FileHandler.prototype.createDirs = function(){
    if(!fs.existsSync(this.dirPath)){
        fs.mkdirSync(this.dirPath);
    }
}


FileHandler.prototype.createFiles = function(){
    if(!fs.existsSync(this.serverLog)){
        fs.writeFileSync(this.serverLog, '');
    }
}

FileHandler.prototype.writeToFile = function(type, message){
    this.createDirs();
    this.createFiles();
    let date = new Date().toLocaleString();
    let formattedMessage = `Date: ${date} - Method: ${message.method} - Url: ${message.url} - User-Agent: ${message.headers} ${typeof message.content !== undefined ? `- Content-Length: ${message.content}` : ''} - Response-Time: ${message.response}ms \n`;
    fs.appendFileSync(this.serverLog, formattedMessage)
}

module.exports = new FileHandler();