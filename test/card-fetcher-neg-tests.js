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

  it('fetchCard_CardHasNoHeaders_HeadersIsEmpty', () => {
    const card = CardFetcher.fetchCard({
      gameSet: 'forsaken_lore',
      cardType: 'expedition',
      cardId: 'FL_Ex_Him_4'
    });
    expect(card.headers).to.be.empty;
  });

  it('fetchCard_CardHasNoName_IsEmpty', () => {
    const card = CardFetcher.fetchCard({
      gameSet: 'strange_remnants',
      cardType: 'research',
      cardId: 'FL_R_Syz3'
    });
    expect(card.name).to.be.empty;
  });
});
