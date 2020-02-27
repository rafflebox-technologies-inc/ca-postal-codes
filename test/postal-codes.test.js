
const postalCodes = require('../postal-codes')

describe('canada postal codes', () => {

  describe('AB', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('AB', 'T')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('AB', 'S')).toBe(false);
    })
  })

  describe('BC', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('BC', 'V')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('BC', 'S')).toBe(false);
    })
  })

  describe('MB', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('MB', 'R')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('MB', 'S')).toBe(false);
    })
  })

  describe('NB', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('NB', 'E')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NB', 'S')).toBe(false);
    })
  })

  describe('NL', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('NL', 'A')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NL', 'S')).toBe(false);
    })
  })

  describe('NS', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('NS', 'B')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NS', 'S')).toBe(false);
    })
  })
  
  describe('NT', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('NT', 'X')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NT', 'S')).toBe(false);
    })
  })
  describe('NU', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('NU', 'X')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('NU', 'S')).toBe(false);
    })
  })

  describe('ON', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('ON', 'K')).toBe(true);
      expect(postalCodes.validate('ON', 'L')).toBe(true);
      expect(postalCodes.validate('ON', 'N')).toBe(true);
      expect(postalCodes.validate('ON', 'M')).toBe(true);
      expect(postalCodes.validate('ON', 'P')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('ON', 'S')).toBe(false);
    })
  })

  describe('QC', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('QC', 'G')).toBe(true);
      expect(postalCodes.validate('QC', 'H')).toBe(true);
      expect(postalCodes.validate('QC', 'J')).toBe(true);
      expect(postalCodes.validate('QC', 'K')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('ON', 'S')).toBe(false);
    })
  })

  describe('YT', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('YT', 'Y')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('YT', 'S')).toBe(false);
    })
  })
  describe('PE', () => {

    it('valid postal code', () => {
      expect(postalCodes.validate('PE', 'C')).toBe(true);
    })
    it('invalid postal code', () => {
      expect(postalCodes.validate('PE', 'S')).toBe(false);
    })
  })
})