//taken from rprxy

var express = require('express');
var https = require('https');
var parser = require('cheerio');
var router = express.Router();

router.get('/api/:music', function (req, res, next) {
  https.get('search.roblox.com/catalog/json?CatalogContext=2&SortAggregation=5&LegendExpanded=true&Category=9&Keyword=' + encodeURI(req.params.music), function (search) {
    search.pipe(res);
  });
});

module.exports = router;
