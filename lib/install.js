const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

//	gladys.user.get().then(function(user){
//		if(user[0].language!='fr-FR')
//Undefined au démarrage de gladys.

//on prends la langue du 1er admin
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.sentence.insertBatch([sentences.sentenceTvOffEn, sentences.sentenceTvOnEn, sentences.sentenceTvUpEn, sentences.sentenceTvDownEn]);
		else return gladys.sentence.insertBatch([sentences.sentenceTvOffFr, sentences.sentenceTvOnFr, sentences.sentenceTvUpFr, sentences.sentenceTvDownFr]);
	});
	
};
