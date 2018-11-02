const commandsList = require('./commandsList/commandsList')

module.exports = function(params) {
  switch(params.deviceType.deviceTypeIdentifier) {
      case 'Power':
        switch(params.state.value) {
          case 1:
            return commandsList.switchState({state:true})
          break;
          case 0:
            return commandsList.switchState({state:false})
          break;
        }
      break;
      case 'Mute':
        switch(params.state.value) {
          case 1:
            return commandsList.setMute({status : true})
          break;
          case 0:
            return commandsList.setMute({status : false})
          break;
      break;
      case 'Channel':
        return commandsList.openChannel({channel : params.state.value})
      break;
      default:
        console.log('Error during LGWEBOS command')
      break;
    }
  }
};