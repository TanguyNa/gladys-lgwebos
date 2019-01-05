var launchApp = require('./launchApp.js');

module.exports = function blueButton(param){

    gladys.param.getValue('LGWEBOS_BLUE_BUTTON_APP')
    .then((app) => {
        return app;
    })
    .catch(() => {
        return 'com.1827622.109556';
    })
    .then((idApp) => {
        param.id = idApp;

        return launchApp(param);
    })

}
