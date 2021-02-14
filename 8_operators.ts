interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// key = 'job'; // Error

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'creatsedAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let user: UserKeysNoMeta1 = 'name';
// user = '_id'; // Error
