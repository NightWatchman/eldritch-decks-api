import {expect} from 'chai';
import * as CardFetcher from '../lib/card-fetcher';


describe('CardFetcher (Locations)', () => {

  it('fetchCard_CardHasHeaders_HeadersMatch', () => {
    const card = CardFetcher.fetchCard({
      gameSet: 'base',
      cardType: 'location',
      cardId: 'As8'  
    });
    expect(card.headers).to.eql(headers = [
      'Shanghai',
      'Tokyo',
      'Sydney'
    ]);
  });

  it('fetchCard_CardHasName_NameMatches', () => {
    const card = CardFetcher.fetchCard({
      gameSet: 'mountains_of_madness',
      cardType: 'gate',
      cardId: 'MoM_Ga33'
    });
    expect(card.name).to.eql('Plateau of Leng');
  });

  it('fetchCard_knownCard_textMatches', () => {
    const card = CardFetcher.fetchCard({
      gameSet: 'under_the-pyramids',
      cardType: 'expedition',
      cardId: 'UtP_Ex_Ist_1'
    });
    expect(card.top, 'top mismatch').to.equal(
      'On a high hill, you find a large flat stone carved with' +
      ' images of constellations. Locals claim these were left' +
      ' by the astrologer, Epigenes. You search the area for' +
      ' more of these carved stones [OBSERVATION].'
    );
    expect(card.middle, 'middle mismatch').to.equal(
      'The discovery makes you famous. Improve [INFLUENCE].' +
      ' You study the stars to read Epigenes\' message [LORE].' +
      ' If you pass, you decipher a warning; advance the active' +
      ' Mystery by l. If you fail, the stars seem oppressive; gain a Despair Condition.'
    );
    expect(card.bottom, 'bottom mismatch').to.equal(
      'Your search is interrupted when worshipers of Daoloth attack you' +
      ' [STRENGTH]. If you pass, you defeat them and discover their knowledge' +
      ' of the future; retreat Doom by 1. If you fail you are stabbed repeatedly; lose 2 Health.'
    );
  });
});
