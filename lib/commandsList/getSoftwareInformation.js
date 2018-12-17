const Promise = require('bluebird');

module.exports = function getSoftwareInformation(param){
	sails.log.debug('lgwebos.getSoftwareInformation');
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
					lgtv_name.request('ssap://com.webos.service.update/getCurrentSWInformation', function (err, res) {
						console.log(res)
						lgtv_name.disconnect();
					});
				});

				lgtv_name.on('error', function (err) {
					sails.log.error(err);
					reject(err);
				});
			} catch (e) {
				sails.log.debug('getSoftwareInformation failed');
				reject(e);
			}
		}				

	})
	.catch(function(err){
		sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter');
		reject(err);
	});

}
