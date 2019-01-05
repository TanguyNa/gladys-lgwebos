const openChannel = require('./openChannel');

module.exports = function programMinus(param){
    return gladys.utils.sql( 
        'SELECT dt.id,ds.value FROM devicetype dt INNER JOIN devicestate ds ON dt.id=ds.devicetype INNER JOIN device d on dt.device=d.id WHERE dt.identifier = ? and d.service= ? ORDER BY ds.createdAt DESC LIMIT 1 ;', 
        [ 'Channel', 'lgwebos' ]
    )
    .then((row) => {
        currentChannel = row[0].value;
        param.channel = currentChannel<200 ? currentChannel + 1 : currentChannel;
        param.deviceTypeId = row[0].id;
        return openChannel(param);
    })
}