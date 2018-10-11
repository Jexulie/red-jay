## Red-Jay

Tiny Customized Server Logger

### Usage
---
```bash
    npm i red-jay
```
then
```javascript
    var redjay = require('red-jay');

    // etc...

    app.use(redjay.prod); 
    // or
    app.use(redjay.dev);
```
### What it Logs
---
* Response Time
* Content-Length
* User-Agent
* Url
* Method

### Options
---
dev -> outputs to console only
prod -> outputs to a log file as well

### Licence
[MIT](https://github.com/Jexulie/red-jay/blob/master/LICENCE)