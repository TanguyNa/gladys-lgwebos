var launchApp = require('./commandsList/launchApp');
		
module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'tv-app':
            gladys.utils.sqlUnique('select language from user where role=\'admin\' order by id').then(function(lang){
                var text = scope.replacedText.toLowerCase();
                if(lang.language!='fr-FR') {
                    var app = text.replace('launch ', '')
                    app = app.replace(' application', '')
                } else{
                    var app = text.replace("lance l'application ", '')
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
                        launchApp({'id': 'youtube.leanback.v4'})
                        break;
                    case 'smart iptv':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'com.1827622.109556'})
                        break;
                    case 'youtube kids':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'youtube.leanback.kids.v4'})
                        break;
                    case 'radio france by mytuner':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'com.appgeneration.app.radiobymytuner'})
                        break;
                    case 'emby':
                        console.log('Lancement de '+app)
                        launchApp({'id': 'com.emby.app'})
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