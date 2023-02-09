const express = require('express')
var fs = require('fs')
var https = require('https')
const app = express()


//同步读取密钥和签名证书
var options = {
  key: fs.readFileSync('./ssl/wispw.com.key'),
  cert: fs.readFileSync('./ssl/wispw.com_bundle.crt')
}

app.use(express.static('./build'))


var httpsServer = https.createServer(options, app);

httpsServer.listen(8090, () => {
  console.log('httpsServer server is running')
})