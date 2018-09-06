const Promise = require('bluebird');
const key = ['ok']

module.exports = function pressKey(param){
	sails.log.debug('lgwebos.sendEnterKey');
	sails.log.debug(param)
	return gladys.param.getValue('LGTV_NAME')
        .then((lgtv_name) => {
        	sails.log.debug(param.key.indexOf(param.key))
        	if(key.indexOf(param.key)>=0) 
        	{
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
							lgtv_name.request('ssap://com.webos.service.ime/sendEnterKey', function (err, res) {
								console.log(res)
								lgtv_name.disconnect();
							});
						});
					} catch (e) {
						sails.log.debug('sendEnterKey failed');
					}
				}
			}
				

		}).catch(function(err){sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter')});

}
