const middleware = {}

middleware['logged-in'] = require('../middleware/logged-in.js')
middleware['logged-in'] = middleware['logged-in'].default || middleware['logged-in']

export default middleware
