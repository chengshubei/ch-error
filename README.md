
# ch-error

  some common error type, used with ch-koa.

## Installation

```
$ npm install ch-error
```


## Example

  Always pretty by default:

```js
const {AppError} = require('ch-error');
throw new AppError(12004, '订单已超时', 'none order', {orderId: 'xxxxxxxxx'});
```

# License

  MIT
