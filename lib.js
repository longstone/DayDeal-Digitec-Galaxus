/**
 * Created by longstone on 15/09/15.
 */
var request = require('request');
var cheerio = require('cheerio');
var S = require('string');
var Q = require('Q');
var Parser = require('./module/parser');
/**
 *
 * @param conf { lang : 'de', source : 'digitec'(default)|'galaxus' }
 * @returns {*|promise}
 */
var parseSite = function parseSiteF(conf) {
    conf = conf || {};
    var deferred = Q.defer();
    var lang = conf.lang || 'en';
    var source = conf.source || 'digitec';
    var url = 'https://www.' + source + '.ch/' + lang + '/LiveShopping';
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var sold = Parser.getSold($);
            var max = Parser.getMax($);
            var text = Parser.getText($);
            text = S(text).collapseWhitespace().s;
            deferred.resolve({sold: sold, available: max, description: text, url: url});
        } else {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;
};
module.exports = parseSite;