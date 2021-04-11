class BadRequest extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 400;
    this.msg = message || 'No se ha pedido bien el recurso';
  }
}
class AlreadyExists extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 401;
    this.msg = message || 'El recurso ya existe';
  }
}
class InvalidCredentials extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 401;
    this.msg = message || 'Credenciales invalidas';
  }
}
class NotFound extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 404;
    this.msg = message || 'Not Found: The resource is not found';
  }
}
class RequireLogin extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 406;
    this.msg = message || 'El recurso necesita que ingreses al sitio';
  }
}
class RequireToken extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 401;
    this.msg = message || 'Debes enviar un token en la petición.';
  }
}
class RequirePermission extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 401;
    this.msg = message || 'No tienes los permisos para acceder al recurso';
  }
}
class InternalServerError extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 500;
    this.msg = message || 'Servicio no disponible';
  }
}

class IncompleteData extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 400;
    this.msg = message || 'Faltan datos';
  }
}

class ExistingEmail extends Error {
  constructor(message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.code = 404;
    this.msg =
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
