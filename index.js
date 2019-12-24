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

class ValidateError extends BaseError {
    constructor(message) {
        super(400, 'ValidateError', message || '验证不通过', 'Validate Failed');
    }
}

class ForbiddenError extends BaseError {
    constructor(message) {
        super(403, 'ForbiddenError', message || '无权限访问', 'Forbidden');
    }
}

class NotFoundError extends BaseError {
    constructor() {
        super(404, 'NotFoundError', '请求资源未找到', 'Not Found');
    }
}

class SystemError extends BaseError {
    constructor(error) {
        super(500, 'SystemError', '服务器内部错误', error || 'System Error', 'Internal Server Error');
    }
}

class UnavailableError extends BaseError {
    constructor() {
        super(501, 'UnavailableError', '服务未开放', 'Not Implemented');
    }
}

class MaintainError extends BaseError {
    constructor() {
        super(503, 'MaintainError', '系统维护中', 'Service Unavailable');
    }
}

class AppError extends BaseError {
    constructor(code, message, error, data) {
        super(code, 'AppError', message, error);
        this.data = data;
    }
}

module.exports = {
    BaseError,
    ValidateError,
    ForbiddenError,
    NotFoundError,
    SystemError,
    UnavailableError,
    MaintainError,
    AppError
};