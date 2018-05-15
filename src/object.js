
/**
 * @param {*} val
 * @return {string} type of val
 */
export const getType = (val) => Object.prototype.toString.call(val).slice(8, -1)

/**
 *  获取 obj.a.b.c 的值
 * @param {*} obj
 * @param {*} key
 */
export const getVal = (obj, key) => {
  if(!key) return undefined;
  const keys = key.split('.')
  let res = obj;
  for(let i = 0, len = keys.length; i < len; i++) {
    if(typeof res === 'object') {
      res = res[keys[i]]
    } else {
      res = undefined
    }
  }
  return res
}