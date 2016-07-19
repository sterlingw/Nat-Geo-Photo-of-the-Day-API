var express = require('express'),
    request = require('request'),
    cheerio = require('cheerio'),
    app     = express();


/**
 * Photo Module
 */
var photo = function () {
    var self = this;

    self.url  = "http://photography.nationalgeographic.com/photography/photo-of-the-day/";
    self.port = process.env.PORT || 3000;


    /**
     *
     */
    self.enableCors = function () {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };


    /**
     *
     */
    self.run = function (options) {
        if (typeof options.port == "number") {
            self.port = options.port;
        }

        if (options.cors) {
            self.enableCors();
        }

        app.get('/api/dailyphoto', function(req, res){
            request(self.url, function(err, response, html){
                if (err) res.jsonp(err);
                var $ = cheerio.load(html);

                res.jsonp({ 
                    src:    $("div.primary_photo img").attr("src"),
                    alt:    $("div.primary_photo img").attr("alt"),
                    description: $("div#caption p:nth-child(4)").text(),
                    credit: $("div#caption p.credit").text()
                });
            });
        });

        app.listen(self.port);
    };


    return self;
}();


module.exports = photo;
