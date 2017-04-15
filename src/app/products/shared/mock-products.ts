import { Product } from './product.model';

let nextProductId = 0;

export const getNextProductId = (): number => {
  return ++nextProductId;
};

export const Products: Product[] = [
  {
    id: getNextProductId(),
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: getNextProductId(),
    name: `Product ${nextProductId}`,
    description: '',
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: getNextProductId(),
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: getNextProductId(),
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  },
  {
    id: getNextProductId(),
    name: `Product ${nextProductId}`,
    description: `Product ${nextProductId} description`,
    price: nextProductId * 10,
    creationDate: new Date()
  }
];
