export interface IRandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
  picture: {
    large: string;
  };
}

export interface IRandomCustomUser {
  image: string;
  name: string;
  email: string;
  username: string;
  age: number;
}
