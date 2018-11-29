const Promise = require('bluebird');

module.exports = function setMute(option){
	sails.log.debug('lgwebos.setMute');
	return gladys.param.getValue('LGTV_NAME')
	.then((lgtv_name) => {
		
		sails.log.debug('lgtv_name :' + lgtv_name);
		if((typeof lgtv_name != 'undefined') && lgtv_name != null)
		{
			try{
				var lgtv_name = require("lgtv2")({
					url: 'ws://'+lgtv_name+':3000'
				});
					
				lgtv_name.on('connect', function () 
				{
					console.log(lgtv_name)
					lgtv_name.request('ssap://system.notifications/createToast', {'message': option.message}, function (err, res) {
						lgtv_name.disconnect();
					});
				});

				lgtv_name.on('error', function (err) {
					sails.log.error(err);
					reject(err);
				});
			} catch (e) {
				sails.log.debug('setMute failed');
				reject(e);
			}
		}
		

	})
	.catch(function(err){
		sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter');
		reject(err);
	});

}
