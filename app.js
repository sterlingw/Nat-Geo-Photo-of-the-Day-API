var express = require('express'),
    request = require('request'),
    cheerio = require('cheerio'),
    app     = express();


/**
 * Gets the Nat Geo photo of the day in JSON format with the img src, img alt, and credit in HTML.
 */
app.get('/api/dailyphoto', function(req, res){
    url = 'http://photography.nationalgeographic.com/photography/photo-of-the-day/';

    request(url, function(err, response, html){
        if (err) res.send(err);
        var $ = cheerio.load(html);

        res.send({ 
            "src": $("div.primary_photo img").attr("src"),
            "alt": $("div.primary_photo img").attr("alt"),
            "credit": $("div#caption p.credit").html()
        });
    });
});


app.listen('80')
exports = module.exports = app;