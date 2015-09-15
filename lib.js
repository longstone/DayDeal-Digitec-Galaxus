/**
 * Created by longstone on 15/09/15.
 */
var request = require('request');
var cheerio = require('cheerio');
var S = require('string');
var Q = require('Q');
var parser = require('module/parser');
/**
 *
 * @param conf { lang : 'de', source : 'digitec'(default)|'galaxus' }
 * @returns {*|promise}
 */
var parser = function parserF(conf) {
    conf = conf | {};
    var deferred = Q.defer();
    var lang = conf.lang || 'en';
    var source = conf.source || 'digitec';
    var url = 'https://www.' + source + '.ch/' + lang + '/LiveShopping';
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var sold = getSold($);
            var max = getMax($);
            var text = getText($);
            text = S(text).collapseWhitespace().s;
            deferred.resolve({sold: sold, available: max, description: text, url: url});
        } else {
            deferred.reject(new Error(error));
        }
    });
    return deferred.promise;
};
module.exports = parser;