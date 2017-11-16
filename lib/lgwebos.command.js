var volumeUp = require('./volumeUp.js');
var volumeDown = require('./volumeDown.js');		
var stop = require('./stop.js');
var start = require('./start.js');
		
module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'tv-up':
		volumeUp();
        break;

	case 'tv-down':
		volumeDown();
        break;

	case 'tv-off':
		stop();
        break;

	case 'tv-on':
		start();
        break;

        default:

        break;
    }
};