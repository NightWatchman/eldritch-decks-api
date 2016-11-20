'use strict';

var _cardFetcher = require('./lib/card-fetcher');

var CardFetcher = _interopRequireWildcard(_cardFetcher);

var _path = require('path');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var cardDataPath = (0, _path.join)(__dirname, 'cards.json');
CardFetcher.fetchCard(cardDataPath, {
  gameSet: 'base',
  cardType: 'location',
  cardId: 'As8'
});