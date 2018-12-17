const openChannel = require('./openChannel');

module.exports = function programMinus(param){
    return gladys.utils.sql( 
        'SELECT ds.value FROM devicetype dt INNER JOIN devicestate ds ON dt.id=ds.devicetype INNER JOIN device d on dt.device=d.id WHERE dt.identifier = ? and d.service= ? ORDER BY ds.createdAt DESC LIMIT 1 ;', 
        [ 'Channel', 'lgwebos' ]
    )
    .then((currentChannel) => {
        param.channel = currentChannel + 1;
        return openChannel(param);
    })
}