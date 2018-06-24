var commandsList = require('./lib/commandsList/commandsList')
var command = require('./lib/lgwebos.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var exec = require('./lib/exec');
var updateDeviceType = require('./lib/updateDeviceType')

gladys.on('ready', function() {
		gladys.param.getValue('LGWEBOS_INTERVAL_UPDATE')
	    .then((intervalUser) => {
	        return intervalUser;
	    })
	    .catch(() => {
	        return 30;
	    })
	    .then((interval) => {
			setInterval(function () {
				sails.log.info('Update LG WEBOS data !')
				commandsList.getAudioStatus
				updateDeviceType
			}, interval*60000)
	    })
	})

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
