require('jsdom-global')()
var expect = require('chai').expect;
var request = require("request");

global.window = window
global.$ = require('jquery');

var gp = require('../giphy_parsing.js');
giphy_parsing=gp.giphy_parsing;
loadGifs=gp.loadGifs;

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
        expect(giphy_parsing()).to.not.equal(null);
      })
    })
    
});


describe('#returning_data_gif', function() {
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

    