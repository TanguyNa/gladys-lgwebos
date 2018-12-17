var launchApp = require('./launchApp.js');

module.exports = function redButton(param){

    gladys.param.getValue('LGWEBOS_RED_BUTTON_APP')
    .then((app) => {
        return app;
    })
    .catch(() => {
        return 'netflix';
    })
    .then((idApp) => {
        param.id = idApp;

        launchApp(param);
    })

}
