export enum Category {
  Men = "men's clothing",
  Women = "women's clothing",
  Jewelery = 'jewelery',
  Electronics = 'electronics',
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
