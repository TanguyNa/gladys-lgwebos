var ping = require('ping');
var shelljs = require('shelljs');
        
module.exports = function updateDeviceType(param){

    shelljs.exec('arp -a | grep ' + param.macAdress + ' | grep -Eo [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', function(code, stdout, stderr) {
        var hosts = [stdout.replace(/\r?\n|\r/g, "")];
        hosts.forEach(function(host){
            ping.sys.probe(host, function(isAlive){
                gladys.utils.sql( 
                    'SELECT id FROM devicetype WHERE identifier = ?', 
                    [ 'Power' ]
                )
                .then((row) => {
                    gladys.deviceState.create( { 'value' : isAlive , 'devicetype' : row[0].id })
                })
                return isAlive;
            });
        });

    });
};
