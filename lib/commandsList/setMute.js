const Promise = require('bluebird');

module.exports = function setMute(params){
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
					lgtv_name.request('ssap://system.notifications/createToast', {message: 'Gladys est connectée!'});
					lgtv_name.request('ssap://audio/setMute', {'mute': params.state}, function (err, res) {
						lgtv_name.disconnect();
					});

					if (params.deviceTypeId !== undefined || params.deviceTypeId != 0) {
						gladys.deviceState.create({
							deviceType:params.deviceTypeId,
							value:params.state
						})
					}
					Promise.resolve('success');
				});

				lgtv_name.on('error', function (err) {
					sails.log.error(err);
					Promise.reject(err);
				});
			} catch (e) {
				sails.log.debug('setMute failed');
				Promise.reject(e);
			}
		}
		

	})
	.catch(function(err){
		sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter');
		reject(err);
	});

}
