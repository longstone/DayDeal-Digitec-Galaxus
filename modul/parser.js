/**
 * Created by longstone on 15/09/15.
 */
var S = require('string');
module.exports = {
    getSold :function getSoldF($) {
        return $($('article .stock strong')[0]).text();
    },

    getMax : function getMaxF($) {
        var maxString =  $($('article .stock small')[0]).text();
        var max = maxString.split(' ')[0].substr(1);
        return Number(max);
    },
    getText : function getTextF($) {
    var bigText = $($('article .product-content')[0]).text();
    var lines =  S(bigText).trim().s.split('\n');
        var price = lines[0].substring(0,lines[0].length-1);
        var description = lines[2] + lines[3];
        var totalString = price + description;
        return S(totalString).collapseWhitespace().s;
}}
;