const Promise = require('bluebird');
var sentences = require('./sentences.js');
var createLGDevice = require('./install/createLGDevice')
var createGladysSentences = require('./install/createGladysSentences')

module.exports = function install(){

	createGladysSentences(sentences)
	
	createLGDevice()

};
