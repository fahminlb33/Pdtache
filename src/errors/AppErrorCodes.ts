export default {
  // --- Success
  Success: 1,
  InternalError: 2,

  // --- Authentication
  AuthorizationNotExists: 1001,
  BasicInvalid: 1002,
  JwtInvalid: 1003,
  JwtExpired: 1004,
  JwtClockNotSynchronized: 1005,

  // --- User service
  UserCredentialInvalid: 2001,

  // --- Attendance
  TokenInvalid: 3001,

  // --- Generic error
  InvalidBody: 4001,
  ArgumentOutOfRange: 4002
};
