const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function uninstall(){

	//gladys.user.get().then(function(user){
	//	if(user[0].language!='fr-FR')
	//On pourrait réutiliser le user mais ne serait pas cohérent avec l'install

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?,?,?)', [sentences.sentenceTvOffEn.uuid, sentences.sentenceTvOnEn.uuid, sentences.sentenceTvUpEn.uuid, sentences.sentenceTvDownEn.uuid]);
		else return gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?,?,?)', [sentences.sentenceTvOffFr.uuid, sentences.sentenceTvOnFr.uuid, sentences.sentenceTvUpFr.uuid, sentences.sentenceTvDownFr.uuid]);
	});
    
};
