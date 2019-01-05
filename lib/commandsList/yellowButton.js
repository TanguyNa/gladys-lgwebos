var launchApp = require('./launchApp.js');

module.exports = function yellowButton(param){

    gladys.param.getValue('LGWEBOS_YELLOW_BUTTON_APP')
    .then((app) => {
        return app;
    })
    .catch(() => {
        return 'youtube.leanback.v4';
    })
    .then((idApp) => {
        param.id = idApp;

        launchApp(param);
    })

}
