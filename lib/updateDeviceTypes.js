const Promise = require('bluebird');
var ping = require('ping');
var shelljs = require('shelljs');
        
module.exports = function updateDeviceType(param){

    shelljs.exec('arp -a | grep ' + param.macAdress + ' | grep -Eo [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', function(code, stdout, stderr) {
        var hosts = [stdout.replace(/\r?\n|\r/g, "")];
        hosts.forEach(function(host){
            ping.sys.probe(host, function(isAlive){
                gladys.utils.sql( 
                    'SELECT id FROM devicetype dt INNER JOIN device d on dt.device=d.id WHERE dt.identifier = ? and d.service= ?  ;', 
                    [ 'Power', 'lgwebos' ]
                )
                .then((row) => {
                    if(row[0] !== undefined) {
                        gladys.deviceState.create( { 'value' : isAlive , 'devicetype' : row[0].id })
                    }
                })
                return isAlive;
            });
        });

    });
};
