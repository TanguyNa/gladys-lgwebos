var commandsList = require('./lib/commandsList')
var command = require('./lib/lgwebos.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var exec = require('./lib/exec');

module.exports = function(sails) {

	return {
		volumeUp: commandsList.volumeUp,
		volumeDown: commandsList.volumeDown,
		stop: commandsList.stop,
		start: commandsList.start,
		mediaControl: commandsList.mediaControl,
		setMute: commandsList.setMute,
		getAudioStatus: commandsList.getAudioStatus,
		launchApp: commandsList.launchApp,
		getAppStatus: commandsList.getAppStatus,
		notification: commandsList.notification,
		openChannel: commandsList.openChannel,
		getServiceList: commandsList.getServiceList,
		getSoftwareInformation: commandsList.getSoftwareInformation,
		command: command,
		install: install,
		exec: exec,
		uninstall: uninstall
	};
};
