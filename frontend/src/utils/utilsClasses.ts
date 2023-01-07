class Message {
  static nameField: string = "Field name should not contain special characters";
  static cpfField: string = "Field CPF should contain only 11 numbers between [0-9]";
  static phoneField: string = "Field phone should contain only 11 numbers between [0-9]";
  static invalidToken: string = "Invalid token";
  static invalidIdFormat: string = "The provided parameter is not in valid format";
  static invalidCredentials: string = "Invalid credentials";
  static invalidName: string = "Invalid name";
  static invalidEmail: string = "Invalid email";
  static invalidPhone: string = "Invalid phone";
  static invalidDistrict: string = "Invalid district";
  static invalidZipCode: string = "Invalid zip code";
  static invalidCity: string = "Invalid city";
  static invalidState: string = "Invalid state";
  static invalidNumber: string = "Invalid number";
  static invalidStreet: string = "Invalid street";
  static invalidCPF: string = "Invalid cpf";
}

class Regex {
  static cpf: RegExp = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

  static phone: RegExp =
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

  static genericNameField: RegExp = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
}

export { Message, Regex };
