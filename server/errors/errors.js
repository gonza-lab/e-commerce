class BadRequest extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 400;
    this.errorMessage = message || 'No se ha pedido bien el recurso';
  }
}
class AlreadyExists extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 401;
    this.errorMessage = message || 'El recurso ya existe';
  }
}
class InvalidCredentials extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 401;
    this.errorMessage = message || 'Credenciales invalidas';
  }
}
class NotFound extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 404;
    this.errorMessage = message || 'Not Found: The resource is not found';
  }
}
class RequireLogin extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 406;
    this.errorMessage = message || 'El recurso necesita que ingreses al sitio';
  }
}
class RequireToken extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 401;
    this.errorMessage =
      message || 'Debes enviar un token en la petición.';
  }
}
class RequirePermission extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 401;
    this.errorMessage =
      message || 'No tienes los permisos para acceder al recurso';
  }
}
class InternalServerError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 500;
    this.errorMessage = message || 'Servicio no disponible';
  }
}

class IncompleteData extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 400;
    this.errorMessage = message || 'Faltan datos';
  }
}

class ExistingEmail extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.statusCode = 404;
    this.errorMessage =
      message || 'Ya se encuentra un usuario registrado con el mail enviado.';
  }
}

module.exports = {
  BadRequest,
  AlreadyExists,
  NotFound,
  InternalServerError,
  RequireLogin,
  RequireToken,
  RequirePermission,
  InvalidCredentials,
  IncompleteData,
  ExistingEmail,
};