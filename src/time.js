/**
 * 格式化时间
 */

/**
 * @param {integer} timestamp
 * @param {string} format  [YYYY-MM-DD HH:mm:ss]
 */
export const formatByTimestamp = (timestamp, format) => {
  if(timestamp.toString().length !== 13) return timestamp;
  // 8*3600*1000
  const offsetTimezone = 28800000
  const date = new Date(timestamp + offsetTimezone)
  const ISOStr = date.toISOString()
  const [, YYYY, MM, DD, HH, mm, ss] = ISOStr.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/)
  return format.replace('YYYY', YYYY)
              .replace('YY', YYYY.slice(2))
              .replace('MM', MM)
              .replace('DD', DD)
              .replace('HH', HH)
              .replace('mm', mm)
              .replace('ss', ss)
}