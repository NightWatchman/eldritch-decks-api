import {expect} from 'chai';
import * as CardFetcher from '../lib/card-fetcher';

describe('CardFetcher (Locations)', () => {
  const knownCard = {
    spec = {
      gameSet: 'base',
      cardType: 'location',
      cardId: 'As8'
    },

    headers = [
      'Shanghai',
      'Tokyo',
      'Sydney'
    ],
  };

  it('FetchCard_KnownCard_HeadersMatch', () => {
    const card = CardFetcher.fetchCard(knownCard.spec);
    expect(card.headers).to.eql(knownCard.headers);
  });

  
});
