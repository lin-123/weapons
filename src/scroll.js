/**
 * vue scroll directive
 */

const wrap = (trigger, func) => {
  if(!trigger) return;
  setTimeout(func, 0)
}

export const scrollIntoView = (el, {value}) => wrap(value, () => el.scrollIntoView())

export const scrollTo = (el, {value, arg}) => {
  const {trigger, top} = value
  wrap(trigger, () => {
    if(arg == 'top') return el.scrollTop = 0
    if(arg == 'bottom') return el.scrollTop = el.scrollHeight

    el.scrollTop == value.top || 0
  })
}

let scrollMap = new Map()
export const scroll = {
  bind(el, {value}) {
    const {watcher} = value
    const listener = el.addEventListener('scroll', (e) =>{
      const {clientHeight, scrollHeight} = scrollMap.get(el)
      typeof watcher == 'function' && watcher({clientHeight, scrollHeight, scrollTop: e.target.scrollTop})
    })
    scrollMap.set(el, {listener})
  },
  update(el) {
    const {clientHeight, scrollHeight} = el
    scrollMap.set(el, {...scrollMap.get(el), clientHeight, scrollHeight})
  },
  unbind(el) {
    el.removeEventListener('scroll', scrollMap.get(el).listener)
    scrollMap.delete(el)
  }
}