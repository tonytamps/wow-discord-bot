const http = require('http')

function init () {
  const requestListener = (req, res) => {
    res.writeHead(404)
    res.end()
  }

  return http.createServer(requestListener)
}

module.exports = { init }