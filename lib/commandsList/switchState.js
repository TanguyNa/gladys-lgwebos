var stop = require('./stop.js')
var start = require('./start.js')

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
	if (params.deviceTypeId !== undefined || params.deviceTypeId != 0) {
		gladys.deviceState.create({state:{
			deviceType:params.deviceTypeId,
			value:!!params.state
		}})
	}
}
