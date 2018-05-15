# weapons of kakaka

## Introduction
- weapons by daily

## API

### time

#### formatByTimestamp
  - arguments
    - {integer} timestamp
    - {string}  format [YYYY-MM-DD HH:mm:ss]
    ```
    format 参数介绍
    YYYY  年  2018
    YY    年  18
    MM    月  2
    DD    日  1
    HH    时  10
    mm    分  00
    ss    秒  00
    ```

  - usage
    ```javascript
    import {formatByTimestamp} from 'weapons/time'
    // 2018-2-1 10:00:000
    formatByTimestamp(Date.now(), 'YYYY-MM-DD HH:mm:ss')
    ```

### object

#### getType

  - arguments
    - {*} val
  - usage
    ```javascript
    import {getType} from 'weapons/object'
    //  Object
    getType({})
    ```

#### getVal

  - arguments
    - {object} obj
    - {string} key  'a.b.c'
  - usage
    ```javascript
    import {getVal} from 'weapons/object'
    // 1
    getVal({a: {b: 1}}, 'a.b')
    ```
### scroll
