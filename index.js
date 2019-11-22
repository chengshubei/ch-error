'use strict';

class BaseError extends Error {
    constructor(code, name, message, error) {
        super(message);
        this.name = name;
        this.code = code;
        this.error = error || message;
        this.data = null;
    }
}

class AppError extends BaseError {
    constructor(code, message, error, data) {
        super(code, 'AppError', message, error);
        this.data = data;
    }
}

class SystemError extends BaseError {
    constructor(error) {
        super(-1, 'SystemError', '服务器系统错误', error || 'System Error');
        Error.captureStackTrace(this, this.constructor);
    }
}

class DatabaseError extends BaseError {
    constructor(error) {
        super(-2, 'DatabaseError', '数据库操作失败', error || 'Database Error');
    }
}

class CacheError extends BaseError {
    constructor(error) {
        super(-3, 'CacheError', '缓存操作失败', error || 'Cache Error');
    }
}

class ValidateError extends BaseError {
    constructor(message) {
        super(-4, 'ValidateError', message || '验证失败');
    }
}

class ForbiddenError extends BaseError {
    constructor(message) {
        super(403, 'ForbiddenError', message || '无权限访问');
    }
}

class NotFoundError extends BaseError {
    constructor() {
        super(404, 'NotFoundError', '请求资源未找到');
    }
}

class UnavailableError extends BaseError {
    constructor() {
        super(501, 'UnavailableError', '服务未开放');
    }
}

class MaintainError extends BaseError {
    constructor() {
        super(503, 'MaintainError', '系统维护中');
    }
}

module.exports = {
    BaseError,
    AppError,
    SystemError,
    ValidateError,
    DatabaseError,
    CacheError,
    ForbiddenError,
    NotFoundError,
    UnavailableError,
    MaintainError
};