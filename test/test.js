require('jsdom-global')()
var expect = require('chai').expect;
var request = require("request");

global.window = window
global.$ = require('jquery');

var gp = require('../giphy_parsing.js');
loadGifs=gp.loadGifs;
load_more=gp.load_more;
refresh=gp.refresh;

describe('#opening_page', function() {
    before(function () {
        this.jsdom = require('jsdom-global')()
      })
      
      after(function () {
        this.jsdom()
      })

    
    var url = "http://inraidi.com/GIFs_gallery/";
    context('without arguments', function() {
            it("returns status 200", function() {
                request(url, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    });
                                             });
                                                  });

    
});

describe('#returning_data', function() {
    before(function () {
        this.jsdom = require('jsdom-global')()
      })
      
      after(function () {
        this.jsdom()
      })

    context('without arguments', function() {
    
        it('should return data', function() {
        expect(loadGifs()).to.not.equal(null);
      })
    })
    
});


describe('#loading_more', function() {
    before(function () {
        this.jsdom = require('jsdom-global')()
      })
      
      after(function () {
        this.jsdom()
      })

    context('without arguments', function() {
    
        it('should return data', function() {
        expect(load_more()).to.not.equal(null);
      })
    })
    
});


describe('#refreshing', function() {
    before(function () {
        this.jsdom = require('jsdom-global')()
      })
      
      after(function () {
        this.jsdom()
      })

    context('without arguments', function() {
    
        it('should return data', function() {
        expect(refresh()).to.not.equal(null);
      })
    })
    
});


    