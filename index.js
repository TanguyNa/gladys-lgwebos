var commandsList = require('./lib/commandsList/commandsList')
var command = require('./lib/lgwebos.command.js');
var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var exec = require('./lib/exec');
var updateDeviceTypes = require('./lib/updateDeviceTypes')

gladys.on('ready', function() {
	gladys.param.getValue('LGTV_MAC_ADRESS')
    .then((macAdress) => {
	    updateDeviceTypes({'macAdress':macAdress})
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
				updateDeviceTypes({'macAdress':macAdress})
				gladys.utils.sqlUnique( 
                    'SELECT ds.value FROM devicetype dt INNER JOIN devicestate ds ON dt.id=ds.devicetype WHERE dt.identifier = ? ORDER BY ds.createdAt DESC LIMIT 1 ;', 
                    [ 'LGPower' ]
                )
                .then((row) => {
					if(row.value === 1) 
					{
						commandsList.getAudioStatus()
					}
				})
			}, interval*60000)
	    })
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
