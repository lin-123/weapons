import {formatByTimestamp} from '../../src/time'

describe('time', () => {
  describe('formatByTimestamp', () => {
    it('normal', () => {
      // "2018-05-15T07:03:11.707Z"
      // 1526367791707
      const timestamp = 1526367791707
      const formated = formatByTimestamp(timestamp, 'date = YYYY-MM-DD HH:mm:ss')
      expect(formated).toBe('date = 2018-05-15 15:03:11')
    })
  })
})