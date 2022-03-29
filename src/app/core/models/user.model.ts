export class User {
  _id?: string;
  fullname!: string;
  email!: string;
  password!: string;
  isAdmin?: boolean;
  token?: string;
  expiresIn?: string;
}
