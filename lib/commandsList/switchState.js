const stop = require('./stop.js')
const start = require('./start.js')

module.exports = function switchState(params){
	switch(!!params.state) {
		case true :
            start()
			break;
		case false :
            stop()
			break;
		default:
			console.log('error durring switch !')
	}
}
