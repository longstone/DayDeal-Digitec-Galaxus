/**
 * Created by longstone on 15/09/15.
 */
var S = require('string');
var soldOut = require('./soldOut');
var isSoldOut = function isSoldOutF($){
    var soldout = soldOut($);
    if (soldout) {
        var soldoutText = $($('article')[0]).children('.sold-info').text();
        return S(soldoutText).collapseWhitespace().s.split(' ')[0];
    }
    return null;
}
module.exports = {
    getSold: function getSoldF($) {
        var soldText = isSoldOut($);
        if(soldText){return soldText;}
        return $($('article .stock strong')[0]).text();
    },

    getMax : function getMaxF($) {
        var soldText = isSoldOut($);
        if(soldText){return soldText;}
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