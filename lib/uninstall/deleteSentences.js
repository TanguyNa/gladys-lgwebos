module.exports = function deleteSentences(){
	return gladys.utils.sql('DELETE FROM sentence WHERE service = ? ;', [ 'lgwebos' ]);
};