/**
 * Created by longstone on 15/09/15.
 */
'use strict';

var parser = require('./../module/parser');

var assert = require("assert");
var cheerio = require('cheerio');
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/liveShopping.html', 'utf8');
var htmlSoldout = fs.readFileSync(__dirname + '/liveShopping-soldout.html', 'utf8');

var $ = cheerio.load(html);
var $soldOut = cheerio.load(htmlSoldout);
describe('test getSold', function () {

    it('should get 30', function () {
        var actual = 30;
        var expected = parser.getSold($);
        assert.equal(actual, expected);

    });

    it('should get 100', function () {
        var actual = 100;
        var expected = parser.getSold($soldOut);
        assert.equal(actual, expected);

    });

});

describe('test getMax', function () {

    it('should get 50', function () {
        var actual = 50;
        var expected = parser.getMax($);
        assert.equal(actual, expected);

    });

    it('should get 100', function () {
        var actual = 100;
        var expected = parser.getMax($soldOut);
        assert.equal(actual, expected);

    });

});

describe('test getDescription', function () {

    it('should get "CHF 50.– statt vorher 70.10 jankurtz Tree (Schwarz, 170cm)"', function () {
        var actual = 'CHF 50.– statt vorher 70.10 jankurtz Tree (Schwarz, 170cm)';
        var expected = parser.getText($);
        assert.equal(actual, expected);
    });

    it('should get "CHF 65.- was 99.- Infiniti Super Speed Buggy"', function () {
        var actual = 'CHF 65.– was 99.– Infiniti Super Speed Buggy';
        var expected = parser.getText($soldOut);
        assert.deepEqual(actual, expected);
    });

});