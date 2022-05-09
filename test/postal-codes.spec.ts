import validate from '../src/ca-postal-codes';

describe('canada postal codes', () => {

  describe('AB', () => {

    it('valid postal code', () => {
      expect(validate('Alberta', 'T')).toBe(true);
      expect(validate('ab', 't')).toBe(true);
      expect(validate('AB', 'T')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('AB', 'S')).toBe(false);
    })
  })

  describe('BC', () => {

    it('valid postal code', () => {
      expect(validate('British Columbia', 'V')).toBe(true);
      expect(validate('bc', 'v')).toBe(true);
      expect(validate('BC', 'V')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('BC', 'S')).toBe(false);
    })
  })

  describe('MB', () => {

    it('valid postal code', () => {
      expect(validate('Manitoba', 'R')).toBe(true);
      expect(validate('mb', 'r')).toBe(true);
      expect(validate('MB', 'R')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('MB', 'S')).toBe(false);
    })
  })

  describe('NB', () => {

    it('valid postal code', () => {
      expect(validate('New Brunswick', 'E')).toBe(true);
      expect(validate('nb', 'e')).toBe(true);
      expect(validate('NB', 'E')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('NB', 'S')).toBe(false);
    })
  })

  describe('NL', () => {

    it('valid postal code', () => {
      expect(validate('Newfoundland', 'A')).toBe(true);
      expect(validate('nl', 'a')).toBe(true);
      expect(validate('NL', 'A')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('NL', 'S')).toBe(false);
    })
  })

  describe('NS', () => {

    it('valid postal code', () => {
      expect(validate('Nova Scotia', 'B')).toBe(true);
      expect(validate('ns', 'b')).toBe(true);
      expect(validate('NS', 'B')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('NS', 'S')).toBe(false);
    })
  })

  describe('NT', () => {

    it('valid postal code', () => {
      expect(validate('Northwest Territories', 'X')).toBe(true);
      expect(validate('nt', 'x')).toBe(true);
      expect(validate('NT', 'X')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('NT', 'S')).toBe(false);
    })
  })
  describe('NU', () => {

    it('valid postal code', () => {
      expect(validate('Nunavut', 'X')).toBe(true);
      expect(validate('nu', 'x')).toBe(true);
      expect(validate('NU', 'X')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('NU', 'S')).toBe(false);
    })
  })

  describe('ON', () => {

    it('valid postal code', () => {
      expect(validate('Ontario', 'K')).toBe(true);
      expect(validate('on', 'k')).toBe(true);
      expect(validate('ON', 'K')).toBe(true);
      expect(validate('ON', 'L')).toBe(true);
      expect(validate('ON', 'N')).toBe(true);
      expect(validate('ON', 'M')).toBe(true);
      expect(validate('ON', 'P')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('ON', 'S')).toBe(false);
    })
  })

  describe('QC', () => {

    it('valid postal code', () => {
      expect(validate('Quebec', 'G')).toBe(true);
      expect(validate('qc', 'g')).toBe(true);
      expect(validate('QC', 'G')).toBe(true);
      expect(validate('QC', 'H')).toBe(true);
      expect(validate('QC', 'J')).toBe(true);
      expect(validate('QC', 'K')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('QC', 'S')).toBe(false);
    })
  })

  describe('YT', () => {

    it('valid postal code', () => {
      expect(validate('Yukon', 'Y')).toBe(true);
      expect(validate('yt', 'y')).toBe(true);
      expect(validate('YT', 'Y')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('YT', 'S')).toBe(false);
    })
  })
  describe('PE', () => {

    it('valid postal code', () => {
      expect(validate('Prince Edward Island', 'C')).toBe(true);
      expect(validate('pe', 'c')).toBe(true);
      expect(validate('PE', 'C')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(validate('PE', 'S')).toBe(false);
    })
  })
})
