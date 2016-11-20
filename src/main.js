import * as CardFetcher from './lib/card-fetcher';
import {join} from 'path'; 


var cardDataPath = join(__dirname, 'cards.json');
CardFetcher.fetchCard(cardDataPath, {
  gameSet: 'base',
  cardType: 'location',
  cardId: 'As8'
});
