var volumeUp = require('./commandsList/volumeUp.js');
var volumeDown = require('./commandsList/volumeDown.js');		
var stop = require('./commandsList/stop.js');
var start = require('./commandsList/start.js');
var setMute = require('./commandsList/setMute');
var mediaControl = require('./commandsList/mediaControl');
var launchApp = require('./commandsList/launchApp');
		
module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'tv-app':
            gladys.utils.sqlUnique('select language from user where role=\'admin\' order by id').then(function(lang){
                console.log(lang.language)
                if(lang.language!='fr-FR') {
                    var app = scope.replacedText.replace('Launch ', '')
                    app = app.replacedText.replace(' application', '')
                } else{
                    var app = scope.replacedText.replace("lance l'application ", '')
                }
                switch(app) {
                    case 'plex':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'cdp-30'});
                        break;
                    case 'netflix':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'netflix'});
                        break;
                    case 'youtube':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
                        break;
                    case 'Smart IPTV':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
                        break;
                    case 'Youtube Kids':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
                        break;
                    case 'Radio france by mytuner':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
                        break;
                    case 'Emby':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
                        break;
                    case 'Dailymotion':
                        console.log('Lancement de '+app)
                        launchApp({'id': ''})
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