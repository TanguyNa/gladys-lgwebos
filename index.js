var volumeUp = require('./lib/volumeUp.js');
var volumeDown = require('./lib/volumeDown.js');
var stop = require('./lib/stop.js');
var start = require('./lib/start.js');
var command = require('./lib/lgwebos.command.js');
	
module.exports = function(sails) {

	return {
		volumeUp: volumeUp,
		volumeDown: volumeDown,
		stop: stop,
		start: start,
		command: command
	};
};
