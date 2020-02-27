
const postalCodes = require('../postal-codes')

describe('canada postal codes', () => {

  describe('match regex', () => {

  it('valid postal code', () => {
      expect(postalCodes.validate('AB', 'T2E 1V3')).toBe(true);
      expect(postalCodes.validate('AB', ' T2e 1V3 ')).toBe(true);
      expect(postalCodes.validate('AB', 'T2e1V3')).toBe(true);
    })

    
  it('invalid postal code', () => {
      expect(postalCodes.validate('AB', 'Hello')).toBe(false);
    })
  })

  describe('AB', () => {

    it('valid postal code', () => {
        expect(postalCodes.validate('Alberta', 'T2E 1V3')).toBe(true);
        expect(postalCodes.validate('ab', 't2e 1v3')).toBe(true);
        expect(postalCodes.validate('AB', 'T2E 1V3')).toBe(true);
      })
    it('invalid postal code', () => {
        expect(postalCodes.validate('AB', 'S2S 2S2')).toBe(false);
      })
  })

  describe('BC', () => {

    it('valid postal code', () => {
        expect(postalCodes.validate('British Columbia', 'V3V 3V3')).toBe(true);
        expect(postalCodes.validate('bc', 'v3v 3v3')).toBe(true);
        expect(postalCodes.validate('BC', 'V3V 3V3')).toBe(true);
      })
    it('invalid postal code', () => {
        expect(postalCodes.validate('BC', 'S2S 2S2')).toBe(false);
      })
  })

  describe('MB', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Manitoba', 'R2R 2R2')).toBe(true);
      expect(postalCodes.validate('mb', 'r2r 2r2')).toBe(true);
      expect(postalCodes.validate('MB', 'R2R 2R2')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('MB', 'S2S 2S2')).toBe(false);
    })
  })

  describe('NB', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('New Brunswick', 'E2E 2E2')).toBe(true);
      expect(postalCodes.validate('nb', 'e2e 2e2')).toBe(true);
      expect(postalCodes.validate('NB', 'E2E 2E2')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NB', 'S2S 2S2')).toBe(false);
    })
  })

  describe('NL', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Newfoundland', 'A1A 1A1')).toBe(true);
      expect(postalCodes.validate('nl', 'a1a 1a1')).toBe(true);
      expect(postalCodes.validate('NL', 'A1A 1A1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NL', 'S2S 2S2')).toBe(false);
    })
  })

  describe('NS', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Nova Scotia', 'B1A 1B1')).toBe(true);
      expect(postalCodes.validate('ns', 'b1b 1b1')).toBe(true);
      expect(postalCodes.validate('NS', 'B1B 1B1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NS', 'S2S 2S2')).toBe(false);
    })
  })
  
  describe('NT', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Northwest Territories', 'X1X 1X1')).toBe(true);
      expect(postalCodes.validate('nt', 'x1x 1x1')).toBe(true);
      expect(postalCodes.validate('NT', 'X1X 1X1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NT', 'S2S 2S2')).toBe(false);
    })
  })
  describe('NU', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Nunavut', 'X1X 1X1')).toBe(true);
      expect(postalCodes.validate('nu', 'x1x 1x1')).toBe(true);
      expect(postalCodes.validate('NU', 'X1X 1X1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NU', 'S2S 2S2')).toBe(false);
    })
  })

  describe('ON', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Ontario', 'K1K 1K1')).toBe(true);
      expect(postalCodes.validate('on', 'k1k 1k1')).toBe(true);
      expect(postalCodes.validate('ON', 'K1K 1K1')).toBe(true);
      expect(postalCodes.validate('ON', 'L1L 1L1')).toBe(true);
      expect(postalCodes.validate('ON', 'N1N 1N1')).toBe(true);
      expect(postalCodes.validate('ON', 'M1M 1M1')).toBe(true);
      expect(postalCodes.validate('ON', 'P1P 1P1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('ON', 'S2S 2S2')).toBe(false);
    })
  })

  describe('QC', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Quebec', 'G1G 1G1')).toBe(true);
      expect(postalCodes.validate('qc', 'g1g 1g1')).toBe(true);
      expect(postalCodes.validate('QC', 'G1G 1G1')).toBe(true);
      expect(postalCodes.validate('QC', 'H1H 1H1')).toBe(true);
      expect(postalCodes.validate('QC', 'J1J 1J1')).toBe(true);
      expect(postalCodes.validate('QC', 'K1K 1K1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('QC', 'S2S 2S2')).toBe(false);
    })
  })

  describe('YT', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Yukon', 'Y1Y 1Y1')).toBe(true);
      expect(postalCodes.validate('yt', 'y1y 1y1')).toBe(true);
      expect(postalCodes.validate('YT', 'Y1Y 1Y1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('YT', 'S2S 2S2')).toBe(false);
    })
  })
  describe('PE', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('Prince Edward Island', 'C1C 1C1')).toBe(true);
      expect(postalCodes.validate('pe', 'c1c 1c1')).toBe(true);
      expect(postalCodes.validate('PE', 'C1C 1C1')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('PE', 'S2S 2S2')).toBe(false);
    })
  })
})