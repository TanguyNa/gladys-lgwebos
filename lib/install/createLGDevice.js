module.exports = function createLGDevice(){

    var promises = [
        gladys.param.getValue('LGTV_MAC_ADRESS')
    ];
    
    return Promise.all(promises)
    .then ((array) => {

        var newDevice = {
            device: {
            name: 'Television',
            protocol: 'web',
            service: 'lgwebos',
            identifier: array[0]
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
                type: 'binary',
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

    });
}