module.exports = function createLGDevice(){
	var newDevice = {
		device: {
		name: 'Television',
		protocol: 'web',
		service: 'lgwebos',
		identifier: deviceInfo._id
		},
        types: [{
            name: 'Power',
            type: 'binary',
            identifier: 'LGPower',
            tag: 'Power',
            sensor: false,
            min: 0,
            max: 1,
        },
        {
            name: 'Son',
            type: 'Son',
            identifier: 'LGSon',
            tag: 'Son',
            unit: '%',
            sensor: true,
            min: 0,
            max: 100,
        },
        {
            name: 'Mute',
            type: 'Mute',
            identifier: 'LGMute',
            tag: 'Mute',
            sensor: false,
            min: 0,
            max: 1,
        },
        {
            name: 'Channel',
            type: 'Channel',
            identifier: 'LGChannel',
            tag: 'Channel',
            sensor: false,
            min: 0,
            max: 200,
        }]
    };

    return gladys.device.create(newDevice);
}