var launchApp = require('./launchApp.js');

module.exports = function greenButton(param){

    gladys.param.getValue('LGWEBOS_GREEN_BUTTON_APP')
    .then((app) => {
        return app;
    })
    .catch(() => {
        return 'youtube.leanback.kids.v4';
    })
    .then((idApp) => {
        param.id = idApp;

        return launchApp(param);
    })

}
