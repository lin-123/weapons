/**
 *
 * @param {string} timestamp
 * @param {string} format  [YYYY-MM-DD HH:mm:ss]
 */
export const formatByTimestamp = (timestamp, format) => {
  const date = new Date(timestamp);
  const ISOStr = date.toISOString()
}