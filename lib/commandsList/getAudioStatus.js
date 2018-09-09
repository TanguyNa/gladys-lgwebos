const Promise = require('bluebird');

module.exports = function getAudioStatus(param){
	sails.log.debug('lgwebos.getAudioStatus');
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
							lgtv_name.request('ssap://audio/getStatus', function (err, res) {
								if(res.scenario === 'mastervolume_tv_speaker') 
								{
									gladys.utils.sql( 
										'SELECT id FROM devicetype WHERE identifier = ?', 
										[ 'Sound' ]
									)
									.then((row) => {
										gladys.deviceState.create( { 'value' : res.volume , 'devicetype' : row[0].id })
									})
								}
								lgtv_name.disconnect();
							});
						});
					} catch (e) {
						sails.log.debug('getAudioStatus failed');
					}
				}
		}).catch(function(err){sails.log.debug('Error LGTV_NAME : ' + LGTV_NAME + ' parameter')});

}
