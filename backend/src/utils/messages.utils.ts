class Message {
  static invalidCredentials: string = "Invalid credentials";
  static errorDataSourceInit: string = "Error during data source initialization";
  static serverStarted: string = "Server started";
  static invalidToken: string = "Invalid token";
  static internalServerError: string = "Internal server error";
  static noPermission: string = "You dont have permission to perform this action";
  static invalidIdFormat: string = "The provided parameter is not in valid format";
  static notFound: string = "Not found";
  static alreadyExists: string = "The resource already exists";
}

class SchemaMessage {
  static invalidName: string = "Invalid name";
  static invalidEmail: string = "Invalid email";
  static invalidPhone: string = "Invalid phone";
  static invalidDistrict: string = "Invalid district";
  static invalidZipCode: string = "Invalid zip code";
  static invalidCity: string = "Invalid city";
  static invalidState: string = "Invalid state";
  static invalidNumber: string = "Invalid number";
  static invalidComplement: string = "Invalid complement";
  static invalidCPF: string = "Invalid cpf";
}

export { Message, SchemaMessage };
