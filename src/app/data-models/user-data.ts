export interface UserData {
  id: number;
    token: string,
    name: NameData;
    login: string;
    password: string;
}

export interface NameData {
  first: string;
  last: string;
}
