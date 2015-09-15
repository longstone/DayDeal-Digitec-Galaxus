/**
 * Created by longstone on 15/09/15.
 */
module.exports = function($){
    var soldInfo = $($('article')[0]).children( '.sold-info' );
    return soldInfo.length === 1;
};