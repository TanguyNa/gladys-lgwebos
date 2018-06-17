var volumeUp = require('./lib/volumeUp.js');
var volumeDown = require('./lib/volumeDown.js');
var stop = require('./lib/stop.js');
var mediaControl = require('./lib/mediaControl')
var start = require('./lib/start.js');
var command = require('./lib/lgwebos.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
	
module.exports = function(sails) {

	return {
		volumeUp: volumeUp,
		volumeDown: volumeDown,
		stop: stop,
		start: start,
		mediaControl: mediaControl,
		command: command,
		install: install,
		uninstall: uninstall
	};
};
