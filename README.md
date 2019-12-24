
# ch-error

一些常用的错误类型和状态码封装, 适用于ch-koa等场景。

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

## 结构
```
{
    code: 500,                  //状态码
    name: 'SystemError',        //错误名称
    message: '服务器内部错误',   //错误提示
    error: 'slie is not a function',   //具体错误
    data: {id: 333}             //返回数据 
}
```

### 错误类型和状态码

    ValidateError: '验证不通过(400)'
    ForbiddenError: '无权限访问(403)'
    NotFoundError: '请求资源未找到(404)'
    SystemError: '服务器内部错误(500)'
    UnavailableError: '服务未开放(501)'
    MaintainError: '系统维护中(503)'
    AppError: '自定义错误(>= 1000)'


# License

  MIT
