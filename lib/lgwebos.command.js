var volumeUp = require('./commandsList/volumeUp.js');
var volumeDown = require('./commandsList/volumeDown.js');		
var stop = require('./commandsList/stop.js');
var start = require('./commandsList/start.js');
		
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

    case 'tv-mute':
    	setMute({'status': true});
    	break;

    case 'tv-unmute':
    	setMute({'status': false});
    	break;

    case 'tv-pause':
    	mediaControl({'controlType': 'pause'});
    	break;

    case 'tv-play':
    	mediaControl({'controlType': 'play'});
    	break;

    case 'tv-forward':
    	mediaControl({'controlType': 'fastForward'});
    	break;

    case 'tv-rewind':
    	mediaControl({'controlType': 'rewind'});
    	break;

    case 'tv-app':
    	gladys.utils.sqlUnique('select language from user where role=\'admin\' order by id').then(function(lang){
			if(lang.language!='fr-FR') {
				var app = scope.replacedText.replace('Launch ', '')
				app = app.replacedText.replace(' application', '')
			} else{
				var app = scope.replacedText.replace('lance l \' application ', '')
			}
			switch(app) {
	    		case 'plex':
	    			launchApp({'id': 'cdp-30'});
	    			break;
	    		case 'Netflix':
	    			launchApp({'id': 'Netflix'});
	    			break;
	    		default:
	    			console.log('App '+ app +' not found')
	    			break;
	    	}
		});
    	break;

    default:

        break;
    }
};