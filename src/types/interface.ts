// users interface
export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
export interface IUsers {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

// posts interface
export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
export interface IPosts {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

// todos interface
export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface ITodos {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}

// products interface
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

// pagination
export interface IPagination {
    skip: number;
    limit: number;
}
