const Promise = require('bluebird');

module.exports = function getAppStatus(param){
	sails.log.debug('lgwebos.getAppStatus');
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
						lgtv_name.request('ssap://com.webos.service.appstatus/getAppStatus', function (err, res) {
							console.log(res)
							lgtv_name.disconnect();
						});
					});
				} catch (e) {
					sails.log.debug('getAppStatus failed');
				}
			}
			

			}).catch(function(err){sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter')});

}
