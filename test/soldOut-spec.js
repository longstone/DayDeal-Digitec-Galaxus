/**
 * Created by longstone on 15/09/15.
 */
'use strict';
var soldOut = require('./../module/soldOut');

var assert = require("assert");
var cheerio = require('cheerio');
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/liveShopping.html', 'utf8');
var htmlSoldout = fs.readFileSync(__dirname + '/liveShopping-soldout.html', 'utf8');

var $ = cheerio.load(html);
var $soldOut = cheerio.load(htmlSoldout);

describe('test soldOut', function () {

    it('should get false', function () {
        var actual = false;
        var expected = soldOut($);
        assert.equal(actual, expected);

    });

    it('should get true', function () {
        var actual = true;
        var expected = soldOut($soldOut);
        assert.equal(actual, expected);

    });

});
