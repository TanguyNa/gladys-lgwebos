const Promise = require('bluebird');

module.exports = function volumeDown(params){
	sails.log.debug('lgwebos.volumeDown');
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
					console.log('connected to : ' + lgtv_name);
					lgtv_name.request('ssap://system.notifications/createToast', {message: 'Gladys est connectée!'});
					lgtv_name.request('ssap://audio/volumeDown', {volume: 10}, function (err, res) {
						lgtv_name.disconnect();
					});

					if (params.deviceTypeId !== undefined || params.deviceTypeId != 0) {
						lgtv_name.request('ssap://audio/getStatus', function (err, res) {
							if(res.scenario === 'mastervolume_tv_speaker') 
							{
								var state = {
									value: params.state,
									devicetype: params.deviceTypeId
								}
								gladys.deviceState.create(state)
							}
						})
					}
				});

				lgtv_name.on('error', function (err) {
					sails.log.error(err);
					reject(err);
				});
			} catch (e) {
				sails.log.debug('volumeUp failed');
				reject(e);
			}
		}
		

	})
	.catch(function(err){
		sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter');
		reject(err);
	});

}
