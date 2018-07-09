const API_KEY = process.env.API_KEY

function verifyToken (req, res, next) {
  console.log(req.url)
  if (req.url === '/login') {
    return next()
  }
  if (req.headers['x-secret-token'] && req.headers['x-secret-token'] === API_KEY) {
    return next()
  }
  console.log('UNAUTHORIZED')
  return unauthorizedResponse(res)
}

function unauthorizedResponse (res) {
  return res.status(403).json({
    success: false,
    message: 'Invalid token',
  })
}

module.exports = {
  verifyToken,
}