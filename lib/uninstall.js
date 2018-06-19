const Promise = require('bluebird');
var deleteSentences = require('./uninstall/deleteSentences')
var deleteDevice = require('./uninstall/deleteDevice')

module.exports = function uninstall(){

	deleteSentences()

	deleteDevice()
    
};
