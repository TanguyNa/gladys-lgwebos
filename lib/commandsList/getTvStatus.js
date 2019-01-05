const Promise = require('bluebird');
var ping = require('ping');
var shelljs = require('shelljs');

module.exports = function getTvStatus(param){
	var hosts = shelljs.exec('arp -a | grep ' + param.macAdress + ' | grep -Eo [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}', {silent:true}).stdout.replace(/\r?\n|\r/g, "")

    return ping.promise.probe(hosts)
 
}