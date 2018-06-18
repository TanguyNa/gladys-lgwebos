const commandsList = require('./commandsList')

module.exports = function(params) {
  switch(params.deviceType.type) {
      case 'binary':
        switch(params.state.value) {
          case 1:
            return commandsList.start()
          break;
          case 0:
            return commandsList.stop()
          break;
        }
      break;
      case 'Mute':
        switch(params.state.value) {
          case 1:
            return commandsList.setMute({'status' : true})
          break;
          case 0:
            return commandsList.setMute({'status' : false})
          break;
      break;
      case 'Channel':
        return commandsList.openChannel({'channelNumber' : params.state.value})
      break;
      default:
        console.log('Error during LGWEBOS command')
      break;
    }
  };