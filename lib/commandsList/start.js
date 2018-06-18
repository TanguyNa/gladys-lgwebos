const Promise = require('bluebird');
var exec = require('child_process').exec;

module.exports = function start(){
	sails.log.debug('lgwebos.start');
	return gladys.param.getValue('LGTV_MAC_ADRESS')
        .then((lgtv_mac) => {
			
			sails.log.debug('lgtv_mac :' + lgtv_mac);
			if((typeof lgtv_mac != 'undefined') && lgtv_mac != null)
			{
				for (pas = 0; pas < 5; pas++) {
					exec('wakeonlan ' + lgtv_mac);
				}
			}

		}).catch(function(err){sails.log.debug('Error lgtv_mac : ' + lgtv_mac + ' parameter')});

}


