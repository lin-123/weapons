import {getType, getVal} from '../../src/object'

describe('object', () => {
  describe('getType', () => {
    it('normal', () => {
      expect( getType({}) ).toBe('Object')
      expect( getType([]) ).toBe('Array')
      expect( getType(1) ).toBe('Number')
      expect( getType(null) ).toBe('Null')
      expect( getType() ).toBe('Undefined')
    })
  })

  describe('getVal', () => {
    it('normal', () => {
      expect(getVal({})).toBe(undefined)
      expect(getVal({}, 'a.b')).toBe(undefined)

      expect(getVal({a:1}, 'a')).toBe(1)
      expect(getVal({a: {b:2}}, 'a.b')).toBe(2)
    })
  })
})