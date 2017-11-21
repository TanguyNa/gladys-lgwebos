const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

//	gladys.user.get().then(function(user){
//		if(user[0].language!='fr-FR')
//Undefined au démarrage de gladys.

//on prends la langue du 1er admin
	gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
				return gladys.sentence.create(sentences.sentenceTvOffEn) && gladys.sentence.create(sentences.sentenceTvOnEn)&& gladys.sentence.create(sentences.sentenceTvUpEn) && gladys.sentence.create(sentences.sentenceTvDownEn);
			else return gladys.sentence.create(sentences.sentenceTvOffFr) && gladys.sentence.create(sentences.sentenceTvOnFr)&& gladys.sentence.create(sentences.sentenceTvUpFr) && gladys.sentence.create(sentences.sentenceTvDownFr);
	});
	
};
