interface IUserRegisterRequest {
  username: string;
  password: string;
}

interface IUserUpdateRequest {
  username?: string;
  password?: string;
}

export { IUserRegisterRequest, IUserUpdateRequest };
