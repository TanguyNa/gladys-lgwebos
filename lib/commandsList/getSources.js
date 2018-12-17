const Promise = require('bluebird');

module.exports = function getSources(param){
	sails.log.debug('lgwebos.getSources');
	return new Promise(function(resolve, reject) {
		return gladys.param.getValue('LGTV_NAME')
		.then((lgtv_name) => {
				sails.log.debug('lgtv_name :' + lgtv_name);
				var arr=[]
				if((typeof lgtv_name != 'undefined') && lgtv_name != null)
				{
					try{
						var lgtv_name = require("lgtv2")({
							url: 'ws://'+lgtv_name+':3000'
						});
						
						lgtv_name.on('connect', function (err,data) 
						{
							lgtv_name.request('ssap://tv/getExternalInputList', function (err, res) {
								lgtv_name.disconnect();
								if(!err) {
									res.devices.forEach(function(device)  {
										arr.push({label:device.label})
									});
								}
								
								resolve(arr);

							});
						});

						lgtv_name.on('error', function (err) {
							sails.log.error(err);
							reject(arr);
						});
					} catch (e) {
						sails.log.debug('getSources failed');
					}
				} else {
					reject(arr);
				}

		}).catch(function(err){
			sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter')
		});
	})
}
