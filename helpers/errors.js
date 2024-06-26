class ServerError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}

class ValidationError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

class AuthorizationError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 401;
    }
}

class NotFoundError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

class ConflictError extends ServerError {
    constructor(message) {
        super(message);
        this.status = 409;
    }
}


module.exports = {
    ServerError,
    ValidationError,
    NotFoundError,
    ConflictError,
    AuthorizationError
}