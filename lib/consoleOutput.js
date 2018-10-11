const chalk = require('chalk');

function ConsoleWriter(message){
    let date = new Date().toLocaleString();
    let formattedMessage = `Date: ${chalk.blue(date)} - Method: ${chalk.green(message.method)} - Url: ${chalk.red(message.url)} - User-Agent: ${chalk.yellow(message.headers)} ${typeof message.content !== undefined ? `- Content-Length: ${chalk.cyan(message.content)}` : ''} - Response-Time: ${chalk.magenta(message.response)}ms`
    console.log(formattedMessage)
}


module.exports = ConsoleWriter;