import {expect} from 'chai';
import * as CardFetcher from '../lib/card-fetcher';


describe('CardFetcher', () => {
  const defSpec = {
    gameSet: 'base',
    cardType: 'research',
    cardId: 'r_ys2'
  };

  it('FetchCard_NoCardSpec_IsNull', () => {
    const card = CardFetcher.fetchCard();
    expect(card).to.be.null;
  });

  it('FetchCard_GameSetNotFound_IsNull', () => {
    const spec = {};
    Object.assign(spec, defSpec);
    spec.gameSet = 'no-such-game';

    const card = CardFetcher.fetchCard(spec);
    expect(card).to.be.null;
  });

  it('FetchCard_CardTypeNotFound_IsNull', () => {
    const spec = {};
    Object.assign(spec, defSpec);
    spec.cardType = 'no-such-type';

    const card = CardFetcher.fetchCard(spec);
    expect(card).to.be.null;
  });

  it('FetchCard_CardIdTypeNotFound_IsNull', () => {
    const spec = {};
    Object.assign(spec, defSpec);
    spec.cardId = 'no-such-id';

    const card = CardFetcher.fetchCard(spec);
    expect(card).to.be.null;
  });
});
