/**
 * Created by longstone on 15/09/15.
 */
'use strict';
var assert = require("assert");
var cheerio = require('cheerio');
var parser = require('././parser');

var fs = require('fs');

var data = fs.readFileSync(__dirname + '/liveShopping.html','utf8');
var html = data;
console.log('html:'+html)
var $ = cheerio.load(html);
describe('test getSold', function () {

    it('should get 30', function () {
        var actual = 30;
        var expected = parser.getSold($);
        assert.equal(actual, expected);

    });

});

describe('test getMax', function () {

    it('should get 50', function () {
        var actual = 50;
        var expected = parser.getMax($);
        assert.equal(actual, expected);

    });

});

describe('test getDescription',function(){

    it('should get "CHF 50.– statt vorher 70.10 jankurtz Tree (Schwarz, 170cm)"',function(){
        var actual = 'CHF 50.– statt vorher 70.10 jankurtz Tree (Schwarz, 170cm)';
            var expected = parser.getText($);
       assert.equal(actual,expected);
    });
});