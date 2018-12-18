const Promise = require('bluebird');

module.exports = function openChannel(param){
	sails.log.debug('lgwebos.openChannel');
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
						lgtv_name.request('ssap://tv/openChannel', {'channelNumber' : param.channel.toString()}, function (err, res) {
							console.log(res)
							lgtv_name.disconnect();
						});

						if (param.deviceTypeId !== undefined || param.deviceTypeId != 0) {
							gladys.deviceState.create({
								deviceType:param.deviceTypeId,
								value:param.channel
							})
						}
					});

					lgtv_name.on('error', function (err) {
						sails.log.error(err);
						reject(err);
					});
				} catch (e) {
					sails.log.debug('openChannel failed');
					reject(e);
				}
			}				

	})
	.catch(function(err){
		sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter');
		reject(err);
	});

}
