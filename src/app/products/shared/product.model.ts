export class Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  creationDate: Date;

  constructor() {
    this.name = "";
    this.description = "";
    this.price = 1;
    this.creationDate = new Date();
  }
}
