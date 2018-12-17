const Promise = require('bluebird');
var sentences = require('./sentences.js');
var createLGDevice = require('./install/createLGDevice')
var createGladysSentences = require('./install/createGladysSentences')

module.exports = function install(){

	return createGladysSentences(sentences)
	.then(() => {
		return createLGDevice();
	})
	.catch((err) => {
		Promise.reject(err);
	})
	

};
