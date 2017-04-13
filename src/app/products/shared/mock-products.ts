import { Product } from './product.model';

let nextProductId = 0;

export const Products: Product[] = [
  {
    id: nextProductId++,
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: nextProductId++,
    name: `Product ${nextProductId}`,
    // description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: nextProductId++,
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: nextProductId++,
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: nextProductId++,
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  }
];
